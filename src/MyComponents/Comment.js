import React from "react";

const comment = ({comment}) => {
  return (
    <>
  <div>
    <div className="card w-75 mb-3">
      <div className="card-body">
        <h5 className="card-title" style={{ color: "black" }}><b>{comment.btitle}</b></h5>
        <p className="card-text" style={{ color: "black" }}>
        {comment.email}
        </p>
        <h6 className="card-text " style={{ color: "rgb(63, 61, 61)" , textAlign:'right',fontFamily:'"Lucida Console", "Courier New", monospace',fontSize:'small' }}>
          - {comment.name}<br/>({comment.com})
        </h6>
      </div>
    </div>
  </div>
  <hr></hr>
</>

  );
};

export default comment;
