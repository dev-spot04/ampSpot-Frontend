import { lazy } from "react";

import DjProfile from "../../pages/djProfile";

const Landing = lazy(() => import("../../pages/landing"));
const Register = lazy(() => import("../../features/auth/pages/register"));
const Plug = lazy(() => import("../../features/auth/pages/plug"));
const SetSound = lazy(() => import("../../features/auth/pages/set-sound"));
const SetProfile = lazy(() => import("../../features/auth/pages/set-profile"));
const VerificationEmail = lazy(() => import("../../features/auth/pages/verification-email"));
const Verified = lazy(() => import("../../features/auth/pages/verified"));
const Login = lazy(() => import("../../features/auth/pages/login"));
const Chat = lazy(() => import("../../features/auth/pages/chat"));
const UserChat = lazy(() => import("../../features/auth/pages/user-chat"));
const ForgotPassword = lazy(() => import("../../features/auth/pages/forgot-passowrd"));
const Dashboard = lazy(() => import("../../pages/dashboard"));
const ConfirmPassword = lazy(() => import("../../features/auth/pages/page-9"))
export const ALL_LINKS = {
  Landing: {
    pageLink: "/",
    view: Register,
    displayName: "Landing",
    show: {
      dj: true,
      user: true,
      null: true,
    },
    loginRequire: false,
  },
  Register: {
    pageLink: "/register",
    view: Register,
    displayName: "Register",
    show: {
      dj: true,
      user: true,
      null: true,
    },
    loginRequire: false,
  },
  Plug: {
    pageLink: "/plug",
    view: Plug,
    displayName: "Plug",
    show: {
      dj: true,
      user: true,
      null: true,
    },
    loginRequire: true,
  },
  SetSound: {
    pageLink: "/set-sound",
    view: SetSound,
    displayName: "SetSound",
    show: {
      dj: true,
      user: true,
      null: true,
    },
    loginRequire: true,
  },
  SetProfile: {
    pageLink: "/set-profile",
    view: SetProfile,
    displayName: "Set Profile",
    show: {
      dj: true,
      user: true,
      null: true,
    },
    loginRequire: true,
  },
  VerificationEmail: {
    pageLink: "/verification-email",
    view: VerificationEmail,
    displayName: "VerificationEmail",
    show: {
      dj: true,
      user: true,
      null: true,
    },
    loginRequire: true,
  },
  Verified: {
    pageLink: "/verified",
    view: Verified,
    displayName: "Verified",
    show: {
      dj: true,
      user: true,
      null: true,
    },
    loginRequire: true,
  },
  Login: {
    pageLink: "/login",
    view: Login,
    displayName: "Login",
    show: {
      dj: true,
      user: true,
      null: true,
    },
    loginRequire: false,
  },
  ForgotPassword: {
    pageLink: "/forgot-password",
    view: ForgotPassword,
    displayName: "Forgot Password",
    show: {
      dj: true,
      user: true,
      null: true,
    },
    loginRequire: false,
  },
  Chat: {
    pageLink: "/chat/conversations",
    view: Chat,
    displayName: "Chat",
    show: {
      dj: true,
      user: true,
      null: true,
    },
    loginRequire: false,
  },
  UserChat: {
    pageLink: "/chat/start",
    view: UserChat,
    displayName: "User Chat",
    show: {
      dj: true,
      user: true,
      null: true,
    },
    loginRequire: false,
  },
  Dashboard: {
    pageLink: "/dashboard",
    view: Dashboard,
    displayName: "Dashboard",
    show: {
      dj: true,
      user: true,
      null: true,
    },
    loginRequire: false,
  },
  DjProfile: {
    pageLink: "/djprofile",
    view: DjProfile,
    displayName: "DjProfile",
    show: {
      dj: true,
      user: true,
      null: true,
    },
    loginRequire: false,
  },
  ConfirmPassword: {
    pageLink: '/reset-password',
    view: ConfirmPassword,
    displayName: 'ConfirmPassword',
    show: {
      dj: true,
      user: true,
      null: true,
    },
    loginRequire: false,
  }
};
