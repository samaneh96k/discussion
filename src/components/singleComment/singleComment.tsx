import React, { useState, useEffect } from "react";

import "./singleComment.scss";
import PostComment from "./../postComment/postComment";
import { IDiscussion } from "../../dataTypes";
import Comment from "../comment.tsx/comment";
import CommentReply from "./../comment.tsx/commentReply";
import LikeComponent from "./../likeComponent/likComponent";

const SingleComment: React.FC<{ dis: IDiscussion }> = props => {
  const { dis } = props;
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [isreply, setReply] = useState<boolean>(false);
  const [replyShow, setShow] = useState<boolean>(false);

  const nameSpliter = (name: string) => {
    const nameSplited: string[] = name.split(" ");

    setFirstName(nameSplited[0]);
    setLastName(nameSplited[1]);
  };

  useEffect(() => {
    nameSpliter(dis.user.name);
  }, []);

  return (
    <div className="comment-container">
      <Comment
        dis={dis}
        firstname={firstName}
        lastname={lastName}
        isreply={replyShow}
      >
        <div className="like-content">
          <LikeComponent dis={dis} />
          <button className="btn-reply" onClick={() => setShow(!replyShow)}>
            Reply
          </button>
        </div>

        <div />

        <div className={` ${replyShow ? "reply-comment-box" : "disply-none"}`}>
          {dis.replies.length > 0
            ? dis.replies.map(rep =>
                <div className="reply-comment" key={rep.id}>
                  <CommentReply
                    dis={rep}
                    firstname={firstName}
                    lastname={lastName}
                    isreply={isreply}
                  />
                </div>
              )
            : null}
          {replyShow &&
            <div className="postcomment-container">
              <PostComment placeholder={"Reply"} id={dis.id} />
            </div>}
        </div>
      </Comment>
    </div>
  );
};

export default SingleComment;
