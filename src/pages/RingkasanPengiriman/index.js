import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, Image } from 'react-native'
import { Button, DetailHeader, Gap, TextSpanCard } from '../../components'
import axios from 'axios'
import { getData } from '../../utils'
import { API_HOST } from '../../config'

const RingkasanPengiriman = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const {data} = route.params
    const {gadget, shipment, userProfile} = data;

    const onShipment = () => {
        const newData = {
            donation_id: gadget.id,
            user_id: userProfile.id,
            jenis: gadget.jenis,
            kondisi: gadget.kondisi,
            merk: gadget.merk,
            kendala: gadget.kendala,
            kurir: shipment.kurir,
            resi: shipment.resi,
            amount: shipment.amount,
            status: shipment.status,
        }
        console.log('Data Pengiriman: ', newData)
        getData('token').then(resToken => {
            axios.post(`${API_HOST.url}/shipmentGadget`, newData, {
                headers: {
                    'Authorization': resToken
                }
            })
            .then(res => {
                console.log('shipment success: ', res.data)
                navigation.replace('TerimakasihDonasiGadget')
            })
            .catch(err => {
                console.log('shipment gagal: ', err.response)
            })
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
                <Text style={styles.sectionTitle}>Ringkasan Pengiriman</Text>
                <Gap height={24}/>
                <View style={styles.donationContainer}>
                    <Image source={{ uri: gadget.picturePath }} style={styles.image}/>
                    <View style={styles.donationInfo}>
                        <Text style={styles.donationTitle}>{gadget.title}</Text>
                        <Gap height={12}/>
                        <TextSpanCard 
                            color={'#212121'}
                            colorS={'#212121'}
                            textSpan={`${gadget.deadline}`}
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
                            <Gap width={10}/>
                            <Text style={styles.smallTitle}>{userProfile.name}</Text>
                        </View>
                        <Gap height={12}/>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.smallText}>Jenis Gadget</Text>
                            <Gap width={10}/>
                            <Text style={styles.smallTitle}>{gadget.jenis}</Text>
                        </View>
                        <Gap height={12}/>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.smallText}>Kondisi Gadget</Text>
                            <Gap width={10}/>
                            <Text style={styles.smallTitle}>{gadget.kondisi}</Text>
                        </View>
                        <Gap height={12}/>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.smallText}>Kendala Gadget</Text>
                            <Gap width={10}/>
                            <Text style={styles.smallTitle}>{gadget.kendala}</Text>
                        </View>
                        <Gap height={12}/><View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.smallText}>Kurir</Text>
                            <Gap width={10}/>
                            <Text style={styles.smallTitle}>{shipment.kurir}</Text>
                        </View>
                        <Gap height={12}/><View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.smallText}>Nomor Resi</Text>
                            <Gap width={10}/>
                            <Text style={styles.smallTitle}>{shipment.resi}</Text>
                        </View>
                        <Gap height={12}/>
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
                    onPress={onShipment}/>
                </View>
            </View>
            </KeyboardAvoidingView>
        )
}

export default RingkasanPengiriman

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
        width: '60%'
    },

    smallText: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 'normal',
        color: '#212121',
        width: '40%'
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