import React from "react";
import "./App.css"
import { NavLink, Outlet } from "react-router-dom";


function Layout() {
  return (
    <div className="layout">
      <nav>
        <ul>
          <li>
            <NavLink style={({ color: "pink"  ,textDecoration: 'none'})} to="/about">Hakkımda</NavLink>
          </li>
          <li>
            <NavLink style={({ color: "pink" ,textDecoration: 'none'})} to="/rie">Rie Fuwa Hakkında</NavLink>
          </li>
          <li >
            <NavLink style={({ color: "pink" ,textDecoration: 'none'})} to="/achi" >Uygulamalarım</NavLink>
          </li>  
        </ul>
      </nav>
      <Outlet / >
    </div>
  );
}

export default React.memo(Layout);

