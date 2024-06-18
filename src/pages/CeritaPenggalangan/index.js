import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { Button, DetailHeader, Gap } from '../../components'
import { DonationDummy1 } from '../../assets'

const CeritaPenggalangan = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#FFF', flex:1}}>
      <DetailHeader title={'Cerita Penggalangan Dana'} onBack={() => {}} />
      <ScrollView>
        <Gap height={24}/>
        <View style={styles.container}>
          <Text style={styles.tanggal}>19 Juni 2023</Text>
          <Text style={styles.text}>Pernahkah kita merasa terhambat dalam mencapai impian kita karena keterbatasan yang tak terelakkan? Nana, seorang siswa SMA yang berbakat, menghadapi tantangan ini setiap hari. Kekurangan akses teknologi menghalangi kemampuannya dalam belajar dan tumbuh. Namun, ada satu kesempatan bagi kita untuk membantu Nana: melalui penggalangan dana di aplikasi Diksia.</Text>
          <Gap height={8}/>
          <Text style={styles.text}>Mari bersama-sama memberikan dukungan kepada Nana. Dalam upaya ini, setiap kontribusi yang kita berikan melalui aplikasi Diksia akan menjadi langkah nyata menuju masa depan yang lebih baik bagi Nana. Dengan mendapatkan laptop yang ia butuhkan, Nana akan memiliki akses ke dunia pengetahuan yang tak terbatas, memperluas peluang belajarnya, dan mewujudkan potensinya.</Text>
          <Image source={DonationDummy1} style={styles.image}/>
          <Gap height={8}/>
          <Text style={styles.text}>Saat ini, kita memiliki kesempatan untuk berbuat baik dan membuat perbedaan dalam hidup seseorang. Ayo, mari kita bergabung dalam penggalangan dana di aplikasi Diksia untuk memberikan Nana alat yang ia butuhkan agar dapat mencapai puncak prestasinya. Bersama-sama, kita dapat membuka pintu menuju masa depan yang cerah bagi Nana dan membuktikan bahwa solidaritas dan kebaikan hati kita dapat mengubah kehidupan seseorang.</Text>
          <Gap height={24}/>
        </View>
      </ScrollView>
      <View style={styles.footerButton}>
      <Button 
        text="Donasi Sekarang" 
        bgColor='#4485B7' 
        color='#FFF'
        brColor='#4485B7' 
        brWidth={0}
        onPress={() => navigation.navigate('PembayaranDonasi')}/>
      </View>
    </View>
  )
}

export default CeritaPenggalangan

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
    },

    tanggal: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4485B7',
    },

    text: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#212121',
        textAlign: 'justify',
    },

    image: {
        width: '100%',
        height: 220,
    },

    footerButton: {
        borderTopWidth: 1,
        borderTopColor: '#D4D4D4',
        paddingVertical: 12,
        paddingHorizontal: 20,
    }
})