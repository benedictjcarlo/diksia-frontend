import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IlKabar } from '../../../assets'
import { Gap } from '../../atoms'

const DetailDonasiKabar = () => {
  return (
    <View>
      <Text style={styles.title}>Kabar Penggalangan Dana</Text>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Gap height={12}/>
        <IlKabar height={120} width={144}/>
        <Gap height={6}/>
        <Text style={styles.text}>{`Belum ada kabar terbaru\ndari penggalangan dana ini`}</Text>
      </View>
    </View>
  )
}

export default DetailDonasiKabar

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121'
  },

  text: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#4485B7',
    textAlign: 'center',
  }
})