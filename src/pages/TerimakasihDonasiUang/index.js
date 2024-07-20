import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IlTerimakasih } from '../../assets'
import { Button, Gap } from '../../components'

const TerimakasihDonasiUang = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#FFF', flex: 1}}>
      <View style={styles.container}>
        <IlTerimakasih style={styles.ilustrasi}/>
        <Gap height={48}/>
        <Text style={styles.title}>Terima kasih banyak atas donasi yang telah Anda berikan!</Text>
        <Gap height={24}/>
        <Text style={styles.text}>Terima kasih telah berbagi kebaikanmu melalui donasi ini, setiap kontribusimu memiliki dampak yang luar biasa dalam memberikan dampak positif!</Text>
      </View>
      <View style={styles.footerButton}>
        <Button
          text="Kembali Ke Halaman Utama" 
          bgColor='#4485B7' 
          color='#FFF'
          brColor='#4485B7' 
          brWidth={0}
          onPress={() => navigation.reset({index: 0, routes: [{name: 'MainApp'}]})}/>
      </View>
    </View>
  )
}

export default TerimakasihDonasiUang

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