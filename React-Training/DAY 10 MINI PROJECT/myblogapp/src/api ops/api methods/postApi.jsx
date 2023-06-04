import axios from 'axios';
import { successMessage, errorMessage } from '../api response/apiResponse';

export const createPost = (formdata) => {
  return axios.post('http://localhost:3001/post/newpost', formdata)
    .then(response => {
      console.log('data: ', response.data);
      return {
        success: true,
        message: successMessage,
        data: response.data
      };
    })
    .catch(error => {
      console.error('Error creating post:', error);
      return {
        success: false,
        message: errorMessage,
        error: error.message
      };
    });
};

export const getPosts = () => {
  return axios.get('http://localhost:3001/post/getpost')
    .then(response => {
      return {
        success: true,
        message: successMessage,
        data: response.data
      };
    })
    .catch(error => {
      console.error('Error Getting post:', error);
      return {
        success: false,
        message: errorMessage,
        error: error.message
      };
    });
};


export const updatePost = (post,id) => {
  return axios.put(`http://localhost:3001/post/update/${id}`,post)
    .then(response => {
      console.log('data: ', response.data);
      return {
        success: true,
        message: successMessage,
        data: response.data
      };
    })
    .catch(error => {
      console.error('Error Getting post:', error);
      return {
        success: false,
        message: errorMessage,
        error: error.message
      };
    });
};

export const deletePost = (id) => {
  return axios.delete(`http://localhost:3001/post/delete/${id}`)
    .then(response => {
      console.log('data: ', response.data);
      return {
        success: true,
        message: successMessage,
        data: response.data
      };
    })
    .catch(error => {
      console.error('Error deleting post:', error);
      return {
        success: false,
        message: errorMessage,
        error: error.message
      };
    });
};
