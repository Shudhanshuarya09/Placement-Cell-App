import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
import LoginSignup from "./components/loginSignup/LoginSignup";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import HomePage from "./components/frontPage/HomePage";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return ( 
    <div className="grid-container">
      <HomePage/>
      {/* <LoginSignup/> */}
      {/* <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Home /> */}
    </div>
  );
}

export default App;
