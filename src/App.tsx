import "./App.css";
import EmployeeCard from "./EmployeeCard";
import { useState } from "react";

const sampleEmployee = {
  name: {
    first: "Sylvia",
    last: "Barraud",
  },
  email: "fit.fit@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
};

function App() {
  const [employee, setEmployee] = useState(sampleEmployee);
  const getEmployee = () => {
    // Send the request
    fetch("http://localhost:3310/api/employees")
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data.results[0]);
        console.log(data.results[0]);
      });
  };

  return (
    <div className="App">
      <EmployeeCard employee={employee} />
      <button type="button" onClick={getEmployee}>
        Get employee
      </button>
    </div>
  );
}

export default App;
