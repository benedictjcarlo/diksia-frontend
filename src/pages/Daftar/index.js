import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { AuthHeader, Button, Gap, TextInput, TextSpan } from '../../components'
import { useForm } from '../../utils'

const Masuk = ({navigation}) => {
  const [form, setForm] = useForm({
    name: '',
    email: '',
  })

  const dispatch = useDispatch()

  const onSubmit = () => {
    console.log('form: ', form)
    dispatch({type: 'SET_REGISTER', value: form})
    navigation.navigate('KataSandi')
  }
  return (
    <View style={{backgroundColor:'#FFF', flex:1}}>
      <AuthHeader />
      <View  style={styles.titleContainer}>
        <Text style={styles.title}>DAFTAR</Text>
      </View>
      <View style={styles.container}>
        <TextInput 
          label={"Nama Lengkap"} 
          placeholder="Masukkan nama lengkap Anda" 
          value={form.name} 
          onChangeText={(value) => setForm('name', value)}/>
        <TextInput 
          label={"Nomor Ponsel atau Email"} 
          placeholder={"Masukkan nomor ponsel atau email Anda"}
          value={form.email} 
          onChangeText={(value) => setForm('email', value)}
        />
        <Gap height={24}/>
        <Button 
          text="Daftar" 
          bgColor='#5CB8FF' 
          color='#FFF' 
          brWidth={2} 
          brColor='#5CB8FF'
          onPress={onSubmit}
        />
        <Gap height={24}/>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 14, color: '#5C5C5C'}}>Sudah punya akun? </Text>
          <TextSpan
          color={'#5CB8FF'}
          textSpan={"Masuk"} 
          fontWeight={'bold'}
          fontSize={14}
          onPress={() => navigation.navigate('Masuk')}/>
        </View>
        <Gap height={24}/>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{
            fontFamily: 'Roboto', 
            fontSize: 18, 
            fontWeight: 'bold', 
            color: '#212121'
            }}>
            Atau daftar dengan</Text>
        </View>
        <Gap height={24}/>
        <Button text={'Google'} bgColor='#FFF' brWidth={2} brColor='#D4D4D4'/>
        <Gap height={24}/>
        <Button text={'Facebook'} bgColor='#3B589A' brWidth={2} brColor='#3B589A' color='#FFF'/>
      </View>
    </View>
  )
}

export default Masuk

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