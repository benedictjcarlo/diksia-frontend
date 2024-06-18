import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, AuthHeader, OTP } from '../../components'

const KodeOTP = ({navigation}) => {
  return (
    <View style={{backgroundColor:'#FFF', flex:1}}>
        <AuthHeader />
        <Gap height={24}/>
        <View  style={styles.titleContainer}>
            <Text style={styles.title}>Masukkan Kode OTP</Text>
            <Gap height={12}/>
        </View>
        <View style={styles.container}>
            <Text style={styles.text}>Masukkan kode OTP yang telah kami kirimkan ke email atau nomor ponsel Anda</Text>
            <Gap height={48}/>
            <OTP />
            <Gap height={48}/>
            <Button text="Verifikasi" bgColor='#5CB8FF' color='#FFF' onPress={() => navigation.navigate('KataSandi')}/>
        </View>
    </View>
  )
}


export default KodeOTP

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 24,
  },

  title: {
    fontFamily: 'Roboto',
    color: '#212121',
    fontSize: 18,
    fontWeight: 'bold'
  },

  container: {
    justifyContent: 'center',
    marginHorizontal: 40,
  },

  text : {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#212121',
    textAlign: 'center',
  }
})