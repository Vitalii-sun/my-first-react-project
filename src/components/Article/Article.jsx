import React from "react";
import "./styles.scss";
import { A_RemoveArticlesRequest } from "../../actions";
import { useDispatch } from "react-redux";

export default ({ title, text, id, setArticle, toggleModalWindow }) => {
  const dispatch = useDispatch();
  return (
    <div className="article">
      {title} {text}
      <button
        className="modalButtom"
        onClick={() => {
          setArticle({ title, text, id });
          toggleModalWindow();
        }}
      >
        Edit article
      </button>
      <button className="modalButtom" onClick={() => dispatch(A_RemoveArticlesRequest(id))}>
        Remove article
      </button>
    </div>
  );
};
