import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const OTP = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input}></TextInput>
      <TextInput style={styles.input}></TextInput>
      <TextInput style={styles.input}></TextInput>
      <TextInput style={styles.input}></TextInput>
      <TextInput style={styles.input}></TextInput>
      <TextInput style={styles.input}></TextInput>
    </View>
  )
}

export default OTP

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    input: {
        width: 38,
        height: 44,
        borderWidth: 1,
        borderColor: '#5CB8FF',
        borderRadius: 5,
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5CB8FF',
        paddingHorizontal: 14,
        paddingVertical: 10,
    }
})