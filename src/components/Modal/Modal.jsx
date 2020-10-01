import React, { useState, useEffect } from "react";
import "./styles.scss";

export default props => {
  const [title, hendleChangeTitle] = useState("");
  const [text, hendleChangeText] = useState("");

  useEffect(() => {
    if (props.selectedArticle) {
      hendleChangeTitle(props.selectedArticle.title);
      hendleChangeText(props.selectedArticle.text);
    }
  }, [props.selectedArticle]);

  const getActionButton = () => {
    if (props.selectedArticle) {
      return <button type="submit">Save article</button>;
    } else {
      return <button type="submit">Add article</button>;
    }
  };

  const hendelSubmit = event => {
    console.log("sdadfghnjm");
    event.preventDefault();
    event.stopPropagation();
    props.selectedArticle
      ? props.updateArticle(title, text, props.selectedArticle.index)
      : props.addArticle(title, text);
  };

  return (
    <div className="modal-wrapper">
      <form className="modal" onSubmit={hendelSubmit}>
        <div className="form-fields">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" value={title} onChange={event => hendleChangeTitle(event.target.value)} />
          <br />
          <label htmlFor="text">Text</label>
          <textarea id="text" value={text} onChange={event => hendleChangeText(event.target.value)} />
        </div>
        <div className="form-actions">
          {getActionButton()}
          <button type="button" onClick={props.toggleModalWindow}>
            Close modal
          </button>
        </div>
      </form>
    </div>
  );
};
