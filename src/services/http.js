import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
});

instance.interceptors.request.use(function (config) {
  try {
    const userState = localStorage.getItem("userState");
    config.headers["Authorization"] = `Bearer ${JSON.parse(userState).token}`;
    config.headers["userid"] = `${JSON.parse(userState).id}`;
    config.headers["path"] = window.location.pathname;
  } catch (e) {
    console.log(e);
  }
  return config;
});

const http = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};

export default http;
