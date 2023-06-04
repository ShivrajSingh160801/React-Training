import { api } from "./interceptor";

export const axiosRepository = {
  request: async (requestModal) =>
    await api.request(JSON.parse(JSON.stringify(requestModal)))
};
