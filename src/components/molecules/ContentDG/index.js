import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Button, Gap } from '../../atoms'
import { IlDonasiGadget } from '../../../assets'
import { useNavigation } from '@react-navigation/native'

const ContentDG = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>YUK!</Text>
        <Text style={styles.text}>Mari bantu mereka!</Text>
        <Text style={styles.text}>Gadget lama, gadget berarti.</Text>
        <Gap height={24}/>
        <Button 
        width={'60%'}
        text="Donasi Gadget" 
        bgColor='#4485B7' 
        color='#FFF'
        brWidth={2}
        brColor='#FFF'
        fontSize={12}
        fontWeight={'bold'}
        onPress={() => navigation.navigate('DonasiGadget')}/>
      </View>
      <View >
        <IlDonasiGadget height={160} width={140}/>
      </View>
    </View>
  )
}

export default ContentDG

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    backgroundColor: '#4485B7',
    marginHorizontal: 20,
    marginTop: 24,
    padding: 20,
    borderRadius: 20,
},

  title: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#FFF'
  },
  
  text: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFF'
  }
})