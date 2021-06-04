import {
  GET_POST,
  GET_POSTS,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
} from "../action/types";
const initialState = {
  posts: [],
  post: null,
  loading: true,

  error: {},
};

 const Post =(state = initialState, action) => {
  const { type, pyload } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: pyload,
        loading: false,
      };
      case GET_POST:
      return {
        ...state,
        post:  pyload,
        loading: false,
      };
      case UPDATE_POST:
        return{
          ...state,
          posts:state.posts.filter(({id}) => id == pyload.id),
          loading: false
        }
    case CREATE_POST:
      return {
        ...state,
        posts: [pyload, ...state.posts],
        loading: false,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== pyload),
        loading: false,
      };
    default:
      return state;
  }
};

export default Post