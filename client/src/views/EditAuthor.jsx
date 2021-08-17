import React, { useEffect , useState } from 'react';
import Form from '../components/Form';
import axios from "axios";
import { Link , navigate } from '@reach/router';
import '../components/style.css'

const EditAuthor = ({id}) => {
    const [formInputs , setFormInputs] = useState({
        name: ''
    })
    const [errors, setErrors] = useState([]);
    const [idError , setIdError] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then((res) => {
            console.log("author results:", res);
            setFormInputs(res.data);
            })
        .catch(err => {
            console.log("the data",err.response.data)
            setIdError(`We're sorry, but we could not find the author you are looking for.
            Would you like to add this author to our database?`);
        })
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/author/${id}`, formInputs)
            .then((res) => {
                console.log("sending res:", res);
                navigate('/');
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

    if( idError === ''){

        return(

            <div>
                <Link to='/'>Home</Link>
                <h3>Edit this author:</h3>
                {errors.map((err, index) => (
                    <p key={index}>{err}</p>
                ))}
                <Form formInputs={formInputs} setFormInputs={setFormInputs} 
                errors={errors} setErrors={setErrors}
                handleSubmit={handleSubmit} handleChange={handleChange}/>
                
            </div>
        )
    } else {
        return(
            <div className="error-box">
                <h1>{idError}</h1>
                <Link to='/new'> Create New Author </Link>
            </div>
            
        )
    }
}

export default EditAuthor;