import logo from './logo.svg';
import './App.css';
import Signup from './component/Signup';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import {
 
  Routes,
  Route,

} from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route element={<Signup/>} path="/signup" />
      <Route element={<Login />} path="/" />
      <Route element={<Dashboard />} path="/dashboard" />
      


    </Routes>
   
  );
}

export default App;