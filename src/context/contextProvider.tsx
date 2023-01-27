import { useState } from "react";

import { CommentContext } from "./commentContext";
import { IDiscussion } from "../dataTypes";
import Discussions from "../dataTypes";
const CommentProvider: React.FC<{ children: React.ReactNode }> = props => {
  const [discussions, setDiscussions] = useState<IDiscussion[]>(Discussions);

  const addComment = (comment: IDiscussion, id: number) => {
    const newComment: IDiscussion = {
      id: Date.now(),
      date: Date.now(),
      user: {
        name: "Bessie Cooper",
        avatar:
          "https://www.godaddy.com/garage/wp-content/uploads/judith-kallos-BW-NEW-150x150.jpg"
      },
      text: comment.text,
      likes: 0,
      iLikedIt: false,
      replies: []
    };
    if (id) {
      discussions.filter((dis: IDiscussion) => {
        if (dis.id === id) {
          discussions.filter(
            dis => dis.id === id && dis.replies.push(newComment)
          );
          setDiscussions([...discussions]);
         
        }
      });
    } else {
  
      setDiscussions([...discussions, newComment]);
    }
    
  };

  const likeComment = (id: number) => {
    discussions.filter((dis: IDiscussion) => {
      if (dis.id === id) {
        if (dis.iLikedIt) {
          dis.iLikedIt = false;
          dis.likes -= 1;
        } else {
          dis.iLikedIt = true;
          dis.likes += 1;
        }

        setDiscussions([...discussions]);
      }
    });
  };
  const likeCommentReply = (id: number) => {
    discussions.map((dis: IDiscussion) => {
      dis.replies.map(rep => {
        if (rep.id === id) {
          if (rep.iLikedIt) {
            rep.iLikedIt = false;
            rep.likes -= 1;
          } else {
            rep.iLikedIt = true;
            rep.likes += 1;
          }

          setDiscussions([...discussions]);
        }
      });
    });
  };

  return (
    <CommentContext.Provider
      value={{ discussions, addComment, likeComment, likeCommentReply }}
    >
      {props.children}
    </CommentContext.Provider>
  );
};

export default CommentProvider;
