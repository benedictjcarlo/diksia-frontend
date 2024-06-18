import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { DonationDummy1, IcVerified } from '../../../assets'
import * as Progress from 'react-native-progress'
import { Gap, TextSpanCard } from '../../atoms'

const DonationCard = ({image, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image}/>
        <View style={styles.cardContainer}>
          <Text style={styles.title} numberOfLines={1}>Laptop untuk Nana, wujudkan impian Nana</Text>
          <Gap height={6}/>
          <Progress.Bar 
          progress={4000000/5300000}
          color='#FF893E' unfilledColor='#D4D4D4' 
          borderColor='#D4D4D4' 
          borderWidth={0.1}
          width={null}
          />
          <Gap height={12}/>
          <View style={styles.containerInitiator}>
            <Text style={styles.initiator}>Jane Doe</Text>
            <Gap width={6}/>
            <IcVerified />
          </View>
          <Gap height={6}/>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextSpanCard 
            color={'#5CB8FF'}
            textSpan={'Rp 2.133.000'} 
            span={' terkumpul'} 
            fontWeight={'bold'}
            fontSize={10}/>

            <TextSpanCard 
            color={'#212121'}
            textSpan={'60'} 
            span={' hari lagi'} 
            fontWeight={'bold'}
            fontSize={10}/>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
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
    fontSize: 10,
    fontWeight: 'bold',
   },

   containerInitiator: {
    flexDirection: 'row',
    alignItems: 'center',
   },

   initiator: {
    fontSize: 10
   }
})