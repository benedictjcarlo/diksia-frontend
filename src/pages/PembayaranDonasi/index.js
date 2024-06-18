import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, ButtonMetodePembayaran, DetailHeader, Gap, InputNominal, Switch, TagButton } from '../../components'
import { useNavigation } from '@react-navigation/native'

const PembayaranDonasi = () => {
  const navigation = useNavigation()
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -50}
        enabled
        style={{ flex: 1 }}
    >
      <View style={{backgroundColor: '#FFF', flex:1}}>
        <DetailHeader title={'Pembayaran Donasi'} />
        <Gap height={24}/>
        <View style={styles.container}>
          <Text style={styles.sectionTitle}>Masukkan Nominal Donasi</Text>
          <Gap height={6}/>
          <InputNominal/>
          <Gap height={6}/>
          <Text style={styles.smallText}>Donasi min. sebesar 1.000</Text>
          <Gap height={6}/>
          <View style={styles.tagContainer}>
            <TagButton 
            text="Rp 10.000" 
            bgColor='#FFF' 
            color='#4485B7'
            brWidth={2} 
            brColor='#4485B7'
            onPress={() => navigation.replace('')}/>
            <Gap width={16}/>
            <TagButton 
            text="Rp 20.000" 
            bgColor='#FFF' 
            color='#4485B7'
            brWidth={2} 
            brColor='#4485B7'
            onPress={() => navigation.replace('')}/>
            <Gap width={16}/>
            <TagButton 
            text="Rp 30.000" 
            bgColor='#FFF' 
            color='#4485B7'
            brWidth={2} 
            brColor='#4485B7'
            onPress={() => navigation.replace('')}/>
            <Gap width={16}/>
            <TagButton 
            text="Rp 50.000" 
            bgColor='#FFF' 
            color='#4485B7'
            brWidth={2} 
            brColor='#4485B7'
            onPress={() => navigation.replace('')}/>
          </View>
          <Gap height={24}/>
          <Text style={styles.sectionTitle}>Metode Pembayaran</Text>
          <Gap height={6}/>
          <ButtonMetodePembayaran/>
          <Gap height={12}/>
          <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center'}}>
            <Text style={styles.anonim}>Donasi sebagai Anonim (nama anda akan disembunyikan)</Text>
            <Switch />
          </View>
        </View>
        <View style={styles.footerButton}>
          <Button
            text="Lanjutkan Pembayaran" 
            bgColor='#4485B7' 
            color='#FFF'
            brColor='#4485B7' 
            brWidth={0}
            onPress={() => navigation.navigate('TerimakasihDonasiUang')}/>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default PembayaranDonasi

const styles = StyleSheet.create({
  container:{
    marginHorizontal: 20,
    flex: 1,
  },

  sectionTitle: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121',
  },

  smallText: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#212121',
  },

  tagContainer: {
    flexDirection: 'row'
  },

  anonim: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#212121'
  },

  footerButton: {
    borderTopWidth: 1,
    borderTopColor: '#D4D4D4',
    paddingVertical: 12,
    paddingHorizontal: 20,
  }
})