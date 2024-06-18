import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import Gap from '../Gap'
import { IcSearch } from '../../../assets'

const SearchBar = () => {
  return (
    <View style={styles.search}>
        <IcSearch width={16} height={20}/>
        <Gap width={12}/>
        <TextInput styles={styles.input} placeholder='Cari yang mau kamu bantuin' />
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
})