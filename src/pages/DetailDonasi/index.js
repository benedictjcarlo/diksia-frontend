import React from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { Button, DetailDaftarDonasi, DetailDonasiCerita, DetailDonasiKabar, DetailDonasiPenggalang, DetailDonasiTitle, DetailHeader, Gap } from '../../components'
import moment from '../../config/MomentConfig';

const DetailDonasi = ({navigation, route}) => {
  const {id, title, picturePath, donationAmount, donationNeed, deadline, types, description} = route.params
  const createdAt = route.params.created_at;
  const momentDate = moment.unix(createdAt);
  const formattedDate = momentDate.locale('id').format('dddd, D MMMM YYYY');

  return (
    <View style={{backgroundColor: '#FFF', flex: 1}}>
      <DetailHeader title={title} onBack={() => navigation.goBack()}/>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <Gap height={24}/>
        <View style={styles.imageContainer}>
          <Image source={{ uri: picturePath }} style={styles.image}/>
        </View>
        <Gap height={24}/>
        <View style={styles.contentContainer}>
          <DetailDonasiTitle 
          title={title}
          progress={donationAmount/donationNeed}
          donationAmount={donationAmount}
          donationNeed={donationNeed}
          deadline={deadline}
          types={types}
          />
          <Gap height={24}/>
          <DetailDonasiPenggalang />
          <Gap height={24}/>
          <DetailDonasiCerita description={route.params.description} createdAt={formattedDate}/>
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
            onPress={() => navigation.navigate('CeritaPenggalangan', {
              description,
              formattedDate,
              id,
              title,
              picturePath,
              deadline,
              types,
            })
          }/>
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
          onPress={() => {
            navigation.navigate('PembayaranDonasi', {
              id,
              title,
              picturePath,
              deadline,
              types,
            })
          }}/>
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