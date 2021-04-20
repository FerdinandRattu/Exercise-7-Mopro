import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


const Button = ({textButton, onSubmit}) => {
    return (
        <View>
            <TouchableOpacity style = {styles.button} onPress = {onSubmit}>
            <Text style = {styles.text}>{textButton}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button;

const styles = StyleSheet.create({
    button : {
        backgroundColor : '#C238CE',
        color : 'white',
        borderRadius : 20,
        alignItems : 'center',
        height : 40,
        paddingTop : 10,
        paddingBottom : 9,  
    },
    text : {
        fontSize : 18,
        fontWeight : '500',
        color : 'white',
    },
})
