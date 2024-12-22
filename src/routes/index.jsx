import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import SchedulePage from "../pages/Schedule/SchedulePage";
import AuthGuard from "./AuthGuard";


export default function Routers(){

    return (<BrowserRouter>
        <Routes>
          <Route element={<AuthGuard />}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
          </Route>
        </Routes>
      </BrowserRouter>)
}