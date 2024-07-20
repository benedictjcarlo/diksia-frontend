import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LogoBca, LogoBni, LogoBri, LogoDana, LogoGopay, LogoMandiri, LogoOvo, LogoQris, LogoShopeepay } from '../../assets'
import { Button, DetailHeader, Gap, OptionMetodePembayaran } from '../../components'
import { MetodePembayaranContext } from '../../components'
import { useRoute } from '@react-navigation/native'

const MetodePembayaran = ({navigation}) => {
  const { setMetodePembayaran } = useContext(MetodePembayaranContext)
  const route = useRoute()
  const { id, title, picturePath, deadline, types } = route.params
  const handlePress = (metodePembayaran) => {
    setMetodePembayaran(metodePembayaran)
    navigation.navigate('PembayaranDonasi', {
      metodePembayaran: metodePembayaran,
      id,
      title,
      picturePath,
      deadline,
      types,
    })
  }

  return (
    <View style={{backgroundColor: '#FFF', flex:1}}>
      <DetailHeader title={'Pilih Metode Pembayaran'} />
      <View style={styles.container}>
        <Gap height={24}/>
        <Text style={styles.sectionTitle}>Pilih Metode Pembayaran</Text>
        <Gap height={12}/>
        <Text style={styles.subTitle}>Pembayaran Instan (minimal Rp 1.000)</Text>
        <Gap height={12}/>
        <OptionMetodePembayaran 
          image={LogoQris} 
          width={42} 
          height={16} 
          label={'QRIS'} 
          onPress={() => handlePress('QRIS')}
        />
        <Gap height={12}/>
        <OptionMetodePembayaran 
          image={LogoGopay} 
          width={42} 
          height={12} 
          label={'GOPAY'} 
          onPress={() => handlePress('GOPAY')}
        />
        <Gap height={12}/>
        <OptionMetodePembayaran 
          image={LogoOvo} 
          width={42} 
          height={14} 
          label={'OVO'} 
          onPress={() => handlePress('OVO')}
        />
        <Gap height={12}/>
        <OptionMetodePembayaran 
          image={LogoDana} 
          width={42} 
          height={12} 
          label={'DANA'} 
          onPress={() => handlePress('DANA')}
        />
        <Gap height={12}/>
        <OptionMetodePembayaran 
          image={LogoShopeepay} 
          width={42} 
          height={18} 
          label={'ShopeePay'} 
          onPress={() => handlePress('SHOPEEPAY')}
        />
        <Gap height={12}/>
        <Text style={styles.subTitle}>Pembayaran Virtual Account (minimal Rp 10.000)</Text>
        <Gap height={12}/>
        <OptionMetodePembayaran 
          image={LogoMandiri} 
          width={42} 
          height={12} 
          label={'Mandiri Virtual Account'} 
          onPress={() => handlePress('Mandiri Virtual Account')}
        />
        <Gap height={12}/>
        <OptionMetodePembayaran 
          image={LogoBca} 
          width={42} 
          height={12} 
          label={'BCA Virtual Account'} 
          onPress={() => handlePress('BCA Virtual Account')}
        />
        <Gap height={12}/>
        <OptionMetodePembayaran 
          image={LogoBri} 
          width={42} 
          height={11} 
          label={'BRI Virtual Account'} 
          onPress={() => handlePress('BRI Virtual Account')}
        />
        <Gap height={12}/>
          <OptionMetodePembayaran 
          image={LogoBni} 
          width={42} 
          height={15} label={'BNI Virtual Account'} 
          onPress={() => handlePress('BNI Virtual Account')}
        />
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