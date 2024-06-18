import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IcFilter, IcKategori, IcUrutkan } from '../../../assets'
import { useNavigation } from '@react-navigation/native'

const KategoriBar = () => {
    const navigation = useNavigation()
    return (
    <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.7} style={{flex:1}} onPress={() => navigation.navigate('KategoriMenu')}>
            <View style={styles.kategoriContainer}>
                <IcKategori style={styles.icon}/>
                <Text style={styles.label}>Kategori</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={{flex:1}} onPress={() => navigation.navigate('KategoriUrutkan')}>
            <View style={styles.urutkanContainer}>
                <IcUrutkan style={styles.icon}/>
                <Text style={styles.label}>Urutkan</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={{flex:1}} onPress={() => navigation.navigate('KategoriFilter')}>
            <View style={styles.filterContainer}>
                <IcFilter style={styles.icon}/>
                <Text style={styles.label}>Filter</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default KategoriBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    label: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 'normal',
        color: '#212121',
        paddingLeft: 12,
    },

    icon: {
        height: 16,
        width: 16,
    },  

    kategoriContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        borderWidth: 1,
        borderColor: '#D4D4D4'
    },

    urutkanContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        borderWidth: 1,
        borderColor: '#D4D4D4'
    },

    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        borderWidth: 1,
        borderColor: '#D4D4D4'
    }
})