import React from "react";

const MapDemo9 = () => {
  const students = [
    { id: 1, name: "Amit", subject: "Maths", marks: 78, age: 20 },
    { id: 2, name: "Raj", subject: "Science", marks: 25, age: 21 },
    { id: 3, name: "Kunal", subject: "English", marks: 55, age: 19 },
    { id: 4, name: "Sneha", subject: "Computer", marks: 30, age: 22 },
    { id: 5, name: "Arjun", subject: "Physics", marks: 90, age: 20 },
  ];

  return (
    <>
      <h2 align="center">Student Result Table</h2>

      <table border={2} width="600" align="center">
        <thead style={{ backgroundColor: "#ddd" }}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Marks</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {students.map((stu) => (
            <tr
              key={stu.id}
              style={{
                backgroundColor: stu.marks < 33 ? "red" : "white",
                color: stu.marks < 33 ? "white" : "black",
              }}
            >
              <td>{stu.id}</td>
              <td>{stu.name}</td>
              <td>{stu.subject}</td>
              <td>{stu.marks}</td>
              <td>{stu.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MapDemo9;
