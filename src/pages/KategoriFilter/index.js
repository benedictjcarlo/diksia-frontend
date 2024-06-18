import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { KategoriHeader } from '../../components'

const KategoriFilter = () => {
    return (
    <View style={styles.page}>
        <KategoriHeader title={'Filter'}/>
        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
            <View style={styles.opsi1}>
                <Text style={styles.label}>Digalang oleh Diksia</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
            <View style={styles.opsi1}>
                <Text style={styles.label}>Digalang oleh Publik</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
            <View style={styles.opsi1}>
                <Text style={styles.label}>Digalang oleh Yayasan</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default KategoriFilter

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