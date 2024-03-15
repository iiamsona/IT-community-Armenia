import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from '../pages/authenticate/log_in.js';
import SignUp from '../pages/authenticate/sign_up.js';
import ForgotPassword from '../pages/authenticate/forgoten_password.js';
function RouterFunction() {
    return (
      <div>
        <Router>
        <Routes>
          <Route index element={<LogIn/>}></Route>
          <Route path="/login" element={<LogIn/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/forgot_password" element={<ForgotPassword/>}></Route>
        </Routes>
        </Router>
       
      </div>
    );
  }
  
  export default RouterFunction;