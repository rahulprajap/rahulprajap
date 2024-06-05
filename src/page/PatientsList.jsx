import React from "react";
import { useState, useEffect } from "react";
import patient from "../data/patients.json";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

function PatientsList({ prevRef, setPrevRef, prevGen,setPrevGen, prevgender,setPrevGender }) {
  let genderOptions = [];
  patient.data.forEach((item) => {
    if (!genderOptions.find((option) => option?.value === item.gender)) {
      genderOptions.push({
        value: item.gender,
        label: item.gender,
      });
    }
  });

  const referType = patient.data.map((patient) => patient.referral_program);
  let referralOptions = [...new Set(referType)];
  const navigate = useNavigate();

  const [referral, setReferral] = useState(prevRef || referralOptions[0]);
  const [selectedGender, setSelectedGender] = useState(prevGen || []);
  const [gender, setGender] = useState(prevgender||[]);
  const [patientsData, setPatientsData] = useState([]);

  const handleChange = (selected) => {
    setSelectedGender(selected);
    setGender(selected.map((gender) => gender.value));
    setPrevGen([]);
    setPrevGender([]);
  };

  const handlerReferral = (e) => {
    setReferral(e.target.value);
    setPrevRef("");
  };

  function handlePatientDetail(patient) {
    navigate(`patients-details/${patient.id}`);
  }

  useEffect(() => {
    let filterPatient = patient.data.filter((data) => {
      if (gender.length > 0) {
        return (
          data.referral_program === referral && gender.includes(data.gender)
        );
      }
      return data.referral_program === referral;
    });

    if (prevRef === "" || prevGen.length === 0 || prevgender.length===0) {
      setPrevRef(referral);
      setPrevGen(selectedGender);
      setPrevGender(gender);
    }

    setPatientsData(filterPatient);
  }, [referral, selectedGender, gender]);

  return (
    <div id="Patients">
      <div className="w-full h-[92vh] bg-gray-100 p-5">
        <div>
          <h2 className="text-2xl font-bold border-b-2 border-black">
            Patient
          </h2>
        </div>
        <div className="consultation w-[100%]">
          <div className="flex gap-10 w-full">
            <div className="flex pt-5 flex-col gap-1">
              <label htmlFor="gender">Select Referral </label>
              <select
                name="gender"
                className="p-2 bg-blue-100 border-2 border-black"
                value={referral}
                onChange={(e) => {
                  handlerReferral(e);
                }}
              >
                {referralOptions.map((option, i) => {
                  return (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex pt-5 flex-col gap-1">
              <label htmlFor="consulatation_type">Select Gender </label>
              <Select
                isMulti
                options={genderOptions}
                value={selectedGender}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div></div>

        <div className="mt-20 w-[80%]">
          <table className="w-full border border-black p-1 ">
            <thead className="bg-green-500">
              <tr className="text-left p-3">
                <th>Patient Email</th>
                <th>Patient Name</th>
                <th>Gender</th>
                <th>Referral Program</th>
              </tr>
            </thead>
            <tbody>
              {patientsData.length > 0 ? (
                patientsData.map((patient, index) => {
                  return (
                    <tr key={index} className="border border-black">
                      <td
                        className="text-blue-600 underline cursor-pointer"
                        onClick={() => handlePatientDetail(patient)}
                      >
                        {patient.email}
                      </td>
                      <td>
                        {patient.address.home?.full_name
                          ? patient.address.home.full_name
                          : "NA"}
                      </td>
                      <td>{patient.gender}</td>
                      <td>{patient.referral_program}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    style={{ border: "1px solid black", textAlign: "center" }}
                  >
                    Not Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* // <Outlet context={patientd} /> */}
    </div>
  );
}

export default PatientsList;
