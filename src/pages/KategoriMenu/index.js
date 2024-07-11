import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { KategoriHeader } from '../../components';
import { getDonationDataByTypes, setType } from '../../redux/action';
import { useNavigation } from '@react-navigation/native';

const KategoriMenu = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const type = useSelector((state) => state.home.type);

    useEffect(() => {
        dispatch(getDonationDataByTypes('all'));
    }, []);

    const handleTypeChange = (newType) => {
        dispatch(setType(newType));
        dispatch(getDonationDataByTypes(newType));
        navigation.navigate('Kategori')
    };

    return (
        <View style={styles.page}>
        <KategoriHeader title={'Kategori'} />
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handleTypeChange('all')}
        >
            <View style={styles.opsi1}>
            <Text style={styles.label}>Semua Kategori</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handleTypeChange('uang')}
        >
            <View style={styles.opsi1}>
            <Text style={styles.label}>Donasi Uang</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handleTypeChange('perangkat')}
        >
            <View style={styles.opsi1}>
            <Text style={styles.label}>Donasi Gadget</Text>
            </View>
        </TouchableOpacity>
        </View>
    );
};

export default KategoriMenu;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFF',
    flex: 1,
  },

  label: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'normal',
    color: '#212121',
  },

  opsi1: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#D4D4D4',
  },
});