import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
       width: '100%',
       height: '100%'
    },
    header: {
        height: 200
    },
    backContainer: {
        width: 40,
        height: 40,
    },
    icon: {
        color: 'white',
        position: 'absolute',
        top: 20,
        left: 10
    },
    imageCard: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 25,
        resizeMode: 'cover'
    },
    titleBox: {
        position: 'absolute',
        bottom: 20,
        paddingHorizontal: 20,
        marginTop: 20
        
    },
    title: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 28
    },
    body: {
        backgroundColor: '#393939',
        height: '100%'
    },  
    imageBox: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 10
        
    },
    textCard: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginTop: 20
    },
    name: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 30
    },
    address: {
        color: 'white',
        textDecorationLine: 'underline',
    },
    price: {
        paddingTop: 15,
        color: 'white',
        fontSize: 22
    },
    description: {
        paddingHorizontal: 20,
        marginBottom: 20
    },
    descriptionText: {
        color: 'white',
        fontSize: 14,
        textAlign:'justify'
    },
    descriptionTitle: {
        marginBottom: 10,
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold'
    },
    timeBox: {
        paddingHorizontal: 20,
        marginTop: 20,
        height: 140
    },
    textButton: {
        fontSize: 18,
        color: 'white',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#24AA53',
        width: '48%',
        height: 42,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;