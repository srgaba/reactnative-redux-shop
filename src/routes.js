import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './Pages/main';
import Cart from './Pages/cart';


const Routes = createAppContainer(
    createStackNavigator(
        {
            Main,
            Cart,
        },
    )
);

export default Routes;