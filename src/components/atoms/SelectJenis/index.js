import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import Gap from '../Gap'

const SelectJenis = ({label, onSelectChange}) => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Gap height={12}/>
      <View style={styles.input}>
        <Picker
          style={{ color: '#212121' }} 
          selectedValue={selectedValue}
          onValueChange={(itemValue) => {
            onSelectChange(itemValue)
            setSelectedValue(itemValue)
          }}
        >
          <Picker.Item label="Handphone" value="Handphone" />
          <Picker.Item label="Tablet" value="Tablet" />
          <Picker.Item label="Laptop" value="Laptop" />
        </Picker>
      </View>
    </View>
  )
}

export default SelectJenis

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#212121',
  },
  
  labelText: {
    color: 'gray',
  },

  input: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#D4D4D4',
  }
})