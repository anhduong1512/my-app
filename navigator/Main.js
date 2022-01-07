import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../components/HomeScreen';
import Chatlong from '../components/Chatlong';
import Chatran from '../components/Chatran';
import Chatkhi from '../components/Chatkhi';
const Stack = createNativeStackNavigator()

const Main = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chatlong" component={Chatlong} />
        <Stack.Screen name="Chatran" component={Chatran} />
        <Stack.Screen name="Chatkhi" component={Chatkhi} />
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Main

const styles = StyleSheet.create({})
