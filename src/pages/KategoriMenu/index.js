import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { KategoriHeader } from '../../components'

const KategoriMenu = () => {
    return (
    <View style={styles.page}>
        <KategoriHeader title={'Kategori'}/>
        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
            <View style={styles.opsi1}>
                <Text style={styles.label}>Semua Kategori</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
            <View style={styles.opsi1}>
                <Text style={styles.label}>Donasi Uang</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
            <View style={styles.opsi1}>
                <Text style={styles.label}>Donasi Gadget</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default KategoriMenu

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFF',
        flex: 1
    },

    label: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 'normal',
        color: '#212121'
    },

    opsi1: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#D4D4D4'
    },

    opsi2: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#D4D4D4'
    },

    opsi3: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#D4D4D4'
    }
})