import React from 'react'
import  {useState} from 'react';

function AddBlog(props) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const[link, setLink] = useState('');
    const [submissionTime, setSubmissionTime] = useState('');

    const submit = (e) => {
        /* to avoid reloading */
        e.preventDefault();
        if(!title || !desc ||!link){
            alert("Title or Description or Image link can't be blank")
        }
        else{
        props.addBlog(title,desc,link,submissionTime);
        setTitle("");
        setDesc("");
        setLink("");
        }
        const currentTime = new Date().toLocaleTimeString(); // Get current time
        setSubmissionTime(currentTime);
    };
    return (
        <div className='container-fluid'>
            <h3>Add your Blog here</h3>
            <form onSubmit={submit}>
                <div class="mb-3">
                    <label htmlFor="title" className="form-label"><b>Blog Title</b></label>
                    <input type="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {submissionTime && <p>Submission Time: {submissionTime}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label"><b>Write your blog here</b></label>
                    <textarea value={desc} onChange={(e)=>{setDesc(e.target.value)}}className="form-control" id="blogdesc1" rows="4"></textarea>
                </div>
                <div class="mb-3">
                    <label htmlFor="link" className="form-label"><b>Paste image link here</b></label>
                    <input type="link" value={link} onChange={(e)=>{setLink(e.target.value)}} className="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}


export default AddBlog
