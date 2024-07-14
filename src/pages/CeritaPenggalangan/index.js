import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { Button, DetailHeader, Gap } from '../../components'
import { DonationDummy1 } from '../../assets'

const CeritaPenggalangan = ({navigation, route}) => {
  const { picturePath, description, formattedDate } = route.params;
  return (
    <View style={{backgroundColor: '#FFF', flex:1}}>
      <DetailHeader title={'Cerita Penggalangan Dana'} onBack={() => {}} />
      <ScrollView>
        <Gap height={24}/>
        <View style={styles.container}>
          <Text style={styles.tanggal}>{formattedDate}</Text>
          <Gap height={12}/>
          <Image source={{ uri: picturePath }} style={styles.image} />
          <Gap height={24}/>
          <Text style={styles.text}>{description}</Text>
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

export default CeritaPenggalangan

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
    },

    tanggal: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4485B7',
    },

    text: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#212121',
        textAlign: 'justify',
    },

    image: {
        width: '100%',
        height: 220,
    },

    footerButton: {
        borderTopWidth: 1,
        borderTopColor: '#D4D4D4',
        paddingVertical: 12,
        paddingHorizontal: 20,
    }
})