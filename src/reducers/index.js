import { combineReducers } from "redux";

const postsReceivedReducer = (posts = [], action) => {
  if (action.type === "POSTS_RECEIVED") {
    return action.payload;
  }
  return posts;
};

export default combineReducers({
  posts: postsReceivedReducer,
});
