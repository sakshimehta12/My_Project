import { useState } from "react";
import "../styles/GetId.css"; 
import axios from "axios";

export function GetId() {
  const [empId, setEmpId] = useState();
  const [emp, setEmp] = useState(null);

  async function getEmployee(e) {
    e.preventDefault();
    try {
      const response = await axios.get(`https://my-project-upcq.onrender.com/api/employees/${empId}`);
      setEmp(response.data);
    } catch (err) {
      alert("Employee not found");
      setEmp(null);
    }
  }

   return (
    <div className="getid-container">
      <h3 className="getid-title">Employee Record By ID</h3>
      <hr className="getid-divider" />

      <input
        type="text"
        placeholder="Enter Id"
        value={empId}
        onChange={(e) => setEmpId(e.target.value)}
        required
        className="getid-input"
      />
      <br /><br />

      <button onClick={getEmployee} className="getid-button">Find Data</button>
      <br />

      {emp && (
        <div className="getid-result">
          <h4 className="getid-subtitle">Employee Details</h4>
          <hr className="getid-divider" />
          <p className="getid-text">Emp No is : {emp.empNo}</p>
          <p className="getid-text">Emp Name is : {emp.empName}</p>
          <p className="getid-text">Emp Sal is : {emp.empSal}</p>
        </div>
      )}
    </div>
  );
}
