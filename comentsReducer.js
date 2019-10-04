import { ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT } from "./actionTypes";

const initialState = {
  comments: [],
  users: []
};

function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      state = {
        ...state,
        comments: [
          ...state.coments,
          {
            id: action.id,
            text: action.text,
            votes: 0
          }
        ]
      };
      break;

    case REMOVE_COMMENT:
      state = {
        ...state,
        comments: state.comments.filter(comment => comment !== action.id)
      };
      break;

    case EDIT_COMMENT:
      state = {
        ...state,
        comments: state.comments.map(comment => {
          if (comment.id === action.id) comment.text = action.text;

          return comment;
        })
      };
      break;

    case THUMB_UP:
      state = {
        ...state,
        comments: state.comments.map(comment => {
          if (comment.id === action.id) comment.vote += 1;

          return comment;
        })
      };
      break;

    case THUMB_UP:
      state = {
        ...state,
        comments: state.comments.map(comment => {
          if (comment.id === action.id) comment.vote -= 1;

          return comment;
        })
      };
      break;

    default:
      return state;
  }
}

export default commentsReducer;
