package com.myfabricapp.components

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FollowingScreen = () => {
    const [followingData, setFollowingData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFollowingData = async () => {
            try {
                const response = await axios.get('/api/following');
                setFollowingData(response.data);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchFollowingData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {followingData.map(user => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.content}</p>
                </div>
            ))}
        </div>
    );
};

export default FollowingScreen;