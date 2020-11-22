import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        display:"flex",
        flex: 1,
        alignItems: 'center'
    },
    name: {
        flex:1,
        fontSize: 25,
        fontWeight:"bold",
        color:'#788eec'

    },
    scroll:{
        flex:1,
        width:'90%'
    },
    cardTitle:{
        flex:1,
        fontSize: 18,
        color:'#788eec',
    },
    cardData:{
        flex:1,
        fontSize: 14,
        color:'black'
    },
    deleteButton:{
        position:"absolute",
        fontWeight:"bold",
        color:"#A9A9A9",
        right:-5,
        top: -15
    },
    deleteButtonText:{
        fontWeight:"bold",
        color:"#A9A9A9",
        fontSize:20
    },
    card:{
        display: "flex",
        height: 250,
        justifyContent: "center",
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 30,
        padding: 10,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    signOutButton:{
        backgroundColor: '#788eec',
        position:'absolute',
        top:-50,
        zIndex:2,
        right:5,
        marginBottom: 30,
        padding: 5,
        marginTop: 5,
        height: 35,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    noEmployees:{
        flex: 1,
        fontSize:20,
        fontWeight:"bold",
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        marginTop:"80%", 
        marginLeft:"10%",
        color:"#A9A9A9",
    }
})
