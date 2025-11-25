import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import MemberManagement from "./pages/MemberManagement";
import NewMember from "./pages/NewMember";
import MemberEdit from "./pages/MemberEdit";
import MemberAttendance from "./pages/MemberAttendance";
import './App.css'
import Attendance from "./pages/Attendance.tsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Attendance />} />
              <Route path="/manage" element={<Layout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="members" element={<MemberManagement />} />
                  <Route path="members/new" element={<NewMember />} />
                  <Route path="members/:id" element={<MemberEdit />} />
                  <Route path="attendance" element={<MemberAttendance />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
