package com.myfabricapp.components

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Category = ({ selectedCategory }) => {
    const [categoryDetails, setCategoryDetails] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategoryDetails = async () => {
            try {
                const response = await axios.get(`/api/categories/${selectedCategory}`);
                setCategoryDetails(response.data);
            } catch (err) {
                setError(err.message);
            }
        };

        if (selectedCategory) {
            fetchCategoryDetails();
        }
    }, [selectedCategory]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!categoryDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{categoryDetails.name}</h1>
            <p>{categoryDetails.description}</p>
        </div>
    );
};

export default Category;