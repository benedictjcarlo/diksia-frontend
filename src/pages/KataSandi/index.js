import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AuthHeader, TextInput, Gap, Button } from '../../components'

const KataSandi = ({navigation}) => {
  return (
    <View style={{backgroundColor:'#FFF', flex:1}}>
      <AuthHeader />
      <Gap height={24}/>
      <View  style={styles.titleContainer}>
        <Text style={styles.title}>Kata Sandi</Text>
      </View>
      <Gap height={24}/>
      <View style={styles.container}>
        <TextInput label={"Kata Sandi Baru"} placeholder={"Masukkan kata sandi baru Anda"}/>
        <TextInput label={"Konfirmasi Kata Sandi"} placeholder={"Konfirmasi kata sandi Anda"}/>
        <Gap height={48}/>
        <Button text="Simpan" bgColor='#5CB8FF' color='#FFF'onPress={() => navigation.replace('MainApp')}/>  
      </View>
    </View>
  )
}

export default KataSandi

const styles = StyleSheet.create({
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 24,
      },
    
      title: {
        fontFamily: 'Roboto',
        color: '#212121',
        fontSize: 18,
        fontWeight: 'bold'
      },
    
      container: {
        marginHorizontal: 40,
      }
})