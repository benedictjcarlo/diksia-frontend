import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IcAkunDefault, IcVerified } from '../../../assets'
import { Gap } from '../../atoms'

const DetailDonasiPenggalang = () => {
  return (
    <View>
      <Text style={styles.title}>Penggalang Dana</Text>
      <Gap height={12}/>
      <View style={{flexDirection:'row', alignItems: 'center'}}>
        <IcAkunDefault height={40} width={40}/>
        <Gap width={12}/>
        <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.titlePenggalang}>Jane Doe</Text>
                <Gap width={6}/>
                <IcVerified height={12} width={12}/>
            </View>
            <Text style={styles.textPenggalang}>Akun Terverifikasi</Text>
        </View>
      </View>
    </View>
  )
}

export default DetailDonasiPenggalang

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#212121'
    },

    titlePenggalang: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#212121'
    },

    textPenggalang: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: 'normal',
        color: '#212121'
    }
})