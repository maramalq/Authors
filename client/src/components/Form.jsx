import { Link } from '@reach/router';
import React from 'react';
import './style.css';

const Form = ({formInputs , setFormInputs , handleSubmit , handleChange}) => {
    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div class="form-group row">
                    <p>Name: <input type="text" class="form-control" name="name" value={formInputs.name} onChange={handleChange} /> </p>
                </div>

                <div>
                <Link to='/'><button class="btn btn-danger">Cancel</button></Link> <button class="btn btn-success">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form;