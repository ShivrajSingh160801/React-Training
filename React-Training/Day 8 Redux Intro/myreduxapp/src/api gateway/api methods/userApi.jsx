import axios from 'axios';
import { successMessage,errorMessage } from '../api responses/userResponses';

export const getUsers = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      // Successful response
      console.log('data: ', response.data);
      return {
        success: true,
        message: successMessage,
        data: response.data
      };
    })
    .catch(error => {
      // Error response
      console.error('Error fetching users:', error);
      return {
        success: false,
        message: errorMessage,
        error: error.message
      };
    });
};
