import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, DetailHeader, Gap, TextSpan } from '../../components'

const MetodePengirimanGadget = ({navigation}) => {
  return (
    <View style={styles.page}>
      <DetailHeader title={'Metode Pengiriman Gadget'} />
      <View style={styles.container}>
        <Gap height={24}/>
        <Text style={styles.title}>Metode Pengiriman Gadget</Text>
        <Gap height={6}/>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.text}>1. Tekan tombol </Text>
            <TextSpan
                color={'#212121'}
                textSpan={"Kirim Gadget"} 
                fontWeight={'bold'}
                fontSize={14}/>
        </View>
        <Gap height={12}/>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.text}>2. Lalu </Text>
            <TextSpan
                color={'#212121'}
                textSpan={"kirim gadget"} 
                fontWeight={'bold'}
                fontSize={14}/>
            <Text style={styles.text}> anda melalui kurir ke alamat kami </Text>
        </View>
        <Text style={styles.text}>dalam waktu maksimal 1x24 jam setelah Anda menekan</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.text}>tombol </Text>
            <TextSpan
                color={'#212121'}
                textSpan={"Kirim Gadget"} 
                fontWeight={'bold'}
                fontSize={14}/>
        </View>
        <Gap height={12}/>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.text}>3. </Text>
            <TextSpan
                color={'#212121'}
                textSpan={"Upload nomor seri"} 
                fontWeight={'bold'}
                fontSize={14}/>
            <Text style={styles.text}> pengiriman Anda dan proses donasi</Text>
        </View>
        <Text>Anda selesai</Text>
      </View>
      <View style={styles.footerButton}>
        <Button
          text="Lanjutkan Donasi Gadget" 
          bgColor='#4485B7' 
          color='#FFF'
          brColor='#4485B7' 
          brWidth={0}
          onPress={() => navigation.navigate('PengirimanGadget')}/>
      </View>
    </View>
  )
}

export default MetodePengirimanGadget

const styles = StyleSheet.create({
    page: {
      backgroundColor: '#FFF',
      flex: 1,
    },

    container: {
      marginHorizontal: 20,
      flex: 1
    },

    title: {
      fontFamily: 'Roboto',
      fontSize: 16,
      fontWeight: 'bold',
      color: '#212121'
    },

    text: {
      fontFamily: 'Roboto',
      fontSize: 14,
      fontWeight: 'normal',
      color: '#212121'
    },

    footerButton: {
      borderTopWidth: 1,
      borderTopColor: '#D4D4D4',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 6,
  },
})