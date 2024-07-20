import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Button, ButtonMetodePembayaran, DetailHeader, Gap, InputNominal, MetodePembayaranContext, Switch, TagButton } from '../../components'
import { LogoBca, LogoBni, LogoBri, LogoDana, LogoGopay, LogoMandiri, LogoOvo, LogoQris, LogoShopeepay } from '../../assets'
import { getData } from '../../utils'
import { useNavigation, useRoute } from '@react-navigation/native'

const PembayaranDonasi = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [nominal, setNominal] = useState('')
  const [formattedNominal, setFormattedNominal] = useState('')
  const [userProfile, setUserProfile] = useState({})
  const { metodePembayaran } = useContext(MetodePembayaranContext);
  const { id, title, picturePath, deadline, types} = route.params;

  useEffect(() => {
    getData('userProfile').then((res) => {
      setUserProfile(res)
    })
  })

  const getLogo = (metodePembayaran) => {
    switch (metodePembayaran) {
      case 'QRIS':
        return LogoQris;
      case 'GOPAY':
        return LogoGopay;
      case 'OVO':
        return LogoOvo;
      case 'DANA':
        return LogoDana;
      case 'SHOPEEPAY':
        return LogoShopeepay;
      case 'Mandiri Virtual Account':
        return LogoMandiri;
      case 'BCA Virtual Account':
        return LogoBca;
      case 'BRI Virtual Account':
        return LogoBri;
      case 'BNI Virtual Account':
        return LogoBni;
      default:
        return null;
    }
  }

  const handleNominalChange = (value) => {
    const numericText = value.replace(/[^0-9]/g, '');
    setNominal(numericText); // store the numeric value
    setFormattedNominal(numericText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'));
  };
  
  const formatNominal = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  
  const handleCheckout = () => {
    const data = {
      donation: {
        id,
        title,
        picturePath,
        deadline,
        types,
      },
      transaction: {
        metodePembayaran,
        nominalDonasi: nominal,
        status: 'Berhasil',
      },
      userProfile
    };
    navigation.replace('RingkasanDonasi', { data });
  }

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
          <InputNominal value={formatNominal(nominal)} onChangeText={(text) => handleNominalChange(text)}/>
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
            onSelect={(value) => handleNominalChange(value)}
            value="10000"/>
            <Gap width={16}/>
            <TagButton 
            text="Rp 20.000" 
            bgColor='#FFF' 
            color='#4485B7'
            brWidth={2} 
            brColor='#4485B7'
            onSelect={(value) => handleNominalChange(value)}
            value="20000"/>
            <Gap width={16}/>
            <TagButton 
            text="Rp 30.000" 
            bgColor='#FFF' 
            color='#4485B7'
            brWidth={2} 
            brColor='#4485B7'
            onSelect={(value) => handleNominalChange(value)}
            value="30000"/>
            <Gap width={16}/>
            <TagButton 
            text="Rp 50.000" 
            bgColor='#FFF' 
            color='#4485B7'
            brWidth={2} 
            brColor='#4485B7'
            onSelect={(value) => handleNominalChange(value)}
            value="50000"/>
          </View>
          <Gap height={24}/>
          <Text style={styles.sectionTitle}>Metode Pembayaran</Text>
          <Gap height={6}/>
          <ButtonMetodePembayaran 
            metodePembayaran={metodePembayaran}
            id={id}
            title={title}
            picturePath={picturePath}
            deadline={deadline}
            types={types}
            logo={getLogo(metodePembayaran)}
          />
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
            onPress={handleCheckout}/>
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