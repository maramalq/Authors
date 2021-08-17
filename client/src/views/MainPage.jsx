import { Link } from '@reach/router';
import React, { useEffect, useState } from 'react';
import List from '../components/List';
import axios from "axios";


const MainPage = () => {
    const [authors , setAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
            .then((res) => {
                console.log("Authors are:" , res.data)
                setAuthors(res.data)
            })
            .catch((err) => console.log(err))
        
    }, []);

    return(
        <>
            <div>
                <h1>Favorite Authors</h1>
                <Link to='/new'>Add an Author</Link>
                <h2>We have Quotes by:</h2>
                <List authors={authors} setAuthors={setAuthors}/>
            </div>
        </>
        
    )
}

export default MainPage;