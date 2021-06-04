import {
    GET_COMMENTS,
    GET_COMMENT,
    ADD_COMMENT,
    UPDATE_COMMENT,
    DELETE_COMMENT,
  } from "../action/types";
  const initialState = {
    comments:[],
    comment:null,
    commentLoading: true,
    error: {},
  };
  
 const Comment = (state = initialState, action) => {
    const { type, pyload } = action;
    switch (type) {
        case GET_COMMENTS:
          return {
            ...state,
            comments:pyload,
            commentLoading: false,
          };
          case UPDATE_COMMENT:
             return {
              ...state,
              comments:state.comments.filter(({id}) => id == pyload.id),
              commentLoading: false,
            };
          case GET_COMMENT:
            return {
              ...state,
              comment: pyload,
              commentLoading: false,
            };
      case ADD_COMMENT:
        return {
          ...state,
          comments: [pyload,...state.comments ],
          commentLoading: false,
        };
      case DELETE_COMMENT:
        return {
          ...state,
          comments: [...state.comments.filter((comment) => comment.id !== pyload)],
          commentLoading: false,
        };

      default:
        return state;
    }
  };
  
  export default Comment