import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Register from './pages/Register'
import Navbar from './components/Navbar'

function App() {
  return (
    // <div>Home</div>
    <Router>
    <div className="app">
      <Routes>
         {/* <Navbar/> */}
        <Route exact path = "/"element={[<Navbar/>,<Home/>]}/>
        <Route exact path = "/register"element={<Register/>}/>
        {/* <Route path = "/payment" element={[<Header/>,<Payment/>]} />
        <Route path="/checkout" element={[<Header/>,<Checkout/>]} />
        <Route path = "/login" element={<Login />} /> */}
        </Routes>
    </div>
  </Router>
   
  );
}

export default App;
