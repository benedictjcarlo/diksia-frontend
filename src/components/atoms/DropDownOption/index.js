import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IcDownArrow } from '../../../assets'

const DropDownOption = ({placeholder}) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.container}>
            <Text style={styles.placeholder}>{placeholder}</Text>
            <IcDownArrow width={20} height={10}/>
        </View>
    </TouchableOpacity>
  )
}

export default DropDownOption

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        borderWidth: 1,
        borderColor: '#D4D4D4',
        borderRadius: 6,
    },

    placeholder: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 'normal',
        color: '#D4D4D4'
    },
})