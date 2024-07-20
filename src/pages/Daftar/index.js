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
      <Gap height={48}/>
      <View  style={styles.titleContainer}>
        <Text style={styles.title}>DAFTAR</Text>
      </View>
      <View style={styles.container}>
        <TextInput 
          label={"Nama Lengkap"} 
          placeholder="Masukkan nama lengkap Anda" 
          value={form.name} 
          onChangeText={(value) => setForm('name', value)}
          autoCapitalize="words"
        />
        <Gap height={12}/>
        <TextInput 
          label={"Email"} 
          placeholder={"Masukkan email Anda"}
          value={form.email} 
          onChangeText={(value) => setForm('email', value)}
          autoCapitalize="none"
        />
        <Gap height={48}/>
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
    fontSize: 24,
    fontWeight: 'bold'
  },

  container: {
    marginHorizontal: 40,
  }
})