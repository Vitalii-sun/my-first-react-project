import React, { useState, useEffect } from "react";
import Article from "./components/Article/Article";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "./selectors";
import { A_FethArticlesRequest } from "./actions";

export default () => {
  const dispatch = useDispatch();
  const articles = useSelector(getArticles());

  const [showModal, setModalStatus] = useState(false);
  const [selectedArticle, setArticle] = useState(null);

  useEffect(() => {
    if (!articles.length) {
      dispatch(A_FethArticlesRequest());
    }
  }, [articles]);

  const toggleModalWindow = () => setModalStatus(!showModal);

  return (
    <div>
      <Header />
      <button className="addButton" onClick={toggleModalWindow}>
        Add new article
      </button>
      {articles.map((article, idx) => (
        <Article
          className="allArticles"
          toggleModalWindow={toggleModalWindow}
          setArticle={setArticle}
          {...article}
          index={idx}
          key={idx}
        />
      ))}
      {showModal && (
        <Modal toggleModalWindow={toggleModalWindow} setArticle={setArticle} selectedArticle={selectedArticle} />
      )}
    </div>
  );
};
