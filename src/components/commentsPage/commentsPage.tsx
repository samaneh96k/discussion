import React from "react";
import PostComment from "./../postComment/postComment";
import SingleComment from "./../singleComment/singleComment";
import { CommentContext } from "../../context/commentContext";
import { CommentContextType } from "../../dataTypes";

const CommentsPage = () => {
  const { discussions } = React.useContext(
    CommentContext
  ) as CommentContextType;

  return (
    <div className="container">
      <div className="post-comment-container">
        <div className="post-comment">
          <PostComment placeholder={"Start a discussion"} id={0} />
        </div>
      </div>

      {discussions.map(dis => <SingleComment dis={dis} key={dis.id} />)}
    </div>
  );
};

export default CommentsPage;
