import React, { Suspense, useContext, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SplashScreen from "./features/auth/pages/splash-screen";
import AuthContext from "./store/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ALL_LINKS } from "./constants/navigation-routes";
import { QueryClient, QueryClientProvider } from 'react-query';
const App = () => {
  const [loading, setLoading] = useState(true);
  const authCtx = useContext(AuthContext);
  const queryClient = new QueryClient();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const PAGES = [
    ALL_LINKS.Landing,
    ALL_LINKS.LoginPage1,
    ALL_LINKS.LoginPage2,
    ALL_LINKS.LoginPage3,
    ALL_LINKS.LoginPage4,
    ALL_LINKS.LoginPage5,
    ALL_LINKS.LoginPage6,
    ALL_LINKS.LoginPage7,
  ];

  console.log(authCtx.role);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div id="" className="relative min-h-[100vh] pb-[214px]">
          <div className="">
            {loading ? (
              <SplashScreen />
            ) : (
              <>
                {/* <MainDrawer /> */}
                <Suspense fallback={<div />}>
                  <Routes>
                    {PAGES.map((item, i) => {
                      console.log(authCtx.role === "");
                      // console.log(item.show[authCtx.role])
                      return item.loginRequire && item.show[authCtx.role] ? (
                        <Route
                          key={i}
                          path={item.pageLink}
                          element={
                            authCtx.isLoggedIn ? (
                              <item.view />
                            ) : (
                              <Navigate to={"/"} />
                            )
                          }
                        />
                      ) : (
                        (item.show[authCtx.role] || authCtx.role === "") && (
                          <Route
                            key={i}
                            path={item.pageLink}
                            element={<item.view />}
                          />
                        )
                      );
                    })}
                  </Routes>
                </Suspense>
              </>
            )}
            <ToastContainer />
          </div>
          {/* <Footer/> */}
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
