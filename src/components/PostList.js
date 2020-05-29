import React from "react";
import PostAuthor from "./PostAuthor";
import { connect } from "react-redux";
import { postsReceived } from "./actions";

class PostList extends React.Component {
  renderedList = this.props.posts.map((post) => {
    return (
      <div className="comment">
        <div className="avatar">
          <img src="https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png" />
        </div>
        <div className="content">
          <div className="author">
            <PostAuthor />
          </div>
        </div>
        <div className="text">{post.body}</div>
      </div>
    );
  });

  render() {
    return <div className="ui comments">{this.renderedList}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { postsReceived })(PostList);
