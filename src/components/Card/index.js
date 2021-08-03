import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';


import styles from './styles';
 
function Card(props) {
    const { title, name, profile, address, image, price, description } = props.card;
    const { navigate } = useNavigation();
    function handleClick() {
        navigate('Ad', {
            name: name,
            title: title,
            address: address,
            profile: profile,
            address: address,
            image: image,
            price: price,
            description: description
        })
    }
    return (
        <TouchableOpacity style={styles.card} onPress = {handleClick}>
            <ImageBackground 
                style={styles.imageCard} 
                source={image}
            />
            <View style={styles.textCard} >
                <View style={styles.description}>
                    <Text style={styles.name}>{title}</Text>
                    <Text style={styles.name}>{address}</Text>
                </View>
                <View style={styles.price}>
                    <Text style={styles.name}>{price}</Text>
                </View>
            </View>
        </TouchableOpacity>
        
    );
}

export default Card;