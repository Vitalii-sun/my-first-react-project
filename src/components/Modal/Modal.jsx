import React, { useState, useEffect } from "react";
import { A_AddArticlesRequest } from "../../actions";
import { A_EditArticlesRequest } from "../../actions";
import { useDispatch } from "react-redux";
import "./styles.scss";

export default props => {
  const dispatch = useDispatch();
  const [title, hendleChangeTitle] = useState("");
  const [text, hendleChangeText] = useState("");

  useEffect(() => {
    console.log(props.selectedArticle);
    if (props.selectedArticle) {
      hendleChangeTitle(props.selectedArticle.title);
      hendleChangeText(props.selectedArticle.text);
    }
  }, [props.selectedArticle]);

  const getActionButton = () => {
    if (props.selectedArticle) {
      return (
        <button className="modalButtom" type="submit">
          Save article
        </button>
      );
    } else {
      return (
        <button className="modalButtom" type="submit">
          Add article
        </button>
      );
    }
  };

  const hendelSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    props.selectedArticle
      ? dispatch(A_EditArticlesRequest({ title, text, id: props.selectedArticle.id }))
      : dispatch(A_AddArticlesRequest({ title, text }));
    props.toggleModalWindow();
    props.setArticle(null);
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
          <button className="modalButtom" type="button" onClick={props.toggleModalWindow}>
            Close modal
          </button>
        </div>
      </form>
    </div>
  );
};
