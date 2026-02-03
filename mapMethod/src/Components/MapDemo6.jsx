import React from 'react'
import img1 from '../assets/cLanguage.jfif'
import img2 from '../assets/dbms.jfif'
import img3 from '../assets/react.jfif'

const MapDemo6 = () => {
    const  books = [
        {
            id:1,
            title:"Fundamental of Programming Language C",
            price:250,
            imgUrl:img1
        },
        {
            id:2,
            title:"Database Management System",
            price:350,
            imgUrl:img2
        },
        {
            id:3,
            title:"ReactJS from Scratch",
            price:400,
            imgUrl:img3
        },
    ]
  return (
    <>
    <br />
     <table  border={2} width={900}align='center'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Book Name</th>
                <th>price</th>
                <th>image</th>
            </tr>
        </thead>
    {books.map((book)=>{
        return (
            <tbody key={book.id}>
                        <tr style={{backgroundColor:( book.price > 250) && "lightblue"}}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td >{book.price}</td>
                            <td ><img src={book.imgUrl} alt=""  width={50} height={50}/></td>
                        </tr>
                 </tbody>
        )
    })}
    </table>
    </>
  )
}

export default MapDemo6