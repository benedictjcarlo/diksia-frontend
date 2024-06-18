import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IcAkunDefault } from '../../../assets'
import Gap from '../Gap'
import TextSpan from '../TextSpan'

const CardDaftarDonasi = () => {
  return (
    <View style={styles.container}>
      <IcAkunDefault height={40} width={40}/>
      <Gap width={24}/>
      <View>
        <Text style={styles.name}>John Doe</Text>
        <View style={styles.textContainer}>
            <Text style={styles.berdonasi}>Berdonasi </Text>
            <TextSpan
            color={'#212121'}
            textSpan={" Rp 500.000"} 
            fontWeight={'bold'}
            fontSize={12}/>
        </View>
        <Text style={styles.waktu}>5 menit lalu</Text>
      </View>
    </View>
  )
}

export default CardDaftarDonasi

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        backgroundColor: '#E0EEFA',
        borderRadius: 6,
    },

    name: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#212121'
    },

    textContainer: {
        flexDirection: 'row',
        marginTop: -4
    },

    berdonasi: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: 'normal',
        color: '#212121'
    },

    waktu: {
        marginTop: -4,
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: 'normal',
        color: '#212121'
    }
})