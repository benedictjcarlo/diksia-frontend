import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { IcRightArrow } from '../../../assets'
import { useNavigation, useRoute } from '@react-navigation/native'

const ButtonMetodePembayaran = ({metodePembayaran, logo}) => {
    const navigation = useNavigation()
    const route = useRoute()
    const { id, title, picturePath, deadline, types } = route.params
    return (
        <TouchableOpacity 
            activeOpacity={0.7} 
            onPress={() => navigation.navigate('MetodePembayaran', {
                id,
                title,
                picturePath,
                deadline,
                types,
            })}
        >
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.logoContainer}>
                        {logo && <Image source={logo} style={styles.logo} />}
                    </View>
                    <Text style={styles.label}>
                        {metodePembayaran ? `${metodePembayaran}` : 'Pilih Metode Pembayaran'}
                    </Text>
                </View>
                <IcRightArrow style={styles.rightArrow} />
            </View>
        </TouchableOpacity>
    )
}

export default ButtonMetodePembayaran

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#E0EEFA',
        padding: 20,
        borderRadius: 6,
        height: 60,
    },

    logoContainer: {
        width: 42,
        height: 12,
        marginRight: 16,
    },

    logo: {
        width: 42,
        height: 14,
    },

    label: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'normal',
        color: '#5C5C5C'
    },

    rightArrow: {
        width: 12,
        height: 18,
    }
})