package com.myfabricapp

import React, { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { gifService } from './networkingUtility';
import Home from './Home';

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
            <Drawer.Screen name="Home" component={Home} />
            {categoryList.map((category) => (
                <Drawer.Screen 
                    key={category.name} 
                    name={category.name} 
                    component={Home} 
                    initialParams={{ categoryName: category.name }} 
                />
            ))}
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;