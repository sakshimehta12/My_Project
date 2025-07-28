import { useState } from "react"; 
import "../styles/GetAll.css";
import axios from "axios";

export function GetAll() {
  const [emp, setEmp] = useState([]);

  async function getInfo(e) {
    e.preventDefault();
    try{
      const response = await axios.get('https://my-project-upcq.onrender.com/api/employees');
      setEmp(response.data);
    } catch(err){
      alert(err);
    }
  }

  //   async function getInfo(e) {
  //     e.preventDefault();
  //     try {
  //       const response = await fetch("http://localhost:3000/api/employees");
  //       const data = await response.json();
  //       setEmp(data);
  //     } catch (err) {
  //       alert("Error fetching employees");
  //       console.error(err);
  //     }
  //   }

  return (
    <div className="getall-container">
        <h2 className="getall-heading">Employee Details</h2>
        <hr className="getall-divider" />
        <button className="getall-button" onClick={getInfo}>
            Get All Employees
        </button>
        <div className="getall-table-wrapper">
            <table className="getall-table">
                <thead className="getall-thead">
                    <tr>
                        <th className="getall-th">ID</th>
                        <th className="getall-th">No</th>
                        <th className="getall-th">Name</th>
                        <th className="getall-th">Salary</th>
                    </tr>
                </thead>
                <tbody className="getall-tbody">
                    {
                     emp.length > 0 ? (
                        emp.map(emp => (
                            <tr className="getall-row">
                                <td className="getall-td">{emp._id}</td>
                                <td className="getall-td">{emp.empNo}</td>
                                <td className="getall-td">{emp.empName}</td>
                                <td className="getall-td">{emp.empSal}</td>
                            </tr>
                        ))
                    ): <tr><td colSpan={'4'} className="getall-empty">No record </td></tr>
                }
                </tbody>
            </table>
        </div>
    </div>
  )
}


      {/* <ul className="getall-list">
        {
          emp.map(e => (
            <li>{e.empNo} : {e.empName} : {e.empSal}</li>
          ))
        }
      </ul>
    </div> */}
