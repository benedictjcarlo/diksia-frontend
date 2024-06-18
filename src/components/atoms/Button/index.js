import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({text,bgColor='#FFF', color='#8A8A8A', brWidth, brColor='', width, fontSize=16, fontWeight='bold', onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={styles.container(bgColor, brWidth, brColor, width)}>
            <Text style={styles.title(color,fontSize,fontWeight)}>{text}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container: (bgColor, brWidth, brColor, width) => ({
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Roboto',
        backgroundColor: bgColor,
        borderWidth: brWidth,
        borderColor: brColor,
        borderRadius:6,
        padding: 12,
        width: width,
    }),

    title: (color,fontSize,fontWeight) => ({
        fontWeight: fontWeight,
        color: color,
        fontSize: fontSize,
    }),
})