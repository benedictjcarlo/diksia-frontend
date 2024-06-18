import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IcRightArrow } from '../../../assets'

const AkunMenu = ({onPress, title,}) => {
    return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={styles.containerEdit}>
            <Text style={styles.title}>{title}</Text>
            <IcRightArrow width={12} height={18}/>
        </View>
    </TouchableOpacity>
    )
}

export default AkunMenu

const styles = StyleSheet.create({
    containerEdit: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        paddingVertical: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#D4D4D4'
    },

    title: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 'normal',
        color: '#212121',
    }
})