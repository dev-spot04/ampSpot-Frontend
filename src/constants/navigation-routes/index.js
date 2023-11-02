import { lazy } from "react";
const Landing=lazy(()=>import("../../pages/landing"));
const LoginPage1=lazy(()=>import("../../features/auth/pages/page-1"));
export const ALL_LINKS={
Landing: {
    pageLink: "/",
    view: Landing,
    displayName: "Landing",
    show: {
        dj: true,
        customer: true,
        null: true,
    },
    loginRequire: false,
    },
    LoginPage1: {
        pageLink: "/page-1",
        view: LoginPage1,
        displayName: "LoginPage1",
        show: {
            dj: true,
            customer: true,
            null: true,
        },
        loginRequire: false,
        },

};