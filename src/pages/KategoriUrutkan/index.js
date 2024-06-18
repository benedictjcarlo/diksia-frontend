import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { KategoriHeader } from '../../components'

const KategoriUrutkan = () => {
    return (
    <View style={styles.page}>
        <KategoriHeader title={'Urutkan'}/>
        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
            <View style={styles.opsi1}>
                <Text style={styles.label}>Sedang Mendesak</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
            <View style={styles.opsi1}>
                <Text style={styles.label}>Paling Sesuai</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
            <View style={styles.opsi1}>
                <Text style={styles.label}>Terkini</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default KategoriUrutkan

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