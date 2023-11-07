import http from "./http";

const Auth = {
    login: (data) => http.post(`/auth/login`, data),
    register: (data, query = '') => http.post(`/auth/signup${query}`, data),
    update: (data, query = '') => http.put(`/auth/update/condition${query}`, data)
}
export default {
    Auth
}