import axios from "axios";
import { useState } from "react";
import '../styles/Delete.css';

export function Delete() {
  const [id, setId] = useState();

  async function deleteData(e) {
    e.preventDefault();
    try {
      const response = await axios.delete(`https://my-project-upcq.onrender.com/api/employees/${id}`);
      alert(response.data.message);
    } catch (err) {
      alert("Record Not Found: " + err);
    }
  }

  return (
    <div className="container-delete">
      <h3 className="delete-heading">Delete Record By ID</h3>
      <hr className="delete-divider" />
      
      <form onSubmit={deleteData}>
        <input
          type="text"
          className="delete-input"
          placeholder="Enter Id"
          value={id}
          onChange={e => setId(e.target.value)}
          required
        />
        <br />
        <button type="submit" className="delete-button">Remove Data</button>
        </form>
    </div>
  );
}
