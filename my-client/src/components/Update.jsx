import axios from "axios";
import { useState } from "react";
import '../styles/Update.css';

export function Update() {
  const [id, setId] = useState();
  const [empNo, setNo] = useState();
  const [empName, setName] = useState();
  const [empSal, setSal] = useState();

  async function updateHandler(e) {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3000/api/employees/${id}`, {
        empNo: Number(empNo),
        empName,
        empSal: Number(empSal),
      });
      alert(response.data.message);
    } catch (err) {
      alert("Update Failed: " + err.message);
    }
  }

  return (
    <div className="container-update">
      <h2 className="update-heading">Update Record Screen</h2>
      <hr className="update-divider" />
      <form onSubmit={updateHandler} className="update-form">
        <input
          type="text"
          className="update-input"
          placeholder="Enter Id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        /><br />

        <input
          type="text"
          className="update-input"
          placeholder="Enter No"
          value={empNo}
          onChange={(e) => setNo(e.target.value)}
          required
        /><br />

        <input
          type="text"
          className="update-input"
          placeholder="Enter Name"
          value={empName}
          onChange={(e) => setName(e.target.value)}
          required
        /><br />

        <input
          type="text"
          className="update-input"
          placeholder="Enter Sal"
          value={empSal}
          onChange={(e) => setSal(e.target.value)}
          required
        /><br />

        <button type="submit" className="update-button">Update Record</button>
      </form>
    </div>
  );
}
