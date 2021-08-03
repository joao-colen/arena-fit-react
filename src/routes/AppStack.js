import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 

import HomePage from '../pages/HomePage';
import AdPage from '../pages/AdPage';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Home" component={HomePage} />
                <Screen name="Ad" component={AdPage} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;