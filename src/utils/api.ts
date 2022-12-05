// Axios intance to manage requests with token
import axios, { AxiosRequestConfig } from "axios";

// temporary hard coded token
const tempToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMzg2MTMzMiwibmFtZSI6IlZ1ZSBkZXYiLCJlbWFpbCI6Im1vbG9yZTI4OTlAM21rei5jb20iLCJleHAiOjE2NzI1Mjc2MDAsImlhdCI6MTY2Njc4NzM1OCwibmJmIjoxNjY2Nzg3MzU4fQ.yILSMgTnVkkvgEV6rFEuCR7cUVLKblbb9YVjcpHyInQ";

const api = axios.create();

api.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = tempToken;

  if (token && config.headers) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
