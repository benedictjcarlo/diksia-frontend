import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Gap } from '../../atoms'
import LinearGradient from 'react-native-linear-gradient'

const DetailDonasiCerita = ({description, createdAt}) => {
  return (
    <View>
      <Text style={styles.title}>Cerita Penggalangan Dana</Text>
      <Gap height={12}/>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View>
          <Text style={styles.textTanggal}>{createdAt}</Text>
          <Gap height={6}/>
          <Text style={styles.text} numberOfLines={8}>{description}</Text>
        </View>
        <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: '100%'
        }}>
          <LinearGradient
          style={{
            flex: 1,
            width: '100%',
            height: '100%'
          }}
            colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 1)']}
            start={{ x: 0, y: 0.4 }}
            end={{ x: 0, y: 1 }}
          />
        </View>
      </View>
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