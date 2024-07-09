import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native'
import React from 'react'
import Gap from '../Gap'

const TextInput = ({label, placeholder, ...restProps}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Gap height={12}/>
      <TextInputRN
      style={styles.input} 
      placeholder={placeholder}
      placeholderTextColor="#D4D4D4"
      {...restProps}/>
      <Gap height={12}/>
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#212121',
    },

    input: {
        borderRadius: 6,
        borderWidth: 1,
        padding: 12,
        borderColor: '#D4D4D4',
        color: '#212121'
    }
})