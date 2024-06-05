import React from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Main from "../component/Main";
import Header from "../component/Header";
const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <Main />
    </div>
  );
};

export default Home;
