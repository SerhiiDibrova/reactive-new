package src.navigation;

import React, { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import gifService from '../utils/networking/api/gif-service';
import HomeTabs from './HomeNavigation';
import CategoryStack from './CategoryNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    const [categoryList, setCategoryList] = useState<string[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const result = await gifService.getCategories();
                setCategoryList(result.data.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);

    return (
        <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name='Home' component={HomeTabs} />
            {categoryList.map((category, index) => (
                <Drawer.Screen key={index} name={category.name} component={CategoryStack} initialParams={{ categoryName: category.name }} />
            ))}
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;