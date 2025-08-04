// src/routes/router.js
import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import ReportLinkDomainPage from "../pages/ReportLinkDomainPage"; // 기존 페이지
import ChartTestPage from "../pages/ChartTestPage"; // 새로 만든 테스트 페이지 import
import LandingPage from "../pages/LandingPage";
import SearchPage from "../pages/SearchPage";
import Report from "../pages/Report";
import ReportsLists from "../pages/lists/ReportsLists";
import DashBoard from "../pages/dashBoard/DashBoard";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/report/link-domain" element={<ReportLinkDomainPage />} />
      <Route path="/chart-test" element={<ChartTestPage />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/reports" element={<ReportsLists />} />
      <Route path="/reports/1/dashboard" element={<DashBoard />} />
      <Route path="/report" element={<Report />} />
    </Routes>
  );
};

export default Router;
