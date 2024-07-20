import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as Progress from 'react-native-progress'
import { IcVerified } from '../../../assets'
import { Gap, TextSpanCard } from '../../atoms'

const DonationCard = ({image, title, donationAmount, donationNeed, deadline, types, onPress}) => {
  const formatNominal = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };
  if( types === 'UANG' ){
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={styles.container}>
          <Image source={image} style={styles.image}/>
          <View style={styles.cardContainer}>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
            <Gap height={6}/>
            <Progress.Bar 
            progress={donationAmount/donationNeed}
            color='#FF893E' unfilledColor='#D4D4D4' 
            borderColor='#D4D4D4' 
            borderWidth={0.1}
            width={null}
            />
            <Gap height={12}/>
            <View style={styles.containerFundraiser}>
              <Text style={styles.fundraiser}>Jane Doe</Text>
              <Gap width={6}/>
              <IcVerified />
            </View>
            <Gap height={6}/>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TextSpanCard 
              color={'#5CB8FF'}
              colorS={'#212121'}
              textSpan={`Rp ${formatNominal(donationAmount)}`} 
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
      </TouchableOpacity>
    )
  } else if( types === 'PERANGKAT' ){
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={styles.container}>
          <Image source={image} style={styles.image}/>
          <View style={styles.cardContainer}>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
            <Gap height={6}/>
            <Progress.Bar 
            progress={donationAmount/donationNeed}
            color='#FF893E' unfilledColor='#D4D4D4' 
            borderColor='#D4D4D4' 
            borderWidth={0.1}
            width={null}
            />
            <Gap height={12}/>
            <View style={styles.containerFundraiser}>
              <Text style={styles.fundraiser}>Jane Doe</Text>
              <Gap width={6}/>
              <IcVerified />
            </View>
            <Gap height={6}/>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TextSpanCard 
              color={'#5CB8FF'}
              colorS={'#212121'}
              textSpan={`${formatNominal(donationAmount)} Perangkat`} 
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
      </TouchableOpacity>
    )
  }
}

export default DonationCard

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: '#FFF',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#D4D4D4',
    overflow: 'hidden',
    marginRight: 12,
  },

  image: {
    width: 200,
    height: 80,
    resizeMode: 'cover'
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

   containerFundraiser: {
    flexDirection: 'row',
    alignItems: 'center',
   },

   fundraiser: {
    fontSize: 10,
    color: '#212121'
   }
})