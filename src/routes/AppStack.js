import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 

import HomePage from '../pages/HomePage';
import AdPage from '../pages/AdPage';
import ConfirmationPage from '../pages/ConfirmationPage';
import SplashPage from '../pages/SplashPage';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Splash" component={SplashPage} />
                <Screen name="Home" component={HomePage} />
                <Screen name="Ad" component={AdPage} />
                <Screen name="Confirmation" component={ConfirmationPage} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;