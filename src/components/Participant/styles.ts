import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container :{
        width: '100%',
        backgroundColor: '#1f1e25',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    name: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
        marginLeft: 12
    },
    button :{
        backgroundColor: '#E23c44',
        borderRadius: 5,
        padding: 10,
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    }
})