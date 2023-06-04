import { commanResponse } from '../../../apiUtils/models/commonResponse';
import { PostService } from '../../services/postservice.jsx';
import { ResponseStatus } from '../../../apiUtils/interfacesAndTypes';
import React from 'react';

export const productController = {
  insertProduct
};

async function CreatePost(object) {
  try {
    let responseOBJ = new commanResponse();
    const response = await PostService.createPost(object);

    if (response) {
      responseOBJ.Status = response?.status === 200 ? true : false;
      responseOBJ.Result = response?.data ? response?.data : undefined;
      responseOBJ.ResponseStatus = response.status;
    }
    return responseOBJ;
  } catch (error) {
    console.log('error From controller::>', error);
  }
}
