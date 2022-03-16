import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import LandingPage from './components/LandingPage';
import ViewPowerBall from './components/ViewPowerBall';
import NavBar from './components/NavBar'
function App() {
  return (
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<LandingPage/>}>Welcome</Route>
          <Route path="/powerball" element={<ViewPowerBall/>}>ViewPowerBall Results</Route>
        </Routes>
      </div>
  );
}

export default App;
