import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DefaultHeader = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default DefaultHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5CB8FF',
    },

    title: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        paddingHorizontal: 20,
        paddingVertical: 18,
    }
})