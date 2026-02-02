import React from 'react'

const MapDemo1 = () => {
    let cars = ['BMW', 'Audi', 'Mercedes', 'Toyota'];
  return (
    <div style={{textAlign:"center"}} className='border'>
    <h3>Car List</h3>
    <hr />
        {cars.map((car)=>{
            return <h5 key={car}>{car}</h5>
        })}
    </div>
  )
}

export default MapDemo1