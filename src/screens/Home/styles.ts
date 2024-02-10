import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 24
    },
    eventName: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 48
    },
    eventDate: {
        color: '#6b6b6b',
        fontSize: 16,
        marginTop: 5
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#1f1e25',
        borderRadius: 5,
        color: '#fff',
        padding: 16,
        fontSize: 16,
        // marginTop: 10,
        marginRight: 12
    },
    form: {
        marginTop: 36,
        marginBottom: 42,
        width: '100%',
        flexDirection: 'row'
    },
    emptyList: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 24
    }
})