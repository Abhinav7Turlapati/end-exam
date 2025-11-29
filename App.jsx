import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardContent from "./components/DashboardContent";
import "./index.css";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="app">
      <Sidebar />
      <Topbar />
      <DashboardContent students={students} addStudent={addStudent} />
    </div>
  );
}

export default App;

