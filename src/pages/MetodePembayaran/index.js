import { StyleSheet, Text, View, createContext, useState } from 'react-native'
import React from 'react'
import { Button, DetailHeader, Gap, OptionMetodePembayaran } from '../../components'
import { LogoBca, LogoBni, LogoBri, LogoDana, LogoGopay, LogoMandiri, LogoOvo, LogoQris, LogoShopeepay } from '../../assets'

const MetodePembayaran = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#FFF', flex:1}}>
      <DetailHeader title={'Pilih Metode Pembayaran'} />
      <View style={styles.container}>
        <Gap height={24}/>
        <Text style={styles.sectionTitle}>Pilih Metode Pembayaran</Text>
        <Gap height={12}/>
        <Text style={styles.subTitle}>Pembayaran Instan (minimal Rp 1.000)</Text>
        <Gap height={12}/>
        <OptionMetodePembayaran image={LogoQris} width={42} height={16} label={'QRIS'} onPress={() => {}}/>
        <Gap height={12}/>
        <OptionMetodePembayaran image={LogoGopay} width={42} height={12} label={'GO-PAY'} onPress={() => {}}/>
        <Gap height={12}/>
        <OptionMetodePembayaran image={LogoOvo} width={42} height={14} label={'OVO'} onPress={() => {}}/>
        <Gap height={12}/>
        <OptionMetodePembayaran image={LogoDana} width={42} height={12} label={'DANA'} onPress={() => {}}/>
        <Gap height={12}/>
        <OptionMetodePembayaran image={LogoShopeepay} width={42} height={18} label={'ShopeePay'} onPress={() => {}}/>
        <Gap height={12}/>
        <Text style={styles.subTitle}>Pembayaran Virtual Account (minimal Rp 10.000)</Text>
        <Gap height={12}/>
        <OptionMetodePembayaran image={LogoMandiri} width={42} height={12} label={'Mandiri Virtual Acount'} onPress={() => {}}/>
        <Gap height={12}/>
        <OptionMetodePembayaran image={LogoBca} width={42} height={12} label={'BCA Virtual Account'} onPress={() => {}}/>
        <Gap height={12}/>
        <OptionMetodePembayaran image={LogoBri} width={42} height={11} label={'BRI Virtual Account'} onPress={() => {}}/>
        <Gap height={12}/>
        <OptionMetodePembayaran image={LogoBni} width={42} height={15} label={'BNI Virtual Account'} onPress={() => {}}/>
        <Gap height={12}/>
      </View>
      <View style={styles.footerButton}>
        <Button
          text="Pilih Metode Pembayaran" 
          bgColor='#4485B7' 
          color='#FFF'
          brColor='#4485B7' 
          brWidth={0}
          onPress={() => navigation.navigate('PembayaranDonasi')}/>
      </View>
    </View>
  )
}

export default MetodePembayaran

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
    },

    sectionTitle: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#212121'
    },

    subTitle: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#212121'
    },

    footerButton: {
      borderTopWidth: 1,
      borderTopColor: '#D4D4D4',
      paddingVertical: 12,
      paddingHorizontal: 20,
    }
})