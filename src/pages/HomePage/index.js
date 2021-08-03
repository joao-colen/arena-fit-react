import React from 'react';
import {View, Text, Image, FlatList, ScrollView} from 'react-native';

import styles from './styles';
import Card from '../../components/Card';
import ads from '../../assets/database/ads';

function HomePage() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.containerProfile}>
                    <Image style={styles.profile} source={require('../../assets/images/profile.jpg')}></Image>
                    <Text style={styles.textProfile}>Oi,&nbsp;
                        <Text style={styles.name}>João!</Text>
                    </Text>
                </View>
                
                <Text style={styles.address}>Av. Roriz, 50</Text>
            </View>
            <View style={styles.body}>
                <FlatList
                    data={ads}
                    renderItem={
                        ({item}) => <Card 
                            card={item}                       
                        />
                    }
                    showsVerticalScrollIndicator={false}
                    snapToAlignment={'start'}
                    decelerationRate={'fast'}
                    
                ></FlatList>
            </View>
        </View>
        
    );
}

export default HomePage;