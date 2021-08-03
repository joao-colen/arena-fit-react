import React, {useState} from 'react';
import {View, Text, Image, ImageBackground, ScrollView, Platform} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { RectButton } from 'react-native-gesture-handler';

import DateTimePicker from '@react-native-community/datetimepicker';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import Card from '../../components/Card';
import ads from '../../assets/database/ads';


function AdPage({route}) {
    const { title, name, profile, address, image, price, description } = route.params;
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const { navigate } = useNavigation();
    function goConfirmartionPage() {
        navigate('Confirmation')
    }

    function goHomePage() {
        navigate('Home')
    }


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
      const showTimepicker = () => {
        showMode('time');
      };
    
    return (
        <ScrollView style={styles.container} scrollEnabled={false}>
            <View style={styles.header}>
                <ImageBackground 
                    style={styles.imageCard} 
                    source={image}
                />
                <View style={styles.backContainer}>
                    
                        <Icon name="arrow-left" size={25} style={styles.icon} onPress={goHomePage}/>
                    
                </View>
                <View style={styles.titleBox}>  
                    <Text style={styles.name}>{name}</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.textCard} >
                    <View>
                        <Text style={styles.name}>{title}</Text>
                        <Text style={styles.address}>{address}</Text>
                    </View>
                    <View style={styles.imageBox}>
                        <Image style={styles.profile} source={profile}></Image>
                        <Text style={styles.price}>R$ {price}</Text>
                    </View>
                </View>
                <View style={styles.description} >
                    <Text style={styles.descriptionTitle}>Descrição</Text>
                    <Text style={styles.descriptionText}>{description}</Text>
                </View>
                <View style={styles.timeBox}>
                    <Text style={styles.descriptionTitle}>Horário</Text>
                    <View style={styles.buttonContainer}>
                        <RectButton style={styles.button} onPress={showTimepicker}>
                            <Text style={styles.textButton} >Escolha seu horário</Text>
                        </RectButton>
                        <RectButton style={styles.button} onPress = {goConfirmartionPage}>
                            <Text style={styles.textButton}>Reservar Horário</Text>
                        </RectButton>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                            />
                        )}
                    </View>
                </View>
            </View>
            
        </ScrollView>
        
    );
}

export default AdPage;