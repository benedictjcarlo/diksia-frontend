import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardDaftarDonasi, Gap, TextSpan } from '../../atoms'

const DetailDaftarDonasi = () => {
  return (
    <View>
        <View style={{flexDirection: 'row'}}>
            <Text style={styles.title}>Donasi </Text>
            <TextSpan
            color={'#5CB8FF'}
            textSpan={"(25)"} 
            fontWeight={'bold'}
            fontSize={16}/>
        </View>
        <Gap height={12}/>
        <CardDaftarDonasi/>
        <Gap height={12}/>
        <CardDaftarDonasi/>
        <Gap height={12}/>
        <CardDaftarDonasi/>
    </View>
  )
}

export default DetailDaftarDonasi

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#212121'
    },
})