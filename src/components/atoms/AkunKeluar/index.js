import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IcKeluar } from '../../../assets'

const AkunKeluar = ({onPress, title,}) => {
    return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={styles.containerEdit}>
            <Text style={styles.title}>{title}</Text>
            <IcKeluar height={18} width={18}/>
        </View>
    </TouchableOpacity>
    )
}

export default AkunKeluar

const styles = StyleSheet.create({
    containerEdit: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        paddingVertical: 24,
    },

    title: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FF3030',
    }
})