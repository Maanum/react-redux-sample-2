import { combineReducers } from "redux";
import dummyPosts from "./dummyPosts.json";

const postsReceivedReducer = (posts = dummyPosts, action) => {
  if (action.type === "postsReceived") {
    return action.payload;
  }
  return posts;
};

export default combineReducers({
  posts: postsReceivedReducer,
});
