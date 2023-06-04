import { PostEndPoints } from '../../../api endpoints/Post';
import { requestMethod } from '../../../apiUtils/constants';
import { requestModel } from '../../../apiUtils/models/requestModel';
import { axiosRepository } from '../../repository/Axios/post';

export const PostService = {
  createPost: async (body) => {
    const reqestObj = new requestModel();
    try {
      reqestObj.method = requestMethod.POST;
      reqestObj.url = PostEndPoints.CREATE_POST;
      reqestObj.data = body;
      return await axiosRepository.request(reqestObj);
    } catch (error) {
      console.log('error from services::>', error);
    }
  }
};
