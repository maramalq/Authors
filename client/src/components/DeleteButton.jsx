import React from 'react';
import axios from "axios";
import { navigate } from "@reach/router";

const DeleteButton = ({ id, successCallBack }) => {
    const clickFunction = (id) => {
        axios
        .delete(`http://localhost:8000/api/author/${id}`)
        .then((res) => {
            console.log(res);
            successCallBack();
            navigate("/");
        })
        .catch((err) => console.log(err));
    };

    return (
        <>
            <button class="btn btn-danger" onClick={() => clickFunction(id)}>Delete</button>
        </>
    );
};

export default DeleteButton;