import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#131016',
      flex: 1,
      padding:20,
      
    },
  
    eventName: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
      marginTop: 50,
    },
  
    eventDate: {
      color: 'gray',
      fontSize: 16,
    },

    input:{
      flex: 1,
      backgroundColor:'#1f1e25',
      borderRadius: 5,
      height: 50,
      color: 'white',
      fontSize: 15,
      padding: 15,

    },

    buttonText:{
      fontSize:20,
      color:'white'
    },

    button: {
      backgroundColor:'green',
      borderRadius: 5,
      height:50,
      width: 50,
      alignItems:'center',
      justifyContent:'center',
      marginLeft: 10,
      marginRight: 10,

    },
    
    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42,
    },

    listEmptyText:{
      color:'white',
      fontSize:13,
      textAlign:'center'
    }
  })