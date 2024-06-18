import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { IcClose } from '../../../assets'
import { useNavigation } from '@react-navigation/native'

const KategoriHeader = ({title}) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
        <View style={styles.back}>
          <IcClose height={24} width={18}/>
        </View>
      </TouchableOpacity>
      <Text style={styles.title} numberOfLines={1}>{title}</Text>
    </View>
  )
}

export default KategoriHeader

const styles = StyleSheet.create({
  container: {
    paddingRight: 40,
    backgroundColor: '#5CB8FF',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center'
  },

  title: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    paddingRight: 20
  },

  back: {
    paddingLeft: 20,
    paddingRight: 18,
    paddingVertical: 18,
  }
})