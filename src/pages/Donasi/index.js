import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Button, ContentDG, DonationCard, DonationCardList, Gap, HomeHeader } from '../../components'
import { getDonationData } from '../../redux/action'

const Donasi = ({navigation}) => {
  const dispatch = useDispatch();
  
  const {donation} = useSelector(state => state.home)

  useEffect(() => {
    dispatch(getDonationData())
  })


  return (
    <ScrollView vertical style={{backgroundColor:'white'}} showsVerticalScrollIndicator={false}>
      <HomeHeader />
      <ContentDG />
      <Gap height={24}/>
      <Text style={styles.sectionTitle}>Penggalangan Dana Tercapai</Text>
      <Gap height={12}/>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Gap width={20}/>
        {donation.slice(0, 5).map(itemDonation => {
          return (
            <DonationCard
              key={itemDonation.id}
              title={itemDonation.title}
              image={{ uri: itemDonation.picturePath}}
              donationAmount={itemDonation.donationAmount}
              donationNeed={itemDonation.donationNeed}
              deadline={itemDonation.deadline}
            />
          )
        })}
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
        {donation.slice(0, 5).map(itemDonation => {
          return (
          <DonationCardList
            key={itemDonation.id}
            title={itemDonation.title}
            image={{ uri: itemDonation.picturePath}}
            donationAmount={itemDonation.donationAmount}
            donationNeed={itemDonation.donationNeed}
            deadline={itemDonation.deadline}
          />
          )
        })}
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