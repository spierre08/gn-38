import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import Login from './auth/Login';
import ResetPassword from './auth/Reset-password';
import ChatProfessionnels from './chat/Chat';
import UserList from './chat/Liste';
import NotFound from './Not-found';
import Home from './Page';
import Register from './register/Register';
import SendOTPByPhone from './send-otp/Send-OTP';
import OTPPage from './send-otp/Verifiy-OTP';
import DashboardEleve from './student/Student';
import DashboardProfesseur from './teacher/Teacher';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth" element={<Login />}></Route>
        <Route path="/auth/reset-password" element={<ResetPassword />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/send-otp-phone" element={<SendOTPByPhone />}></Route>
        <Route path="/veriy-otp" element={<OTPPage />}></Route>
        <Route path="/teacher" element={<DashboardProfesseur />}></Route>
        <Route path="/student" element={<DashboardEleve />}></Route>
        <Route path="/forum" element={<ChatProfessionnels />}></Route>
        <Route path="/forum/list" element={<UserList />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
