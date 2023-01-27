
import { useRef,useEffect,useState } from "react";
import getTimeAgo from "./../../utils/timeAgo";
import { IDiscussion } from '../../dataTypes';

const Comment: React.FC<{
    dis: IDiscussion  ;
    lastname: string;
    firstname: string;
    children?: any;
    isreply: boolean;
  }> = props => {
    const { firstname, lastname, children, dis, isreply } = props;
  
  
    const regex = /@\w+/g;
  
    const [height, setHeight] = useState(0)
 
    return (
      <>
        {dis.user.avatar
          ? <div className="img-avatar-box avatar-size ">
              <img className="img-avatar" src={dis.user.avatar} />
              {isreply && dis.replies.length> 0 &&  <div className="reply-left-border" style={{height:`${height-100}px`}} />}
            </div>
          : <div className="text-avatar-box">
              <div className="text-avatar">
                {firstname[0]}
                {lastname[0]}
            </div>
            {isreply && dis.replies.length > 0 && <div className="reply-left-border" style={{height:`${height}px`}}/>}
            </div>}
        <div className="comment-content"  onLoad={e=>setHeight(e.currentTarget.offsetHeight)}>
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
    
                   
              </div>
          </div>
          
          {children}
        </div>
      </>
    );
    };
export default Comment;