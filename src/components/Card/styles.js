import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    name: {
        fontWeight: 'bold',
        color: 'white'
    },
    card: {
        marginTop: 20,
        marginHorizontal: 20
    },
    imageCard: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 25,
        resizeMode: 'cover'
    },
    textCard: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 120,
        paddingHorizontal: 20,
        paddingBottom: 10
    },
    price: {
        paddingTop: 15
    }
});

export default styles;