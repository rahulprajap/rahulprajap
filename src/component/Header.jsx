import React from 'react'
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    toast.success("Logout Successfully");
  };
  return (
    <div className="header-section border-b border-blue-100">
        <div className=" w-full bg-blue-200">
          <div className="py-5 px-10 flex justify-between">
            <div className="text-md text-blue-900 flex gap-1">Welcome,{user}
            <img src="https://img.freepik.com/premium-vector/male-profile-flat-blue-simple-icon-with-long-shadowxa_159242-10092.jpg?w=826" width={"25px"} height={"25px"} className="rounded-full" alt="user-ion"/>
            </div>
            <div
              className=" flex  gap-2 text-md text-blue-900 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRonu_p4P67lEwyvzz2capjW5EKj-uaofckyA&s" width={"25px"} height={"25px"}
              className="rounded-full" alt="logout-icon"/>
            </div>
          </div>
          <div></div>
        </div>
      </div>
  )
}

export default Header