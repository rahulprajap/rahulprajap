import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./page/ErrorPage";
import Login from "./component/Login";
import Home from "./page/Home";
import { Toaster } from "react-hot-toast";
import Encounters from "./page/Encounters";
import PatientsList from "./page/PatientsList";
import PatientDetails from "./page/PatientDetails";
import Auth from "./component/Auth";
import { useState } from "react";
function App() {
  let user = localStorage.getItem("user");
  const [prevRef,setPrevRef] = useState("");
  const [prevGen,setPrevGen] =useState([]);
  const [prevgender,setPrevGender] = useState([]);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<Auth />}>
            <Route path="/" element={<Home />}>
              <Route path="encounters" element={<Encounters />} />
              <Route
                path="patients"
                element={
                  <PatientsList
                    prevRef={prevRef}
                    setPrevRef={setPrevRef}
                    prevGen={prevGen}
                    setPrevGen={setPrevGen}
                  prevgender={prevgender}
                  setPrevGender={setPrevGender}
                  />
                }
              />
              <Route
                path="patients/patients-details/:id"
                element={<PatientDetails />}
              />
            </Route>
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
