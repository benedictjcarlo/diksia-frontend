import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { DefaultHeader, DonationCardList, EmptyAktivitas, Gap } from '../../components'
import { DonationDummy1, DonationDummy2, DonationDummy3 } from '../../assets'
import { useNavigation } from '@react-navigation/native'

const Aktivitasku = () => {
  const [isEmpty] = useState(false)
  const navigation = useNavigation()
  return (
    <View style={{backgroundColor: '#FFF', flex: 1}}>
      <DefaultHeader title={"Aktivitasku"} />
      {isEmpty ? <EmptyAktivitas /> : 
      <View style={styles.page}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Riwayat Donasi</Text>
          <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('')}>
            <Text style={styles.sideButton}>Selengkapnya</Text>
          </TouchableOpacity>
        </View>
        <DonationCardList image={DonationDummy3}/>
        <Gap height={12}/>
        <DonationCardList image={DonationDummy2}/>
        <Gap height={12}/>
        <DonationCardList image={DonationDummy1}/>
      </View>
      }
    </View>
  )
}

export default Aktivitasku

const styles = StyleSheet.create({
  page:{marginHorizontal: 20},
  titleContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 24,
  },

  title: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121'
  },

  sideButton: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5CB8FF'
  }
})