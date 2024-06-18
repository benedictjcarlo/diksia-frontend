import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextSpan = ({textSpan, color, fontWeight, fontSize, onPress}) => {
    return (
    <View>
        <Text style={styles.textSpan(color, fontWeight, fontSize)} onPress={onPress}>{textSpan}</Text>
    </View>
  )
}

export default TextSpan

const styles = StyleSheet.create({
    textSpan: (color,fontWeight, fontSize) => ({
        fontSize: fontSize,
        color: color,
        fontWeight: fontWeight,
    })
})