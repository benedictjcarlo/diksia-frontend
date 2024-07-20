import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { DetailHeader, DonationCardList, Gap, KategoriBar } from '../../components';
import { getDonationDataByTypes } from '../../redux/action';
import { useNavigation } from '@react-navigation/native';

const Kategori = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const type = useSelector((state) => state.home.type);
    const donationData = useSelector((state) => state.category[type]);

    useEffect(() => {
        dispatch(getDonationDataByTypes(type));
    }, [type]);

    const handleDetailDonasi = (itemDonation) => {
        if (itemDonation.types === 'UANG') {
            navigation.navigate('DetailDonasi', itemDonation);
        } else if (itemDonation.types === 'PERANGKAT') {
            navigation.navigate('DetailDonasiGadget', itemDonation);
        } else {
            console.log('Item Donation: ', itemDonation)
            console.log('Unknown type: ', itemDonation.types);
        }
    };

    return (
        <View style={styles.page}>
        <DetailHeader title={'Donasi'} />
        <KategoriBar />
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
            <Gap height={24} />
            {donationData.map((itemDonation) => (
                <DonationCardList
                key={itemDonation.id}
                title={itemDonation.title}
                image={{ uri: itemDonation.picturePath }}
                donationAmount={itemDonation.donationAmount}
                donationNeed={itemDonation.donationNeed}
                deadline={itemDonation.deadline}
                types={itemDonation.types}
                onPress={() => handleDetailDonasi(itemDonation)}
                />
            ))}
            </View>
        </ScrollView>
        </View>
    );
};

export default Kategori;

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFF',
        flex: 1,
    },

    container: {
        marginHorizontal: 20,
    },
});