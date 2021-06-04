import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addComment} from '../../action/commentActions'

const CommentForm = ({addComment,postId}) => {
   const [text,setText] = useState('')

const onChange = e =>setText(e.target.value)   
const onSubmit = e =>{
    e.preventDefault()
    console.log(postId)
    addComment(postId,{text})
    setText('')
}
    return (
        <>

<div className="post-form">
        <div className="bg-primary p">
          <h3>Leave A Comment</h3>
        </div>
        <form className="form my-1" onSubmit={e=>onSubmit(e)}>
          <textarea
            name="text"
            cols="30"
            rows="5"
            placeholder="Comment on this post"
            required
            value={text}
            onChange={e=>onChange(e)}
          ></textarea>
          <input type="submit" className="btn btn-dark my-1" value="Submit" />
        </form>
      </div>

        </>
    )
}

CommentForm.propTypes = {
    addComment:PropTypes.func.isRequired,
}



export default connect(null, {addComment})(CommentForm)