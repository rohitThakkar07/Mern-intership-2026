import React from 'react'

const MapDemo5 = () => {
    const users =[
        {id:1, name:"Laptop", price:50000,age:28},
        {id:2, name:"Mobile", price:20000,age:22},
        {id:3, name:"Tablet", price:30000,age:25},
        {id:4, name:"Monitor", price:15000,age:30},
    ]
  return (
    <> 
        <br />
    <table  border={2} width={400}align='center'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>price</th>
                <th>age</th>
            </tr>
        </thead>
        {
        users.map((u)=>{
                return (
                    <tbody key={u.id}>
                        <tr style={{backgroundColor:( u.age >25) && "lightblue"}}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td style={{backgroundColor : ( u.salary >45000) && "yellow"}}>{u.price}</td>
                            <td >{u.age}</td>
                        </tr>
                    </tbody>
                )
            })
        }
    </table>
    </>
  )
}

export default MapDemo5