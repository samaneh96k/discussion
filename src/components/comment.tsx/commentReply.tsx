import { useContext } from 'react';

import { AiFillLike } from "react-icons/ai";
import getTimeAgo from "../../utils/timeAgo";
import { CommentContextType, IComment } from '../../dataTypes';
import { CommentContext } from "../../context/commentContext";


const CommentReply: React.FC<{
    dis:IComment ;
    lastname: string;
    firstname: string;
    children?: any;
    isreply: boolean;
  }> = props => {
    const { firstname, lastname, children, dis, isreply } = props;
    const {  likeCommentReply } = useContext(
      CommentContext
    ) as CommentContextType;
   
    const regex = /@\w+/g;
    const likeHandler = () => {
      likeCommentReply(dis.id);
    };
  
    return (
      <>
        {dis.user.avatar
          ? <div className="img-avatar-box avatar-size ">
              <img className="img-avatar" src={dis.user.avatar} />
             
            </div>
          : <div className="text-avatar-box">
              <div className="text-avatar">
                {firstname[0]}
                {lastname[0]}
              </div>
            </div>}
        <div className="comment-content">
          <div className="username">
            <h2>
              {dis.user.name}
            </h2>
            <span>
              {getTimeAgo(dis.date)}
            </span>
          </div>
          <div className="text-content">
            {dis.text.split(" ").map(
              (text,index) =>
                text.match(regex)
                  ? <a href="#" className="text-link" key={index}>
                      {text}
                    </a>
                  : <span key={index}>{`${text} `}</span>
            )}
            
            
                    <div>
                    <div className="like-content">
                         
            <button
              type={"button"}
              className={`${!dis.iLikedIt
                ? "btn-unlike"
                : "btn-like"} btn-like-comment`}
              onClick={likeHandler}
            >
              <AiFillLike
                className={`${dis.iLikedIt ? "like-icon" : "unlike-icon"}`}
              />
              <span>
                {dis.likes}
              </span>
            </button>
                            {isreply&& <button  className="btn-reply">Reply</button>}
                   </div>
                   
                   </div>
          </div>
          
          {children}
        </div>
      </>
    );
    };
export default CommentReply;