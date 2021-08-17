import { Link } from '@reach/router';
import React from 'react';
import DeleteButton from './DeleteButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const List = ({ authors , setAuthors }) => {

    const removeFromDom = (id) => {
        setAuthors(authors.filter((author) => author._id !== id));
    };

    return(
        <div >
            <table style={{margin:'20px auto', width:'700px'}} className="table table-striped">
                <thead>
                    <th>Author</th>
                    <th>Actions avilable</th>
                </thead>

                <tbody>
                { authors.length>0 && authors.sort((a, b) => a.name.localeCompare(b.name)).map((author , idx) => {

                    return(
                        <tr key={idx}>
                            <td>{author.name}</td>
                            <td>
                                <Link to={`/edit/${author._id}`}><button class="btn btn-primary">Edit</button></Link> &nbsp;
                                <DeleteButton id={author._id} successCallBack={() => removeFromDom(author._id)}/>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            
        </div>
    )
}

export default List;