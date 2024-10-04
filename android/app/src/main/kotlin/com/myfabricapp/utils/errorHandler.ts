package com.myfabricapp.utils

export const handleError = (error: any) => {
    console.error('API Error:', error);
    let userFriendlyMessage = 'An error occurred. Please try again later.';
    
    if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
        userFriendlyMessage = `Error ${error.response.status}: ${error.response.data.message || userFriendlyMessage}`;
    } else if (error.request) {
        console.error('Request data:', error.request);
        userFriendlyMessage = 'No response received from the server. Please check your network connection.';
    } else {
        console.error('Error message:', error.message);
    }
    
    return { message: userFriendlyMessage, code: error.code || 500 };
};