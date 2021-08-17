import React, { useState } from 'react';
import Form from '../components/Form';
import axios from "axios";
import { Link , navigate } from '@reach/router';

const NewAuthor = () => {
    const [formInputs , setFormInputs] = useState({
        name: ''
    })
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/author", formInputs)
            .then((res) => {
                console.log("sending res:", res);
                navigate("/");
            })
            .catch((err) => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
    };

    const handleChange = (e) => {
        console.log("e.target.name", e.target.name);
        console.log("e.target.value", e.target.value);
        setFormInputs({
            ...formInputs,
            [e.target.name]: e.target.value,
            });
    };

    return(
        <div>
            <Link to='/'>Home</Link>
            <h3>Add a new author:</h3>
            {errors.map((err, index) => (
                <p key={index}>{err}</p>
            ))}
            <Form formInputs={formInputs} setFormInputs={setFormInputs} 
            errors={errors} setErrors={setErrors}
            handleSubmit={handleSubmit} handleChange={handleChange}/>
        </div>
    )
}

export default NewAuthor;