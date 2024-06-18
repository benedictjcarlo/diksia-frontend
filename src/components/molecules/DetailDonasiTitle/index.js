import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress'
import { Gap, TextSpan, TextSpanCard } from '../../atoms'

const DetailDonasiTitle = () => {
  return (
    <View>
        <Text style={styles.title}>Laptop untuk Nana, Wujudkan Impian Nana</Text>
        <Gap height={6}/>
        <Progress.Bar 
        progress={4000000/5300000}
        color='#FF893E' unfilledColor='#D4D4D4'
        borderColor='#D4D4D4' 
        borderWidth={0.1}
        width={null}
        />
        <Gap height={12}/>
        <Text style={styles.text}>Jumlah Dana Terkumpul</Text>
        <Gap height={4}/>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.jumlahDana}>Rp 2.133.000</Text>
            <TextSpanCard 
            color={'#212121'}
            textSpan={'30'} 
            span={' hari lagi'} 
            fontWeight={'bold'}
            fontSize={12}
            />
        </View>
        <Gap height={4}/>
        <TextSpan
            color={'#212121'}
            textSpan={'dari'} 
            span={' Rp 6.000.000'} 
            fontWeight={'bold'}
            fontSize={12}/>
      </View>
  )
}

export default DetailDonasiTitle

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#212121'
    },

    text: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: 'normal',
        color: '#212121'
    },

    jumlahDana: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#5CB8FF'
    }

})