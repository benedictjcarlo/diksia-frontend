import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, Image } from 'react-native'
import { Button, DetailHeader, Gap, TextSpanCard } from '../../components'
import axios from 'axios'
import { getData } from '../../utils'
import { API_HOST } from '../../config'
import { useDispatch } from 'react-redux'
import { setLoading } from '../../redux/action'
import { showMessage } from 'react-native-flash-message'

const RingkasanDonasi = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const {data} = route.params
    const {donation, transaction, userProfile} = data;

    const dispatch = useDispatch();

    const onCheckout = () => {
        const data = {
            donation_id: donation.id,
            user_id: userProfile.id,
            amount: transaction.nominalDonasi,
            method: transaction.metodePembayaran,
            status: transaction.status,
        }
        getData('token').then(resToken => {
            axios.post(`${API_HOST.url}/checkout`, data, {
                headers: {
                    'Authorization': resToken
                }
            })
            .then(res => {
                console.log('checkout success: ', res.data)
                navigation.replace('TerimakasihDonasiUang')
            })
            .catch(err => {
                dispatch(setLoading(false))
                const errors = err.response.data.errors
                if (errors.amount) showToast('Nominal Donasi Harus Diisi')
                if (errors.method) showToast('Metode Pembayaran Harus Diisi')
            })
        })
    }

    const formatNominal = (value) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };

    const showToast = (message, type) => {
        showMessage({
            message,
            type: type === 'success' ? 'success' : 'danger',
            backgroundColor: type === 'success' ? '#1ABC9C' : '#D9435E',
        })
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -50}
            enabled
            style={{ flex: 1 }}
        >
            <View style={{backgroundColor: '#FFF', flex:1}}>
                <DetailHeader title={'Donasi Kamu'} />
                <Gap height={24}/>
                <View style={styles.container}>
                <Text style={styles.sectionTitle}>Ringkasan Donasi</Text>
                <Gap height={24}/>
                <View style={styles.donationContainer}>
                    <Image source={{ uri: donation.picturePath }} style={styles.image}/>
                    <View style={styles.donationInfo}>
                        <Text style={styles.donationTitle}>{donation.title}</Text>
                        <Gap height={12}/>
                        <TextSpanCard 
                            color={'#212121'}
                            colorS={'#212121'}
                            textSpan={`${donation.deadline}`}
                            span={' hari lagi'} 
                            fontWeight={'bold'}
                            fontSize={14}
                        />
                    </View>
                </View>
                <Gap height={24}/>
                <View style={styles.detailContainer}>
                    <View style={styles.detailDonation}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.smallText}>Nama Pengguna</Text>
                            <Text style={styles.smallTitle}>{userProfile.name}</Text>
                        </View>
                        <Gap height={8}/>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.smallText}>Metode Pembayaran</Text>
                            <Text style={styles.smallTitle}>{transaction.metodePembayaran}</Text>
                        </View>
                        <Gap height={8}/>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.smallText}>Nominal Donasi</Text>
                            <Text style={styles.smallTitle}>Rp {formatNominal(transaction.nominalDonasi)}</Text>
                        </View>
                        <Gap height={8}/>
                    </View>
                </View>
                </View>
                <View style={styles.footerButton}>
                <Button
                    text="Lanjutkan Pembayaran" 
                    bgColor='#4485B7' 
                    color='#FFF'
                    brColor='#4485B7' 
                    brWidth={0}
                    onPress={onCheckout}/>
                </View>
            </View>
            </KeyboardAvoidingView>
        )
}

export default RingkasanDonasi

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20,
        flex: 1,
    },

    detailContainer: {
        alignItems: 'center',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#D4D4D4',
        overflow: 'hidden',
    },

    donationContainer: {
        width: '100%',
        flexDirection: 'row',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#D4D4D4',
        overflow: 'hidden',
    },

    donationInfo: {
        justifyContent: 'center',
        width: '60%',
        padding: 8,
    },

    detailDonation: {
        width: '100%',
        padding: 12,
        justifyContent: 'space-between'
    },

    sectionTitle: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#212121',
    },

    donationTitle: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#212121',
    },

    smallTitle: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#212121',
        width: '50%'
    },

    smallText: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 'normal',
        color: '#212121',
        width: '50%'
    },

    footerButton: {
        borderTopWidth: 1,
        borderTopColor: '#D4D4D4',
        paddingVertical: 12,
        paddingHorizontal: 20,
    },

    image: {
        width: '40%',
        height: 100,
        resizeMode: 'cover',
    },
})