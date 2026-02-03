import React from 'react'

const MapDemo8 = () => {
    const students = [
  { id: 1, name: "Amit", marks: 85, age: 20 },
  { id: 2, name: "Rohit", marks: 45, age: 21 },
  { id: 3, name: "Kunal", marks: 72, age: 19 },
  { id: 4, name: "Sneha", marks: 30, age: 22 },
];

  return (
    <>
    <br />
     <table  border={2} width={400}align='center'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Marks</th>
                <th>Age</th>
            </tr>
        </thead>
    {students.map((student)=>{
        return (
            <tbody key={student.id}>

                        <tr style={{backgroundColor:( student.marks >50) && "lightgreen"}}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td >{student.marks}</td>
                            <td >{student.age}</td>
                        </tr>
                    </tbody>
        )
    }
    )}
    </table>

    </>
  )
}

export default MapDemo8