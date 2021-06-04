import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getPost, updatePost } from "../../action/postActions";
import { connect } from "react-redux";
import Spinner from '../../common/spinner'
const UpdatePost = ({
  getPost,
  updatePost,
  post: { post, loading },
  match,
  history
}) => {
  const [text, setText] = useState("");
  

  useEffect(() => {
    getPost(match.params.id);
    setText( post === null || loading ? "" : post.text)
  }, [getPost, match.params.id]);



  const onChange = e => setText(e.target.value)

  const onSubmit = (e) => {
    e.preventDefault();
     updatePost(match.params.id,text,history)
  };
  return (
    <>
      <section className="container">
        <h1 className="large text-primary">{ post === null || loading ?  <Spinner/> : post.text}</h1>
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

UpdatePost.propTypes = {
  getPost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost, updatePost })(UpdatePost);
