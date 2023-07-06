import React from "react";
import Comment from "./Comment";
const Comments = (props) => {
  return (
    <div className="container-fluid">
      <h3 className="text-center my-3">Comments</h3>
      { props.comments.length===0? "No comments to display":
      props.comments.map((comment) => {
            return (
              <Comment
                comment={comment}
                key={comment.csno}
                
              />
            );
          })}
    </div>
  );
};

export default Comments;
