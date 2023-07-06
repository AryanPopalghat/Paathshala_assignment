import React from 'react'
import { Link } from 'react-router-dom'

const blog = ({blog, onDelete}) => {
  return (
    <>
    
    <div class="card text-center my-5" style={{boxShadow:'0px 0px 32px 0px black'}}>
    <div className="card-body">
      <h5 className="card-title" style={{color:"rgb(2, 56, 61)",fontWeight:'600',fontSize:'xx-large'}}>{blog.title}</h5>
      <img src={blog.image} className="container-fuid my-4 py-3 mb-5" style={{height:'400px',width:'600px', maxWidth:'100%' , border: '5px solid burlywood',borderRadius:'10px',paddingRight:'-1em',paddingLeft:'-1em',boxShadow:'0px 0px 32px 0px black' }} alt='Pic for the blog'></img>
      <p className="text-justify mx-3" style={{textAlign:'justify',color:'rgb(53, 79, 91)',fontFamily:'Arial, Helvetica, sans-serif',fontSize:'large',fontWeight:'500', textIndent:'40px'}}>{blog.desc}</p>
      <button to="#" className="btn btn-sm btn-danger" onClick={()=>{onDelete(blog)}} >Delete</button>
    </div>
    <div className="card-footer text-body-secondary">
      Uploaded on {blog.submissionTime}
      <Link to="/comments" class="card-link mx-3">Comments</Link>
    </div>
  </div>
  <hr/>
  </>
  )
}

export default blog
