import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextSpanCard = ({textSpan, span, color, fontWeight, fontSize}) => {
    return (
    <View style={{flexDirection: 'row'}}>
        <Text style={styles.textSpan(color, fontWeight, fontSize)}>{textSpan}</Text>
        <Text style={styles.span(fontSize)}>{span}</Text>
    </View>
  )
}

export default TextSpanCard

const styles = StyleSheet.create({
    textSpan: (color,fontWeight, fontSize) => ({
        color: color,
        fontWeight: fontWeight,
        fontSize: fontSize,
    }),

    span: (fontSize) => ({
        fontSize: fontSize,
    }),
})