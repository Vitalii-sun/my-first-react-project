import React from "react";
import "./styles.scss";

export default ({ title, text, removeArticle, index, setArticle, toggleModalWindow }) => {
  return (
    <div>
      {title} {text}
      
      <button
        onClick={() => {
          setArticle({ title, text, index });
          toggleModalWindow();
        }}
      >
        Edit article
        
      </button>
      <button onClick={() => removeArticle(index)}>Remove article</button>
    </div>
  );
};
