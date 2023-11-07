import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
});

instance.interceptors.request.use(function (config) {
  try {
    const token = localStorage.getItem("token");
    config.headers["Authorization"] = `Bearer ${token}`;
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
