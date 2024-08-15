import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TagStatus = ({status}) => {
  return (
    <View style={styles.container(status)}>
        <Text style={styles.title(status)}>{status}</Text>
    </View>
  )
}

export default TagStatus

const styles = StyleSheet.create({
    container: (status) => ({
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Roboto',
        backgroundColor: '#FFF',
        borderWidth: 2,
        borderColor: status === 'Gagal' ? '#FF3030' : '#4485B7',
        borderRadius:20,
        padding: 4,
        width: 80,
    }),

    title: (status) => ({
        fontWeight: 'bold',
        color: status === 'Gagal' ? '#FF3030' : '#4485B7',
        fontSize: 10,
    }),
})