import React from "react";
import  {useState} from 'react';

function AddComment(props) {
    const [name, setName] = useState('');
    const [com, setCom] = useState('');
    const[email, setEmail] = useState('');
    const[btitle, setBtitle] = useState('');
    

    const comm = (e) => {
        /* to avoid reloading */
        e.preventDefault();
        if(!name || !email ||!com ||!btitle){
            alert("Please fill all the entries")
        }
        else{
        props.addComment(name,email,com, btitle);
        setName("");
        setEmail("");
        setCom("");
        setBtitle("");
        }
        
    };

  return (
    <>
    <div className="container-fluid">
      <h3>Feel free to comment</h3>
      <form onSubmit={comm}>
      <div className=" mb-3">
        <label htmlFor='name' className="form-label">Your Name</label>
        <input
          className="form-control"
          type="text"
          value={name}
          aria-label="Your name"
          
          onChange={(e)=>{setName(e.target.value)}}
        />
        <label htmlFor="email" className="form-label">
          Your Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
        />
        <label htmlFor="btitle" className="form-label mt-3" >Title (This field is case sensitive. Write the exact title of the blog.)
        <input
          value={btitle}
          onChange={(e)=>{setBtitle(e.target.value)}}
        
        />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="com" className="form-label">
          Write your comments about the blog
        </label>
        <textarea
          className="form-control"
          id="comment"
          rows="3"
          value={com}
          onChange={(e)=>{setCom(e.target.value)}}
        ></textarea>
        
      </div>
      <button type="submit" class="btn btn-secondary mt-3" >Comment</button>
      </form>
      </div>
      
    </>
  );
};

export default AddComment;
