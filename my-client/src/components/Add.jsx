import { useState } from "react";
import "../styles/Add.css";
import axios from "axios";

export function Add() {
  const [empNo, setEmpNo] = useState();
  const [empName, setEmpName] = useState();
  const [empSal, setEmpSal] = useState();

  async function addHandler(e){
    e.preventDefault();
    try{
      const response = await axios.post('https://my-project-upcq.onrender.com/api/employees', {empNo, empName, empSal});
      alert(response.data.message);
    } catch(err){
      alert(err);
    }
  }

  // const handleInfo = () => {
  //   alert(`    
  //   Emp No: ${empId}
  //   Emp Name: ${empName}
  //   Emp Salary: ${empSal}`);
  // };

  return (
    <div className="form-container">
      <h2 className="form-heading">Add Record Screen</h2>
      <input
        type="number"
        placeholder="Enter Employee No"
        onChange={(e) => setEmpNo(e.target.value)}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Enter Employee Name"
        onChange={(e) => setEmpName(e.target.value)}
        className="form-input"
      />
      <input
        type="number"
        placeholder="Enter Employee Salary"
        onChange={(e) => setEmpSal(e.target.value)}
        className="form-input"
      />
      <button onClick={addHandler} className="form-button">
        Add
      </button>
    </div>
  );
}
