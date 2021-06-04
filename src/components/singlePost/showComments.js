import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { deleteComment } from '../../action/commentActions';

const DisplayComments = ({ comment: { id, text, name, date, avatar,postId }, deleteComment }) => {
    return (
        <>
            <div className="post bg-white p-1 my-1">
                <div>
                   
                        <img
                            className="round-img"
                            src={avatar}
                            alt=""
                        />
                        <h4>{name}</h4>
                </div>
                <div>
                    <p className="my-1">
                        {text}
                    </p>
                    <p className="post-date">
                        <Moment format='DD-MM-YYYY' >{date}</Moment>
                    </p>
                    <Link to={`${postId}/edit/${id}`} className="btn btn-primary">
          Edit           </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={e => deleteComment(postId,id)}
                    >
                       X
                    </button>
                        
         
                </div>
            </div>

        </>
    )
}

DisplayComments.propTypes = {
    comment: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
})

export default connect(mapStateToProps, { deleteComment })(DisplayComments)
