import { ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT } from "./actionTypes";

function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  };
}

function editComment(text, id) {
  return {
    type: EDIT_COMMENT,
    text,
    id
  };
}

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  };
}

function thumbUpComment(id) {
  return {
    type: THUMB_UP,
    id
  };
}

function thumbDownComment(id) {
  return {
    type: THUMB_DOWN,
    id
  };
}

const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = text => dispatch(editComment(text, id));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundThumbUpComment = id => dispatch(thumbUpComment(id));
const boundThumbDownComment = id => dispatch(thumbDownComment(id));
