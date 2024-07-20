import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { showMessage, hideMessage } from "react-native-flash-message"
import { useDispatch, useSelector } from 'react-redux'
import { AuthHeader, Button, Gap, TextInput } from '../../components'
import { daftarAction, setLoading } from '../../redux/action'
import { useForm } from '../../utils'

const KataSandi = ({navigation}) => {
  const [form, setForm] = useForm({
    password: '',
    password_confirmation: '',
  })

  const dispatch = useDispatch()
  const registerReducer = useSelector((state) => state.auth)

  const onSubmit = () => {
    const data = {
      ...form,
      ...registerReducer
    }
    dispatch(setLoading(true))
    dispatch(daftarAction(data, navigation))
  }

  return (
    <View style={{backgroundColor:'#FFF', flex:1}}>
      <AuthHeader />
      <Gap height={24}/>
      <View  style={styles.titleContainer}>
        <Text style={styles.title}>Kata Sandi</Text>
      </View>
      <Gap height={24}/>
      <View style={styles.container}>
        <TextInput 
          label={"Kata Sandi Baru"} 
          placeholder={"Masukkan kata sandi baru Anda"}
          value={form.password} 
          onChangeText={(value) => setForm('password', value)}
          secureTextEntry
          autoCapitalize="none"
          />
        <TextInput 
          label={"Konfirmasi Kata Sandi"} 
          placeholder={"Konfirmasi kata sandi Anda"}
          value={form.password_confirmation} 
          onChangeText={(value) => setForm('password_confirmation', value)}
          secureTextEntry
          autoCapitalize="none"
        />
        <Gap height={48}/>
        <Button 
        text="Simpan" 
        bgColor='#5CB8FF' 
        color='#FFF'
        onPress={onSubmit}/>  
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