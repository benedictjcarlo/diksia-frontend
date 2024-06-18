import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardDaftarDonasi, DetailHeader, Gap } from '../../components'

const DonasiLainnya = () => {
  return (
    <ScrollView vertical showsVerticalScrollIndicator={false} style={{backgroundColor: '#FFF', flex:1}}>
      <DetailHeader title={'Donasi (25)'}/>
      <View style={styles.container}>
        <Gap height={24}/>
        <CardDaftarDonasi />
        <Gap height={12}/>
        <CardDaftarDonasi />
        <Gap height={12}/>
        <CardDaftarDonasi />
        <Gap height={12}/>
        <CardDaftarDonasi />
        <Gap height={12}/>
        <CardDaftarDonasi />
        <Gap height={12}/>
        <CardDaftarDonasi />
        <Gap height={12}/>
        <CardDaftarDonasi />
        <Gap height={12}/>
        <CardDaftarDonasi />
        <Gap height={12}/>
        <CardDaftarDonasi />
        <Gap height={12}/>
        <CardDaftarDonasi />
        <Gap height={12}/>
        <CardDaftarDonasi />
        <Gap height={12}/>
        <CardDaftarDonasi />
        <Gap height={24}/>
      </View>
    </ScrollView>
  )
}

export default DonasiLainnya

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    }
})