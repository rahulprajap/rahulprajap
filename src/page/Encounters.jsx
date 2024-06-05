import React from "react";
import { useState, useEffect } from "react";
import encounter_data from "../data/encounters.json";
function Encounters() {
  const consultType = encounter_data.data.map(
    (patient) => patient.consultation_type
  );
  let consultaionTypeOptions = [...new Set(consultType)];

  const [selectedType, setSelectedType] = useState(consultaionTypeOptions[0]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState(startDate);
  const [patient, setPatient] = useState(encounter_data.data);

  useEffect(() => {
    if (endDate === "") {
      setEndDate(startDate);
    }
    let filterPatient = encounter_data.data.filter((data) => {
      if (startDate) {
        return (
          data.consultation_type === selectedType &&
          new Date(data.date_of_service) >= new Date(startDate) &&
          new Date(data.date_of_service) <= new Date(endDate)
        );
      }
      return data.consultation_type === selectedType;
    });

    setPatient(filterPatient);
  }, [selectedType, startDate, endDate]);

  return (
    <div id="encounters">
      <div className="w-full h-[92vh] bg-gray-100 p-5">
        <div>
          <h2 className="text-2xl font-bold border-b-2 border-black">
            Encountes
          </h2>
        </div>
        <div className="consultation w-[25%] flex gap-10">
          <div className="flex pt-5 flex-col gap-1">
            <label htmlFor="consulatation_type">Select Consullation type</label>
            <select
              name="consultation_type"
              className="p-2 bg-blue-100 border-2 border-black"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {consultaionTypeOptions.map((option, i) => {
                return (
                  <option key={i} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="lex pt-5 flex-col gap-1">
            <label htmlFor="startDate">Select Start Date</label>
            <input
              className="p-2 bg-blue-100 border-2 border-black"
              name="startDate"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="lex pt-5 flex-col gap-1">
            <label htmlFor="endDate">Select End Date</label>
            <input
              className="p-2 bg-blue-100 border-2 border-black"
              name="endDate"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <div></div>

        <div className="mt-20 w-[80%]">
          <table className="w-full border border-black p-1 ">
            <thead className="bg-green-500">
              <tr className="text-left p-3">
                <th>Date of Service</th>
                <th>Patient Name</th>
                <th>Consulation type</th>
              </tr>
            </thead>
            <tbody>
              {patient.length > 0 ? (
                patient.map((data, i) => {
                  return (
                    <tr key={i} className="border border-black">
                      <td>{data.date_of_service}</td>
                      <td>{data.patient.address.home.full_name}</td>
                      <td>{data.consultation_type}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={3}
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
    </div>
  );
}

export default Encounters;
