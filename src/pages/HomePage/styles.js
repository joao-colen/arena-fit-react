import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'    
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 0,
        paddingHorizontal: 20,
        backgroundColor: '#002050',
        height: 100
    },
    containerProfile: {
        paddingTop: 20,
        flexDirection: 'row',
    },
    textProfile: {
        paddingLeft: 10,
        paddingTop: 25,
        fontSize: 18,
        color: 'white'
    },
    name: {
        fontWeight: 'bold',
        color: 'white'
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    address: {
        textDecorationLine: 'underline',
        fontSize: 16,
        paddingTop: 10,
        color: 'white'
    },
    body: {
        backgroundColor: '#1C1C1C',
        width: '100%',
        marginTop: 100,
        //height: '100%'
    },
});

export default styles;