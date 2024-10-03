package src.components;

import React, { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import gifService from '../services/gifService';
import HomeTabs from './HomeTabs';
import CategoryStack from './CategoryStack';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categories = await gifService.getCategories();
                setCategoryList(categories);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCategories();
    }, []);

    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeTabs} />
            {categoryList.map((category) => (
                <Drawer.Screen key={category.name} name={category.name} component={CategoryStack} />
            ))}
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;