import { PostActions } from "../actionType";
import {
  createPost,
  updatePost,
  getPosts,
  deletePost
} from "../../api ops/api methods/postApi";

// Create Post
export const CreatePostData = (formData) => {
  return function (dispatch) {
    return createPost(formData)
      .then((response) => {
        if (response.data && response.data.success) {
          dispatch({
            type: PostActions.CREATE_POST_SUCCESS,
            payload: response.data,
          });
        } else {
          dispatch({
            type: PostActions.CREATE_POST_FAILED,
            payload: "Create post failed.",
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: PostActions.CREATE_POST_FAILED,
          payload: error,
        });
      });
  };
};

// Fetch Posts
export const GetPostData = () => {
  return function (dispatch) {
    return getPosts()
      .then((response) => {
        if (response) {
          dispatch({
            type: PostActions.FETCH_SUCCESS,
            payload: response.data,
          });
        } else {
          console.log("No response received.");
          dispatch({
            type: PostActions.FETCH_FAILED,
            payload: "No response received.",
          });
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        dispatch({
          type: PostActions.FETCH_FAILED,
          payload: error,
        });
      });
  };
};

// Update Post
export const UpdatePost = (postID, data) => {
  return function (dispatch) {
    return updatePost(postID, data)
      .then((response) => {
        console.log('Upate response: ', response);
        if (response.data && response.success) {
          dispatch({
            type: PostActions.UPDATE_POST_SUCCESS,
          });
        } else {
          dispatch({
            type: PostActions.UPDATE_POST_FAILED,
            payload: "Update post failed.",
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: PostActions.UPDATE_POST_FAILED,
          payload: error,
        });
      });
  };
};

// Delete Post
export const DeletePost = (id) => {
  return function (dispatch) {
    return deletePost(id)
      .then((response) => {
        if (response.data && response.data.success) {
          dispatch({
            type: PostActions.DELETE_POST_SUCCESS,
            payload: response.data,
          });
        } else {
          dispatch({
            type: PostActions.DELETE_POST_FAILED,
            payload: "Delete post failed.",
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: PostActions.DELETE_POST_FAILED,
          payload: error,
        });
      });
  };
};
