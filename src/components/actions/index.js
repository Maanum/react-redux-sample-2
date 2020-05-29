export const postsReceived = (posts) => {
  return {
    type: "POSTS_RECEIVED",
    payload: posts,
  };
};
