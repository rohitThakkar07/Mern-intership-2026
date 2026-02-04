import React from 'react'
import { Link } from 'react-router-dom'

const Shows = () => {
  return (
    <ul>
        <li><Link to="/watch/:Breaking Bad">Breaking Bad</Link></li>
        <li><Link to="/watch/:Game of Thrones">Game of Thrones</Link></li>
        <li><Link to="/watch/:Stranger Things">Stranger Things</Link></li>
        <li><Link to="/watch/:The Crown">The Crown</Link></li>
        <li><Link to="/watch/:The Mandalorian">The Mandalorian</Link></li>
    </ul>
  )
}

export default Shows