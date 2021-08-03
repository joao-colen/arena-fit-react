import React from 'react';
import {View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


import styles from './styles';
 
function ConfirmationPage(props) {
    const { navigate } = useNavigation();

    setTimeout(()=>{
        navigate('Home')
   }, 2000);

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Icon name="check" size={75} style={styles.icon}/>
            </View>
            <Text style={styles.text}>Reserva Confirmada!</Text>
        </View>
        
    );
}

export default ConfirmationPage;