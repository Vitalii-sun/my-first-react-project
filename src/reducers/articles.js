import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  ADD_ARTICLES_REQUEST,
  ADD_ARTICLES_SUCCESS,
  ADD_ARTICLES_FAILURE,
  REMOVE_ARTICLES_REQUEST,
  REMOVE_ARTICLES_SUCCESS,
  REMOVE_ARTICLES_FAILURE,
  EDIT_ARTICLES_REQUEST,
  EDIT_ARTICLES_SUCCESS,
  EDIT_ARTICLES_FAILURE
} from "../constans";

const initialState = {
  loading: false,
  error: null,
  articles: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLES_REQUEST:
    case FETCH_ARTICLES_REQUEST:
    case REMOVE_ARTICLES_REQUEST:
    case EDIT_ARTICLES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.payload
      };
    case FETCH_ARTICLES_FAILURE:
    case ADD_ARTICLES_FAILURE:
    case REMOVE_ARTICLES_FAILURE:
    case EDIT_ARTICLES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case ADD_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: [...state.articles, action.payload]
      };

    case REMOVE_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: state.articles.filter(article => article.id !== action.payload)
      };

    case EDIT_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: state.articles.map(artical => {
          if (artical.id === action.payload.id) {
            return { ...action.payload };
          } else {
            return artical;
          }
        })
      };
    default:
      return state;
  }
};
