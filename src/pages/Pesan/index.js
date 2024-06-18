import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button, DefaultHeader, EmptyPesan, Gap } from '../../components'
import { useNavigation } from '@react-navigation/native'

const Pesan = () => {
  const [isEmpty] = useState(false)
  const navigation = useNavigation()
  return (
    <View style={{backgroundColor: '#FFF', flex:1}}>
      <DefaultHeader title={"Pesan"}/>
      {isEmpty ? <EmptyPesan /> : 
      <View style={styles.page}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Pesan Untukmu</Text>
          <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('')}>
            <Text style={styles.sideButton}>Selengkapnya</Text>
          </TouchableOpacity>
        </View>
      </View>
      }
    </View>
  )
}

export default Pesan

const styles = StyleSheet.create({
  page: {marginHorizontal: 20},
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