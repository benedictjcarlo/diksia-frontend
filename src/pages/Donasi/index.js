import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, ContentDG, DonationCard, DonationCardList, Gap, HomeHeader } from '../../components'
import { DonationDummy1, DonationDummy2, DonationDummy3,  } from '../../assets'

const Donasi = ({navigation}) => {
  return (
    <ScrollView vertical style={{backgroundColor:'white'}} showsVerticalScrollIndicator={false}>
      <HomeHeader />
      <ContentDG />
      <Gap height={24}/>
      <Text style={styles.sectionTitle}>Penggalangan Dana Tercapai</Text>
      <Gap height={12}/>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Gap width={20}/>
          <DonationCard image={DonationDummy1} onPress={() => navigation.navigate('DetailDonasi')}/>
          <DonationCard image={DonationDummy2} onPress={() => navigation.navigate('DetailDonasi')}/>
          <DonationCard image={DonationDummy3} onPress={() => navigation.navigate('DetailDonasi')}/>
          <DonationCard image={DonationDummy1} onPress={() => navigation.navigate('DetailDonasi')}/>
      </ScrollView>
      <Gap height={24}/>
      <Text style={styles.sectionTitle}>Bantu Wujudkan Impian Mereka</Text>
      <Gap height={12}/>
      <Text style={styles.sectionText}>Berdonasi dengan mudah dalam bentuk uang atau gadget</Text>
      <Gap height={12}/>
      <View style={{flexDirection: 'row', marginHorizontal: 20}}>
        <Button 
        text="Donasi Uang" 
        bgColor='#5CB8FF' 
        color='#FFF'
        brWidth={2}
        brColor='#FFF'
        fontSize={12}
        fontWeight={'bold'}
        onPress={() => navigation.navigate('Kategori')}/>

        <Gap width={12}/>

        <Button 
        text="Donasi Gadget" 
        bgColor='#FF893E' 
        color='#FFF'
        brWidth={2}
        brColor='#FFF'
        fontSize={12}
        fontWeight={'bold'}
        onPress={() => navigation.navigate('DonasiGadget')}/>
      </View>
      <Gap height={24}/>
      <Text style={styles.sectionTitle}>Pilihan Diksia untuk Kamu</Text>
      <Gap height={12}/>

      <View style={{marginHorizontal: 20}}>
        <DonationCardList image={DonationDummy1} onPress={() => navigation.navigate('DetailDonasi')}/>
        <Gap height={12}/>
        <DonationCardList image={DonationDummy2} onPress={() => navigation.navigate('DetailDonasi')}/>
        <Gap height={12}/>
        <DonationCardList image={DonationDummy3} onPress={() => navigation.navigate('DetailDonasi')}/>
      </View>
      <Gap height={24}/>
    </ScrollView>
  )
}

export default Donasi

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
  },

  sectionTitle: {
    marginHorizontal: 20,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121',
  },
  
  sectionText: {
    marginHorizontal: 20,
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#212121'
  }
})