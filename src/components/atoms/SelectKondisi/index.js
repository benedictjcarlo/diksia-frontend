import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import Gap from '../Gap'

const SelectKondisi = ({label, onSelectChange}) => {
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
            color="#212121"
            backgroundColor= "#FFF"
            >
            <Picker.Item label="Baru" value="Baru" />
            <Picker.Item label="Layak Pakai" value="Layak Pakai" />
            </Picker>
        </View>
        </View>
    )
}

export default SelectKondisi

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#212121',
    },

    input: {
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#D4D4D4',
        color: '#212121'
    }
})