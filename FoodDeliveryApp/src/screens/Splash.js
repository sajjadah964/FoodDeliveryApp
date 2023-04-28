import React,{useEffect}from 'react';
import { StyleSheet, Text, View } from 'react-native'
import NavigationStrings from '../constants/NavigationStrings';


const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(NavigationStrings.LOGIN)
        }, 3000);
    }, [])
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Food Delivery App</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: 'red',
        fontSize: 20
    }
})
export default Splash;

