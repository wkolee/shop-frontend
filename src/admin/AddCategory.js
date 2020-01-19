import React, { useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import {createCategory} from './apiAdmin'

const AddCategory = () => {
    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    // destructure user and token from localstorage
    const { user, token } = isAuthenticated();

    const handleChange = e => {
        setError("");
        setName(e.target.value);
    };

    const clickSubmit = e => {
        e.preventDefault();
        setError("");
        setSuccess(false);
        // make request to api to create category
        createCategory(user._id, token, {name})
        .then(data =>{
            if(data.error){
                setError(true);
            }else{
                setError("");
                setSuccess(true);
            }
        })
    };

    const newCategoryFom = () => (
        <form onSubmit={clickSubmit}>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    placeholder='example, "jeans, shirt, handbags, etc'
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    value={name}
                    autoFocus
                    required
                />
            </div>
            <button className="btn btn-outline-primary">Create Category</button>
        </form>
    );

    const showSuccess = () => {
        if(success){
        return <h3 className='text-success'>{name} is created</h3>
        }
    }

    const showError = () => {
        if(error){
        return <h3 className='text-danger'>{name} category already exist</h3>
        }
    }

    const goBack = () =>(
        <div className='mt-5'>
            <Link to ="/admin/profile" className='text-warnig'>Go Back To Dashboard</Link>
        </div>
    );


    return (
        <Layout
            title="Add a new category"
            description={`Welcome ${user.name}, ready to add a new category?`}
        >
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showSuccess()}
                    {showError()}
                    {newCategoryFom()}
                    {goBack()}
                </div>
            </div>
        </Layout>
    );
};

export default AddCategory;
