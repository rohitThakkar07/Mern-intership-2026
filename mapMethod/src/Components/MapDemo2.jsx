import React from 'react'

const MapDemo2 = () => {
    const products = [
        {id:1, name:"Laptop", price:50000},
        {id:2, name:"Mobile", price:20000},
        {id:3, name:"Tablet", price:30000},
        {id:4, name:"Monitor", price:15000},    

    ]
  return (
    <div className='border'>
    <h3>List items</h3>
    <hr />
       { 
        products.map((item)=>{
        return <li>{item.id} - {item.name} - {item.price}</li>
        })}
      
    </div>
  )
}

export default MapDemo2