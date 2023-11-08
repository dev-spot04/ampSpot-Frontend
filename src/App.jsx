import React, { Suspense, useContext, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import SplashScreen from "./features/auth/pages/splash-screen";
import AuthContext from "./store/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ALL_LINKS } from "./constants/navigation-routes";
import { QueryClient, QueryClientProvider } from 'react-query';
import { useSelector } from "react-redux";
const App = () => {
  const [loading, setLoading] = useState(true);
  const { isAuthenticated, role, user } = useSelector((state) => state.user);
  const queryClient = new QueryClient();
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (isAuthenticated)
      navigate(user.lastPageVisited || '/page-2')
  }, [isAuthenticated])

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


  return (

    <QueryClientProvider client={queryClient}>
      <div id="" className="relative min-h-[100vh]">
        <div className="">
          {loading ? (
            <SplashScreen />
          ) : (
            <>
              {/* <MainDrawer /> */}
              <Suspense fallback={<div />}>
                <Routes>
                  {PAGES.map((item, i) => {
                    return item.loginRequire && item.show[role] ? (
                      <Route
                        key={i}
                        path={item.pageLink}
                        element={
                          isAuthenticated ? (
                            <item.view />
                          ) : (
                            <Navigate to={"/"} />
                          )
                        }
                      />
                    ) : (
                      (item.show[role] || role === "") && (
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

  );
};

export default App;
