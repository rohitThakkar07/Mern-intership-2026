import React from 'react'

const MapDemo3 = () => {
    const employees = [
        {id:1, name:"John", salary:40000},
        {id:2, name:"Alice", salary:50000},
        {id:3, name:"Bob", salary:45000},
        {id:4, name:"Eve", salary:55000},    
    ]
  return (
    <> 
        <br />
    <table  border={2} width={400}align='center'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Salary</th>
            </tr>
        </thead>
        {
            employees.map((emp)=>{
                return (
                    <tbody key={emp.id}>
                        <tr>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.salary}</td>
                        </tr>
                    </tbody>
                )
            })
        }
    </table>
    </>
  )
}

export default MapDemo3