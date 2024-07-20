import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IlDonasiGadget } from '../../../assets'
import { Button, Gap } from '../../atoms'
import { setType } from '../../../redux/action'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const ContentDG = ({ onPress }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

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
          onPress={() => {
            onPress(dispatch(setType('perangkat')));
            navigation.navigate('Kategori');
          }}
        />
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