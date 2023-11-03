import { lazy } from "react";
const Landing = lazy(() => import("../../pages/landing"));
const LoginPage1 = lazy(() => import("../../features/auth/pages/page-1"));
const LoginPage2 = lazy(() => import("../../features/auth/pages/page-2"));
const LoginPage3 = lazy(() => import("../../features/auth/pages/page-3"));
const LoginPage4 = lazy(() => import("../../features/auth/pages/page-4"));
export const ALL_LINKS = {
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
  LoginPage2: {
    pageLink: "/page-2",
    view: LoginPage2,
    displayName: "LoginPage2",
    show: {
      dj: true,
      customer: true,
      null: true,
    },
    loginRequire: false,
  },
  LoginPage3: {
    pageLink: "/page-3",
    view: LoginPage3,
    displayName: "LoginPage3",
    show: {
      dj: true,
      customer: true,
      null: true,
    },
    loginRequire: false,
  },
  LoginPage4: {
    pageLink: "/page-4",
    view: LoginPage4,
    displayName: "LoginPage4",
    show: {
      dj: true,
      customer: true,
      null: true,
    },
    loginRequire: false,
  },
};
