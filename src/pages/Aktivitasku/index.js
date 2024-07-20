import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { DefaultHeader, EmptyAktivitas, ListAktivitas } from '../../components'
import { getAktivitas } from '../../redux/action'
import moment from '../../config/MomentConfig';

const Aktivitasku = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch();
  const {aktivitas} = useSelector((state) => state.donasi)

  useEffect(() => {
  dispatch(getAktivitas())
  }, [])
  

  return (
    <ScrollView style={{backgroundColor: '#FFF', flex: 1}}>
      <DefaultHeader title={"Aktivitasku"} />
      {aktivitas.length < 1 ? <EmptyAktivitas /> : 
      <View style={styles.page}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Riwayat Donasi</Text>
          <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('')}>
            <Text style={styles.sideButton}>Selengkapnya</Text>
          </TouchableOpacity>
        </View>
        {aktivitas.map((itemDonasi) => {
          const createdAt = itemDonasi.created_at
          const momentDate = moment.unix(createdAt);
          const formattedDate = momentDate.locale('id').format('D MMMM YYYY');
          return (
            <ListAktivitas
              key={itemDonasi.id}
              title={itemDonasi.donation.title}
              image={{ uri: itemDonasi.donation.picturePath }}
              status={itemDonasi.status}
              createdAt={formattedDate}
              amount={itemDonasi.amount}
            />
          )
        })}
      </View>
      }
    </ScrollView>
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