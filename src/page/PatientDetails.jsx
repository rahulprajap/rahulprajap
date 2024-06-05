import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import patient from '../data/patients.json';
import { useParams } from "react-router-dom";

function PatientDetails() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [patientDetail,setPatientsDetail] = useState({});

 useEffect(()=>{
  let patients = patient.data.filter(p=>p.id==id);
  setPatientsDetail(...patients);
 },[]); 

  return (
    <div id="patient-details">
      <div className="w-full h-[92vh] bg-gray-100 p-5">
        <div className="w-full bg-gray-100 p-5">
          <h2 className="text-2xl font-bold border-b-2 border-black">
            <span
              className="text-blue-500 underline cursor-pointer"
              onClick={()=>navigate('/patients')}
            >
              Patient
            </span>
            &gt; Patient Details
          </h2>
        </div>
        <div>
          <div className="p-2 text-black border-2 border-black m-2">
            <div className="flex gap-5">
              <h3>Email : </h3>
              <p>{patientDetail.id}</p>
            </div>
          </div>
          <div className="p-2 text-black border-2 border-black m-2">
            <div className="flex gap-5">
              <h3>FullName :</h3>
              <p>{patientDetail.address?.home?.full_name || "NA"}</p>
            </div>
          </div>
          <div className="p-2 text-black border-2 border-black m-2">
            <div className="flex gap-5">
              <h3>Date of Birth :</h3>
              <p>{patientDetail.dob}</p>
            </div>
          </div>
          <div className="p-2 text-black border-2 border-black m-2">
            <div className="flex gap-5">
              <h3>Gender : </h3>
              <p>{patientDetail?.gender}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PatientDetails;
