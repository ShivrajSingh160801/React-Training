export const requestInterface = {
  url: '',
  method: '',
  params: undefined,
  data: '',
  headers: undefined,
  timeout: undefined,
  withCredentials: undefined,
  auth: { username: '', password: '' },
  responseType: '',
  responseEncoding: '',
  xsrfCookieName: '',
  xsrfHeaderName: '',
  maxContentLength: undefined,
  maxBodyLength: undefined,
  proxy: {
    protocol: '',
    host: '',
    port: 0,
    auth: {
      username: '',
      password: '',
    },
  },
};

const blankObject = {};

export const ResponseStatus = {
  Success: 200,
  Error: 400,
  Unauthorized: 401,
  NoContent: 204,
  RedirectedToAnotherResource: 303,
  UnprocessableEntity: 422,
};



