package src.components;

import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import gifService from '../services/gifService';

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
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                {categoryList.map((category) => (
                    <Drawer.Screen key={category.id} name={category.name} component={CategoryComponent} />
                ))}
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default DrawerNavigation;