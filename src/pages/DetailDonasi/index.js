import { StyleSheet, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { Button, DetailDaftarDonasi, DetailDonasiCerita, DetailDonasiPenggalang, DetailDonasiTitle, DetailHeader, DetailDonasiKabar, Gap} from '../../components'
import { DonationDummy1 } from '../../assets'

const DetailDonasi = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#FFF', flex: 1}}>
      <DetailHeader title={'Laptop untuk Nana, Wujudkan Impian Nana'} onBack={() => navigation.goBack()}/>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <Gap height={24}/>
        <View style={styles.imageContainer}>
          <Image source={DonationDummy1} style={styles.image}/>
        </View>
        <Gap height={24}/>
        <View style={styles.contentContainer}>
          <DetailDonasiTitle />
          <Gap height={24}/>
          <DetailDonasiPenggalang />
          <Gap height={24}/>
          <DetailDonasiCerita />
          <Gap height={12}/>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Button
            text="Baca Selengkapnya" 
            bgColor='#FFF' 
            color='#4485B7'
            brWidth={2} 
            brColor='#4485B7'
            fontSize={12}
            fontWeight={'bold'}
            onPress={() => navigation.navigate('CeritaPenggalangan')}/>
          </View>
          <Gap height={24}/>
          <DetailDonasiKabar />
          <Gap height={24}/>
          <DetailDaftarDonasi />
          <Gap height={12}/>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Button
            text="Donasi Lainnya" 
            bgColor='#FFF' 
            color='#4485B7'
            brWidth={2} 
            brColor='#4485B7'
            fontSize={12}
            fontWeight={'bold'}
            onPress={() => navigation.navigate('DonasiLainnya')}/>
          </View>
          <Gap height={24}/>
        </View>
      </ScrollView>
      <View style={styles.footerButton}>
        <Button 
          text="Donasi Sekarang" 
          bgColor='#4485B7' 
          color='#FFF'
          brColor='#4485B7' 
          brWidth={0}
          onPress={() => navigation.navigate('PembayaranDonasi')}/>
      </View>
    </View>
  )
}

export default DetailDonasi

const styles = StyleSheet.create({
    imageContainer: {
        marginHorizontal: 20,
    }, 

    image: {
        width: '100%',
        height: 220,
        borderRadius: 10,
    },

    contentContainer: {
        marginHorizontal: 20,
        flex: 1,
    },

    footerButton: {
      borderTopWidth: 1,
      borderTopColor: '#D4D4D4',
      paddingVertical: 12,
      paddingHorizontal: 20,
  }
})