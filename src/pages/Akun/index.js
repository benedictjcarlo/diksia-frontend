import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IcAkunDefault } from '../../assets'
import { AkunKeluar, AkunMenu, DefaultHeader, Gap } from '../../components'
import { getData } from '../../utils'

const Akun = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const [userProfile, setUserProfile] = useState({})

  useFocusEffect(
    React.useCallback(() => {
      const fetchUserProfile = async () => {
        const userProfileData = await getData('userProfile');
        setUserProfile(userProfileData);
      };
      fetchUserProfile();
    }, [])
  );

  useEffect(() => {
    if (route.params?.userProfile) {
      setUserProfile(route.params.userProfile);
    }
  }, [route]);

  const keluarAkun = () => {
    AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
      navigation.reset({index: 0, routes: [{name: 'Masuk'}]})
    })
  }
  return (
    <View style={{backgroundColor: '#FFF', flex:1}}>
      <DefaultHeader title={"Akun"}/>
      <Gap height={24}/>
      <View style={styles.containerTitle}>
        <IcAkunDefault width={60} height={60}/>
        <Gap width={24}/>
        <View>
          <Text style={styles.title}>{userProfile.name}</Text>
          <Gap height={12} />
          <Text style={styles.text}>{userProfile.email}</Text>
        </View>
      </View>
      <AkunMenu title={'Edit Akun'} onPress={() => navigation.navigate('EditAkun')} />
      <AkunMenu title={'Ubah Kata Sandi'} onPress={() => navigation.navigate('UbahKataSandi')}/>
      <AkunMenu title={'Bantuan'} onPress={() => navigation.navigate('Bantuan')}/>
      <AkunMenu title={'Syarat dan Ketentuan'} onPress={() => navigation.navigate('SyaratKetentuan')}/>
      <AkunMenu title={'Tentang Diksia'} onPress={() => navigation.navigate('TentangDiksia')}/>
      <AkunKeluar title={'Keluar'} onPress={keluarAkun}/>
    </View>
  )
}

export default Akun

const styles = StyleSheet.create({
  containerTitle: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#D4D4D4',
    paddingBottom: 24,
  },

  title: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121'
  },

  text: {
    fontFamily: 'Roboto,',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#212121'
  },
})