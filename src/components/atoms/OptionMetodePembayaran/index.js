import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Gap from '../Gap'

const OptionMetodePembayaran = ({label, image, width, height, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image(width, height)}/>
            </View>
            <Gap width={24}/>
            <Text style={styles.label}>{label}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default OptionMetodePembayaran

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 12,
        borderWidth: 2,
        borderColor: '#D4D4D4',
        borderRadius: 6
    },

    image: (width, height)=> ({
        width: width,
        height: height,
    }),

    label: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'normal',
        color: '#212121'
    }
})