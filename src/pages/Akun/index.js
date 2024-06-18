import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { AkunKeluar, AkunMenu, DefaultHeader, Gap } from '../../components'
import { IcAkunDefault, IcRightArrow } from '../../assets'
import { useNavigation } from '@react-navigation/native'

const Akun = () => {
  const navigation = useNavigation()
  return (
    <View style={{backgroundColor: '#FFF', flex:1}}>
      <DefaultHeader title={"Akun"}/>
      <Gap height={24}/>
      <View style={styles.containerTitle}>
        <IcAkunDefault width={60} height={60}/>
        <Gap width={24}/>
        <View>
          <Text style={styles.title}>Benedict Juan Carlo</Text>
          <Gap height={12} />
          <Text style={styles.text}>carlo.bjc264@gmail.com</Text>
        </View>
      </View>
      <AkunMenu title={'Edit Akun'} onPress={() => navigation.navigate('EditAkun')}/>
      <AkunMenu title={'Ubah Kata Sandi'} onPress={() => navigation.navigate('UbahKataSandi')}/>
      <AkunMenu title={'Bantuan'} onPress={() => navigation.navigate('Bantuan')}/>
      <AkunMenu title={'Syarat dan Ketentuan'} onPress={() => navigation.navigate('SyaratKetentuan')}/>
      <AkunMenu title={'Tentang Diksia'} onPress={() => navigation.navigate('TentangDiksia')}/>
      <AkunKeluar title={'Keluar'} onPress={() => navigation.navigate('Masuk')}/>
    </View>
  )
}

export default Akun

const styles = StyleSheet.create({
  containerTitle: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#D4D4D4',
    paddingBottom: 24,
  },

  title: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121'
  },

  text: {
    fontFamily: 'Roboto,',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#212121'
  },
})