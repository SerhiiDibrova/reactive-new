export const handleError = (error: any): string => {
    console.error('API Error:', error);
    return 'An error occurred while processing your request. Please try again later.';
};