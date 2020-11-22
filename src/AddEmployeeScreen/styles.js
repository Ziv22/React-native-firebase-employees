import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        borderBottomColor:"#A9A9A9",
        borderBottomWidth:1,
        marginBottom: 10,
        marginLeft: 0,
        marginRight: 30,
        paddingLeft: 16
    },
    inputTitle:{
        fontWeight:"bold",
        marginTop: 20,
        fontSize: 18,
        color:'#788eec',
    },
    button: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },

    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    }
})