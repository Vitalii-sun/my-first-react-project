import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import { getArticles } from "../../selectors";

export default () => {
  const articles = useSelector(getArticles());
  return (
    <div className="header">
      <h1>Articles: {articles.length}</h1>
    </div>
  );
};
