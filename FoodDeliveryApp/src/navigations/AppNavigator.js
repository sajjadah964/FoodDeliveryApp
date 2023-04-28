import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/admin/Login';
import NavigationStrings from '../constants/NavigationStrings';
import Splash from '../screens/Splash';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator  initialRouteName={NavigationStrings.SPLASH}>
            <Stack.Screen name={NavigationStrings.LOGIN} component={Login} options={{headerShown: false}}/>
            <Stack.Screen name={NavigationStrings.SPLASH} component={Splash} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const styles = StyleSheet.create({})
export default AppNavigator;


