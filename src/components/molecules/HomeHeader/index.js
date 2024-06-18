import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Logo } from '../../../assets'
import { Gap, SearchBar } from '../../atoms'

const HomeHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.container}>
        <Logo height={40} width={80}/>
        <Gap width={24}/>
        <View style={styles.search}>
            <SearchBar/>
        </View>
      </View>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#5CB8FF',
    paddingVertical: 12,
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },

  search: {
    flex: 1
  }
})