import React, { useState } from 'react'
const InputHandler = () => {

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        college: "",
        course: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <br /><br />
            <form onSubmit={handleSubmit}>
                Name :
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <br /><br />

                Age :
                <input type="text" name="age" value={formData.age} onChange={handleChange} />
                <br /><br />

                Email :
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                <br /><br />

                Phone :
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                <br /><br />

                City :
                <input type="text" name="city" value={formData.city} onChange={handleChange} />
                <br /><br />

                State :
                <input type="text" name="state" value={formData.state} onChange={handleChange} />
                <br /><br />

                Country :
                <input type="text" name="country" value={formData.country} onChange={handleChange} />
                <br /><br />

                Pincode :
                <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
                <br /><br />

                College :
                <input type="text" name="college" value={formData.college} onChange={handleChange} />
                <br /><br />

                Course :
                <input type="text" name="course" value={formData.course} onChange={handleChange} />
                <br /><br />

                <button type='submit' className='btn btn-warning'>Submit</button>
            </form>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>Pincode</th>
                            <th>College</th>
                            <th>Course</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{formData.name}</td>
                            <td>{formData.age}</td>
                            <td>{formData.email}</td>
                            <td>{formData.phone}</td>
                            <td>{formData.city}</td>
                            <td>{formData.state}</td>
                            <td>{formData.country}</td>
                            <td>{formData.pincode}</td>
                            <td>{formData.college}</td>
                            <td>{formData.course}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default InputHandler