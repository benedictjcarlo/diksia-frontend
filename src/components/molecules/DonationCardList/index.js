import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { IcVerified } from '../../../assets'
import * as Progress from 'react-native-progress'
import { Gap, TextSpanCard } from '../../atoms'

const DonationCardList = ({image, title, donationAmount, donationNeed, deadline, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.container}>
          <View style={{flexDirection: 'row'}}>
              <Image source={image} style={styles.image}/>
              <View style={styles.cardContainer}>
                  <Text style={styles.title}>{title}</Text>
                  <Gap height={6}/>
                  <Progress.Bar 
                  progress={donationAmount/donationNeed}
                  color='#FF893E' unfilledColor='#D4D4D4'
                  borderColor='#D4D4D4' 
                  borderWidth={0.1}
                  width={null}
                  />
                  <Gap height={10}/>
                  <View style={styles.containerInitiator}>
                  <Text style={styles.initiator}>Jane Doe</Text>
                  <Gap width={6}/>
                  <IcVerified />
                  </View>
                  <Gap height={6}/>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <TextSpanCard 
                  color={'#5CB8FF'}
                  colorS={'#212121'}
                  textSpan={`Rp ${donationAmount.toLocaleString()}`}
                  span={' terkumpul'} 
                  fontWeight={'bold'}
                  fontSize={10}/>

                  <TextSpanCard 
                  color={'#212121'}
                  colorS={'#212121'}
                  textSpan={deadline} 
                  span={' hari lagi'} 
                  fontWeight={'bold'}
                  fontSize={10}/>
                  </View>
              </View>
          </View>
      </View>
      <Gap height={12}/>
    </TouchableOpacity>
  )
}

export default DonationCardList

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#D4D4D4',
    overflow: 'hidden',
    marginRight: 12,
  },

  image: {
    width: 120,
    height: 110,
    resizeMode: 'cover',
  },

  cardContainer: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  
   title: {
    color: '#212121',
    fontSize: 10,
    fontWeight: 'bold',
   },

   containerInitiator: {
    flexDirection: 'row',
    alignItems: 'center',
   },

   initiator: {
    color: '#212121',
    fontSize: 10
   }
})