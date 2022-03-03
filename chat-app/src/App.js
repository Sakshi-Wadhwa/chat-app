import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import AuthProvider from "./context/auth";
import Profile from './pages/Profile'
// import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    // <div>Home</div>
    <AuthProvider>
    <Router>
    <div className="app">
      <Routes>
         {/* <Navbar/> */}
        <Route exact path = "/"element={[<Navbar/>,<Home/>]}/>
        <Route exact path = "/register"element={[<Navbar/>,<Register/>]}/>
        <Route exact path = "/profile"element={[<Navbar/>,<Profile/>]}/>
        {/* <Route path = "/payment" element={[<Header/>,<Payment/>]} />
        <Route path="/checkout" element={[<Header/>,<Checkout/>]} /> */}
        <Route path = "/login" element={[<Navbar/>,<Login />]} />
        </Routes>
    </div>
  </Router>
  </AuthProvider>
  );
}

export default App;
