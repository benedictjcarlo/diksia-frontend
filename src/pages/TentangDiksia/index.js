import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IlTidakTersedia } from '../../assets'
import { Button, DetailHeader, Gap } from '../../components'

const TentangDiksia = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#FFF', flex: 1}}>
      <DetailHeader title={'Tentang Diksia'}/>
      <View style={styles.container}>
        <IlTidakTersedia style={styles.ilustrasi}/>
        <Gap height={48}/>
        <Text style={styles.title}>Maaf, Halaman Tidak Tersedia!</Text>
        <Gap height={24}/>
        <Text style={styles.text}>Maaf halaman ini tidak tersedia karena beberapa hal, silahkan kembali ke halaman utama dengan menekan tombol di bawah ini.</Text>
        <View style={styles.footerButton}>
          <Button
            text="Halaman Utama" 
            bgColor='#FFF' 
            color='#4485B7'
            brColor='#4485B7' 
            brWidth={2}
            onPress={() => navigation.navigate('Donasi')}/>
        </View>
      </View>
    </View>
  )
}

export default TentangDiksia

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginHorizontal: 20,
        flex: 1,
    },

    ilustrasi: {
        width: 150,
        height: 190
    },

    title: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#212121',
        textAlign: 'center'
    },

    text: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'normal',
        color: '#212121',
        textAlign: 'center'
    },

    footerButton: {
        borderTopWidth: 1,
        borderTopColor: '#D4D4D4',
        paddingVertical: 12,
        paddingHorizontal: 20,
    }
})