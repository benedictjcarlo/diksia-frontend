import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap } from '../../atoms'
import { IlPesan } from '../../../assets'

const EmptyPesan = () => {
  return (
    <View>
        <Gap height={100}/>
        <View style={styles.container}>
            <IlPesan width={260} height={218}/>
            <Gap height={24}/>
            <Text style={styles.title}>Belum ada pesan terkini untukmu</Text>
            <Gap height={12}/>
            <Text style={styles.text}>Ayo berikan dorongan dan harapan bagi mereka yang</Text>
            <Text style={styles.text}>tengah berjuang! Dengan donasi pertamamu, kamu bisa</Text>
            <Text style={styles.text}>jadi pahlawan bagi mereka yang membutuhkan.</Text>
            <Gap height={24}/>
            <Button 
                text="Donasi Sekarang" 
                bgColor='#FFF' 
                color='#5CB8FF'
                brWidth={2}
                brColor='#5CB8FF'
                fontSize={12}
                fontWeight={'bold'}
                onPress={() => navigation.navigate('')}/>
        </View>
    </View>
  )
}

export default EmptyPesan

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Roboto'
      },
    
      title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#212121'
      },
      
      text: {
        fontWeight: 'normal',
        color: '#5C5C5C',
        textAlign: 'center'
      }
})