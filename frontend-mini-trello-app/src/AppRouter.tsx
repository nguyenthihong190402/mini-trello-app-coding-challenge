import AuthPage from "@pages/auth/AuthPage";
import LoginPage from "@pages/auth/LoginPage";
import HomePage from "@pages/HomePage";
import { AUTH_PAGE, HOME_PAGE, LOGIN_PAGE } from "./contants/Page";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={LOGIN_PAGE} element={<LoginPage />} />
          <Route path={AUTH_PAGE} element={<AuthPage />} />
          <Route path={HOME_PAGE} element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
