import React from 'react'
import { StyleSheet, Text, View ,Button,Dimensions,Alert} from 'react-native'
const {windowWidth,windowHeight}= Dimensions.get('window')
const HomeScreen = ({navigation}) => {
    const onHandleChatLong =()=>{
        navigation.navigate("Chatlong")
    }
    const onHandleChatRan =()=>{
        // navigation.navigate("Chatran")
    }
    const onHandleChatKhi =()=>{
        // navigation.navigate("Chatkhi")
         Alert.alert("Bạn phải trả phí ")
    }
    return (
        <View style = {{flex: 1}}>
            <View style={{marginVertical:10}}>
            <View style = {{marginVertical:10,width: windowWidth - 20, marginHorizontal:10, borderWidth: 1}}>
            <Button title = 'Chat long' onPress = {onHandleChatLong} > </Button>
            </View>
            <View style = {{marginVertical:10,width: windowWidth - 20, marginHorizontal:10, borderWidth: 1}}>
            <Button title = 'Chat ran ' onPress = {onHandleChatRan}> </Button>
            </View>
            <View style = {{marginVertical:10,width: windowWidth - 20, marginHorizontal:10, borderWidth: 1}}>
            <Button title = 'Chat khi'onPress = {onHandleChatKhi}> </Button>
            </View>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
