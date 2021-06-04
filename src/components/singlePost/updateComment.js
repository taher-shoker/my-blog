import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getComment, updateComment } from "../../action/commentActions";
import { connect } from "react-redux";
import Spinner from '../../common/spinner'
const UpdateComment = ({
  getComment,
  updateComment,
  history,
  comment: { comment, loading },
  match,
}) => {
  const [text, setText] = useState("");
 
  useEffect(() => {
    getComment(match.params.postId, match.params.id);
  }, [getComment,match.params.postId,match.params.id]);


//   const onChange = (e) => setText(e.target.value);
  const onChange = e => setText(e.target.value)

  const onSubmit = (e) => {
    e.preventDefault();
    updateComment(match.params.postId,match.params.id,text,history)
  };
  return (
    <>
      <section className="container">
        <h1 className="large text-primary">{ comment === null || loading ?  <Spinner/>: comment.text}</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Update the text of post
        </p>

        <div className="post-form">
          <form className="form my-1" onSubmit={(e) => onSubmit(e)}>
            <textarea
              required
              name="text"
              cols="30"
              rows="5"
              value={text}
              onChange={(e) => onChange(e)}
            ></textarea>
            <input type="submit" className="btn btn-dark my-1" value="Submit" />
          </form>
        </div>
      </section>
    </>
  );
};

UpdateComment.propTypes = {
  getComment: PropTypes.func.isRequired,
  updateComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  comment: state.comment,
});

export default connect(mapStateToProps, { getComment, updateComment })(UpdateComment);
