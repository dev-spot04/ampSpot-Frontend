import http from "./http";

const Auth = {
    login: (data) => http.post(`/auth/login`, data),
    register: (data, query = '') => http.post(`/auth/signup${query}`, data),
    update: (data, query = '') => http.put(`/auth/update/condition${query}`, data),
    forgotPasswordMail: (data, query = '') => http.post(`/token/send${query}`, data),
    resetPassword: (data, query = '') => http.post(`/token/verify${query}`, data),
    sendVerificationMail: (data, query = '') => http.post(`/mail/send${query}`, data),
    verifyMail: (data, query = '') => http.get(`/mail/verify${query}`, data),
    getUserProfile: ( params = '') => http.get(`/auth/getUserById/${params}`),
}

export default {
    Auth
}