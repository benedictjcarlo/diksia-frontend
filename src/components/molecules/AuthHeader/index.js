import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Logo } from '../../../assets'

const AuthHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View >
        <Logo height={36} width={80}/>
      </View>
    </View>
  )
}

export default AuthHeader

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#5CB8FF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 18,
  },
})