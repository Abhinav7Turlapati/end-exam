import React, { useState } from "react";
import Card from "./Card";

const DashboardContent = ({ students, addStudent }) => {
  const [formData, setFormData] = useState({
    name: "",
    courses: "",
    marks: "",
    notifications: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      ...formData,
      courses: formData.courses.split(",").map(c => c.trim()),
      notifications: formData.notifications.split(",").map(n => n.trim())
    };
    addStudent(newStudent);
    setFormData({ name: "", courses: "", marks: "", notifications: "" });
  };

  return (
    <div className="main">
      <h2>Add Student Details</h2>
      <form onSubmit={handleSubmit} className="student-form">
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="courses"
          placeholder="Courses (comma separated)"
          value={formData.courses}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="marks"
          placeholder="Marks"
          value={formData.marks}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="notifications"
          placeholder="Notifications (comma separated)"
          value={formData.notifications}
          onChange={handleChange}
        />
        <button type="submit">Add Student</button>
      </form>

      <h2>Student Dashboard</h2>
      <div className="cards">
        {students.map((student, index) => (
          <Card
            key={index}
            title={student.name}
            value={`Courses: ${student.courses.join(", ")} | Marks: ${student.marks}`}
          />
        ))}
      </div>

      <div className="notifications">
        <h3>Notifications</h3>
        {students.map((student, index) => (
          <ul key={index}>
            {student.notifications.map((note, i) => (
              <li key={i}>{student.name}: {note}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default DashboardContent;

