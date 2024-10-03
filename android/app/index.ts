package main

import { getCategories } from './src/api/categoriesApi';

const testGetCategories = async () => {
    try {
        const categories = await getCategories();
        console.log('Fetched Categories:', categories);
    } catch (error) {
        console.error(error);
    }
};

testGetCategories();