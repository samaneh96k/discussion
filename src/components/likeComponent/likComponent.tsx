import { CommentContext } from "../../context/commentContext";
import { CommentContextType, IComment, IDiscussion } from "../../dataTypes";
import { useContext } from 'react';
import { AiFillLike } from 'react-icons/ai';

const LikeComponent: React.FC<{ dis: IDiscussion }> = props => {
    const { likeComment } = useContext(
      CommentContext
    ) as CommentContextType;
    const { dis } = props;
    const likeHandler = () => {
      likeComment(dis.id);
    };
    return (

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
       
    )
}
export default LikeComponent;