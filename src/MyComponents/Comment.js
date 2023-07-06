import React from "react";

const comment = (comment) => {
  return (
    <>
  <div>
    <div className="card w-75 mb-3">
      <div className="card-body">
        <h5 className="card-title" style={{ color: "black" }}>{comment.btitle}</h5>
        <p className="card-text" style={{ color: "black" }}>
          {comment.com}
        </p>
        <h6 className="card-text text-centre" style={{ color: "black" }}>
          -{comment.name}<br/>({comment.email})
        </h6>
      </div>
    </div>
  </div>
  <hr></hr>
</>

  );
};

export default comment;
