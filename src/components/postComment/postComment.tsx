import React, { useState, useContext } from "react";

import "./postComment.scss";

import { CommentContext } from "../../context/commentContext";
import { CommentContextType, IDiscussion } from "../../dataTypes";

const PostComment: React.FC<{ placeholder: string; id: number }> = ({
  placeholder,
  id
}) => {
  const { addComment } = useContext(CommentContext) as CommentContextType;

  const [formData, setFormData] = useState<IDiscussion | {}>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,

      [e.currentTarget.id]: e.currentTarget.value
    });
  };
  const handleSaveTodo = (e: React.FormEvent, formData: IDiscussion | any) => {
    e.preventDefault();
    addComment(formData, id);

    // alert("new comment added:)")
  };
 

  return (
    <>
      <div className="img-avatar-box">
        <img
          src="https://www.godaddy.com/garage/wp-content/uploads/judith-kallos-BW-NEW-150x150.jpg"
          className="img-avatar"
        alt=""/>
      </div>
      <form
        className="post-input-box"
        onSubmit={e => handleSaveTodo(e, formData)}
      >
        <input
          placeholder={placeholder}
          className="post-input"
          onChange={handleForm}
          type="text"
          id="text"
          required={true}
        />
      </form>
    </>
  );
};

export default PostComment;
