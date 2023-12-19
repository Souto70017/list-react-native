import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        width:'100%',
        backgroundColor: '#1f1e25',
        flexDirection:'row',
        borderRadius: 5,
        alignItems:'center',
        marginBottom:10,
        
    },

    name: {
        flex: 1,
        color:'white',
        fontSize:15,
        marginLeft: 15,


    },

    buttonText:{
        fontSize:20,
        color:'white',
      },
  
      button: {
        backgroundColor:'red',
        borderRadius: 5,
        height:50,
        width: 50,
        alignItems:'center',
        justifyContent:'center',
        marginLeft: 10,
  
      },

});