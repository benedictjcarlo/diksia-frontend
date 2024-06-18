import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IcRightArrow } from '../../../assets'
import { useNavigation } from '@react-navigation/native'

const ButtonMetodePembayaran = () => {
    const navigation = useNavigation()
    return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('MetodePembayaran')}>
        <View style={styles.container}>
        <Text style={styles.label}>Pilih Metode Pembayaran</Text>
        <IcRightArrow style={styles.rightArrow}/>
        </View>
    </TouchableOpacity>
    )
}

export default ButtonMetodePembayaran

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#E0EEFA',
        padding: 20,
        borderRadius: 6,
        height: 60,
    },

    label: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'normal',
        color: '#5C5C5C'
    },

    rightArrow: {
        width: 12,
        height: 18,
    }
})