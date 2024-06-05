import React from "react";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import users_data from "../data/users.json";
import toast from "react-hot-toast";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  let user =localStorage.getItem('user');

  useEffect(()=>{ 
    if(user){
      navigate('/encounters')
    }else{
      navigate('/login')
    }
  },[]);

  return (
    <div className="flex h-screen bg-gray-300">
      <div className="w-[35%] m-auto flex justify-cente items-center bg-blue-400">
        <div className="w-[100%] flex flex-col m-10">
          <h2 className="text-center font-bold text-2xl">Login</h2>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .required("Email is required")
                .email("Enter a valid Email"),
              password: Yup.string().required("Password is required"),
            })}
            onSubmit={(values) => {
              const user = users_data.data.find(
                (user) => user.email === values.email
              );
              if (!user) {
                toast.error("User is not registerd");
              } else {
                if (user.password !== values.password) {
                  toast.error("Password is invalid");
                } else {
                  toast.success("Login successfull");
                  localStorage.setItem("user",user.username);
                  navigate("/encounters");
                }
              }
            }}
          >
            <Form className="w-full flex flex-col justify-center ">
              <div className="flex flex-col gap-1 p-1">
                <label htmlFor="email" className="font-bold text-md">
                  Email
                </label>
                <Field name="email" type="email" className="p-2" />
                <ErrorMessage name="email" style={{color:"red"}}/>
              </div>
              <div className="flex flex-col gap-1 p-1">
                <label htmlFor="password" className="font-bold text-md">
                  Password
                </label>
                <div className="flex items-center">
                  <Field
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="p-2 w-[80%] border-none"
                  />
                  <p
                    className="w-[20%] text-center bg-white p-2  cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </p>
                </div>
                <ErrorMessage name="password" style={{color:"red"}} />
              </div>
              <div className="flex flex-col gap-1 p-1 mt-5">
                <button
                  type="submit"
                  className="w-full bg-blue-800 text-center font-bold tex-md p-2 "
                >
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;
