import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const InputNominal = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>Rp</Text>
        <TextInput style={styles.input} placeholder={'0'} placeholderTextColor={'#212121'}/>
    </View>
  )
}

export default InputNominal

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#E0EEFA',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 6,
        height: 60,
    },

    label: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#212121'
    },

    input: {
        fontFamily: 'Roboto',
        textAlign: 'right',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#212121'
    }
})