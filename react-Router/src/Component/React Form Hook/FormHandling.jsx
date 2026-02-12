import React, { useState } from 'react'
import {useForm} from 'react-hook-form';

const FormHandling = () => {
    const {register,handleSubmit,reset} = useForm();
    const [isSubmit,setIsSubmit] = useState(false);
    const [formData,setFormData] = useState([]);
    const submitHandle = (data) => {
    setFormData((prev) => [...prev, data]);  
    setIsSubmit(true);
    reset();
    };
    console.log(formData)
  return (
    <div className='container mt-5'>
        <h1>Employee Registration</h1>
        <br />
        <form action="" onSubmit={handleSubmit(submitHandle)}>
            Name : <input type="text"  {...register("name")}/><br /><br />
            Phone : <input type="text" {...register("phone")} /><br /><br />
            Email: <input type="text"   {...register("email")}/><br /><br />
            Gender : <input type="radio"  value="male" {...register("gender")}/>Male
                     <input type="radio"  value="female"  {...register("gender")}/> Female<br /><br />
            Country  : <select {...register("country")}>
                            <option value='India'>India</option>
                            <option value='USA'>USA</option>
                            <option value='Russia'>Russia</option>
                            <option value='UK(united Kingdom)'>UK(united Kingdom)</option>
                            <option value="Japan">Japan</option>
                       </select>   <br />  <br />
            Password : <input type="text"  {...register("password")}/><br /><br />
            Confirm Passowrd : <input type="text"  {...register("CPassword")}/><br /><br />
            <input type="submit"></input>
        </form>

       {isSubmit== true && <table className='table'>
            <thead>
                <tr><th>Name</th><th>Phone</th><th>Email</th><th>Gender</th><th>Country</th><th>Passowrd</th>
                </tr>
            </thead>
            <tbody>
                {
                    formData.map((user)=>{
                        return <tr><td>{user.name}</td><td>{user.phone}</td><td>{user.email}</td><td>{user.gender}</td><td>{user.country}</td><td>{user.password}</td></tr>
                    })
                }
               
            </tbody>
        </table>
    }
    </div>
  )
}

export default FormHandling