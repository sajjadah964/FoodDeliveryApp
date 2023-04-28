import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login as Admin</Text>
      <View style={styles.formView}> 
        <TextInput style={styles.inputStyle} placeholder='Enter your email'/>
        <TextInput style={styles.inputStyle} placeholder='Enter your password'/>
        <TouchableOpacity style={styles.btnStyle} activeOpacity={0.7}>
            <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:23,
        color:'#000',
        // marginTop:50,
        fontWeight:'700'
    },
    formView:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    inputStyle:{
        width:'90%',
        height:50,
        borderWidth:1,
        borderColor:'#000',
        borderRadius:12,
        marginTop:30,
        paddingHorizontal:20
    },
    btnStyle:{
        width:'90%',
        height:50,
        backgroundColor:'orange',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12,
        marginTop:50
    },
    btnText:{
        color:'#000',
        fontSize:20,
    }
})
export default Login;