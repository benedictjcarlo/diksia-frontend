import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Gap } from '../../atoms'
import LinearGradient from 'react-native-linear-gradient'

const DetailDonasiCerita = () => {
  return (
    <View>
      <Text style={styles.title}>Cerita Penggalangan Dana</Text>
      <Gap height={12}/>
      <LinearGradient
      colors={['rgba(255,255,255,0.1)', 'rgba(150,205,248,0.2)', 'rgba(150,205,248,0.8)']}
      start={{ x: 0, y: 0.4 }}
      end={{ x: 0, y: 1 }}
      >
        <Text style={styles.textTanggal}>19 Juni 2023</Text>
        <Gap height={6}/>
        <Text style={styles.text} numberOfLines={8}>Pernahkah kita merasa terhambat dalam mencapai impian kita karena keterbatasan yang tak terelakkan? Nana, seorang siswa SMA yang berbakat, menghadapi tantangan ini setiap hari. Kekurangan akses teknologi menghalangi kemampuannya dalam belajar dan tumbuh. Namun, ada satu kesempatan bagi kita untuk membantu Nana melalui penggalangan dana di aplikasi Diksia.
        Mari bersama-sama memberikan dukungan kepada Nana. Dalam upaya ini, setiap kontribusi yang kita berikan melalui aplikasi Diksia akan menjadi langkah nyata menuju masa depan yang lebih baik bagi
        </Text>
      </LinearGradient>
    </View>
  )
}

export default DetailDonasiCerita

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121'
  },

  textTanggal: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4485B7'
  },

  text: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#212121'
  }
})