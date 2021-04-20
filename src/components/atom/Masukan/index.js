import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Masukan = ({label, placeholder, ...rest}) => {
    return (
        <View>
            <Text style = {styles.label}>{label}</Text>
            <TextInput style = {styles.masukan} placeholder = {placeholder} {...rest}/>

        </View>
    )
}

export default Masukan;

const styles = StyleSheet.create({
    label : {
        fontSize :14,
        fontWeight :'500',
        marginBottom : 8,
    },
    masukan : {
        borderWidth : 1,
        borderRadius : 10,
        borderColor : '#C5C5C5',
    },
})

