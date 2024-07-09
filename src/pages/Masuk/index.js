import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { AuthHeader, Button, Gap, TextInput, TextSpan } from '../../components'
import { masukAction } from '../../redux/action/auth'
import { useForm } from '../../utils'

const Masuk = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: ''
  })

  const dispatch = useDispatch()

  const onSubmit = () => {
    dispatch(masukAction(form, navigation))
  }

  return (
    <View style={{backgroundColor:'#FFF', flex:1}}>
      <AuthHeader />
      <View  style={styles.titleContainer}>
        <Text style={styles.title}>MASUK</Text>
      </View>
      <View style={styles.container}>
        <TextInput 
          label={"Email atau nomor telepon"} 
          placeholder={"Masukkan email atau nomor telepon Anda"}
          value={form.email}
          onChangeText={(value)=> setForm('email', value)}
        />
        <TextInput 
          label={"Kata sandi"} 
          placeholder={"Masukkan kata sandi"}
          value={form.password}
          onChangeText={(value)=> setForm('password', value)}
          secureTextEntry
        />
        <Gap height={24}/>
        <Button 
          text="Masuk" 
          bgColor='#5CB8FF' 
          color='#FFF'
          brWidth={2} 
          brColor='#5CB8FF'
          onPress={onSubmit}
        />
        <Gap height={24}/>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 14, color: '#5C5C5C'}}>Belum punya akun? </Text>
          <TextSpan
          color={'#5CB8FF'}
          textSpan={"Daftar"} 
          fontWeight={'bold'}
          fontSize={14}
          onPress={() => navigation.navigate('Daftar')}/>
        </View>
        <Gap height={24}/>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{
            fontFamily: 'Roboto', 
            fontSize: 18, 
            fontWeight: 'bold', 
            color: '#212121'
            }}>
            Atau masuk dengan</Text>
        </View>
        <Gap height={24}/>
        <Button text={'Google'} bgColor='#fff' brWidth={2} brColor='#D4D4D4'/>
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