import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import Gap from '../Gap'
import { IcSearch } from '../../../assets'

const SearchBar = () => {
  return (
    <View style={styles.search}>
        <IcSearch width={16} height={20}/>
        <Gap width={8}/>
        <TextInput 
        style={{flex: 1, color: '#212121', paddingRight: 20}} 
        placeholder='Cari yang mau kamu bantuin'
        placeholderTextColor='#D4D4D4'
        editable={false}
        />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingLeft: 20,
    borderRadius: 40
  },

  input: {
    flex: 1,
    color: '#212121',
  }
})