import React, { useState, useEffect } from "react";
import Article from "./components/Article/Article";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";

export default () => {
  const [articles, setArticles] = useState([]);
  const [showModal, setModalStatus] = useState(false);
  const [selectedArticle, setArticle] = useState(null);
  useEffect(() => {
    if (!articles.length) {
      setArticles([
        { title: "Test title 001", text: "Test text", img:null },
        { title: "Test title 002", text: "Test text", img:null },
        { title: "Test title 003", text: "Test text", img:null },
        { title: "Test title 004", text: "Test text", img:null }
      ]);
    }
  }, [articles]);

  const removeArticle = index => {
    const newArticles = [...articles].filter((_, idx) => idx !== index);
    setArticles(newArticles);
  };
  const addArticle = (title, text) => {
    const newArticles = [...articles];
    newArticles.push({ title, text });
    setArticles(newArticles);
    toggleModalWindow();
  };

  const updateArticle = (title, text, index) => {
    const newArticles = [...articles].map((artical, idx) => {
      if (idx === index) {
        return { title, text };
      } else {
        return artical;
      }
    });
    setArticles(newArticles);
    toggleModalWindow();
  };

  const toggleModalWindow = () => setModalStatus(!showModal);

  return (
    <div>
      <Header total={articles.length} />
      <button onClick={toggleModalWindow}>Add new article</button>
      {articles.map((article, idx) => (
        <Article
          toggleModalWindow={toggleModalWindow}
          setArticle={setArticle}
          removeArticle={removeArticle}
          {...article}
          index={idx}
          key={idx}
        />
      ))}
      {showModal && (
        <Modal
          toggleModalWindow={toggleModalWindow}
          updateArticle={updateArticle}
          addArticle={addArticle}
          selectedArticle={selectedArticle}
        />
      )}
    </div>
  );
};
