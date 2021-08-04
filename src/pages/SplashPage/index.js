import React from 'react';
import {View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
 
function SplashPage(props) {
    const { navigate } = useNavigation();

    setTimeout(()=>{
        navigate('Home')
   }, 2000);

    return (
        <View style={styles.container}>
            <Text style={styles.firstName}>
                Arena
                <Text style={styles.secondName}>Fit</Text>
            </Text>
        </View>
        
    );
}

export default SplashPage;