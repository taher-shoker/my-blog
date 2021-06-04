import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Moment from 'react-moment' 
import {Link} from 'react-router-dom'
import {deletePost,updatePost} from '../../action/postActions'


const PostItem = ({
  post:{id,text,name,avatar,date,user},
  deletePost,updatePost}) => {

 
    return (
        <>
          <div className="post bg-white p-1 my-1">
          <div>
          
              <img
                className="round-img"
                src={avatar}
                alt={name}
              />
              <h4>{name}</h4>
          
          </div>
          <div>
            <p className="my-1">
            {text}
            </p>
             <p className="post-date">
                Posted on <Moment format='DD-MM-YYYY'>{date}</Moment>
            </p>
            
           
          <Link to={`edit/${id}`} className="btn btn-primary">
          Edit           </Link>
           
            <Link to={`posts/${id}`} className="btn btn-secondary">
               View Comments 
             </Link>
           <button      
            type="button"
            className="btn btn-danger"
            onClick={e=>deletePost(id)}
          >
            X
          </button>
          
          </div>
        </div>  
        </> 
    )
}

PostItem.propTypes = {
post:PropTypes.object.isRequired,
deletePost:PropTypes.func.isRequired,
updatePost:PropTypes.func.isRequired


}

export default  connect(null,{deletePost,updatePost})(PostItem)
