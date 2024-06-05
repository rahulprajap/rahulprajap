import React from "react";
import { NavLink, Outlet } from "react-router-dom";
function Main() {
  const pages = [
    {text:"Encounters" ,link:"/encounters"},
    {text:"Patients",link:"/patients"}];
    
  return (
    <div className="w-full flex">
      <div className="left-side text-black">
        <div className="bg-blue-500 w-[350px] h-[92vh]">
          {pages.map((item, index) => {
            return (
              <div key={index} className="w-full bg-blue-700 p-4 border-b">
                <div className="text-gray-100">
                  <NavLink to={item.link}>
                    {item.text}
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full h-full">
        <Outlet/>     
      </div>
    </div>
  );
}

export default Main;
