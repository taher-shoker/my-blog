import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from '../../common/spinner'
import { getPost } from '../../action/postActions'
import {getComments } from '../../action/commentActions'
import CommentForm from './commentForm';
import DisplayComments from './showComments';
import Moment from 'react-moment'



const Post = ({ getPost,getComments,comment:{comments, commentLoading}, post: { post, loading }, match }) => {
    useEffect(() => {
        getPost(match.params.id);
    }, [getPost,match.params.id])
     useEffect(() => {
        getComments(match.params.id);
    }, [getComments,match.params.id])
    return post === null || loading ? (<Spinner />) : (<>
                <section className="container">
                    <Link to="/" className="btn">Back To Posts</Link>
                    <div className="post bg-white p-1 my-1">
                        <div>
                                <img
                                    className="round-img"
                                    src={post.avatar}
                                    alt=""
                                />
                                <h4>{post.name}</h4>
                        </div>
                        <div>
                            <p className="my-1">
                                {post.text}
                            </p>
                            <p className="post-date">
                               Posted on <Moment format='DD-MM-YYYY'>{post.date}</Moment>
                           </p>
                        </div>
                        
                    </div>
                <CommentForm postId={post.id}/>
                 <div className="comments">
                    {comments.length <= 0 ? <><Spinner/><p>There is no Comments for this post  </p></> : <>  {Object.values(comments).map(comment => (
                    <DisplayComments key={comment.id} comment={comment}/>
                  ))}  
                </> }
                
                </div>
                </section>
            </>
            )



}

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    getComments:PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,

}

const mapStateToProps = state => ({
    post: state.post,
    comment: state.comment
    
})

export default connect(mapStateToProps, { getPost,getComments })(Post)
