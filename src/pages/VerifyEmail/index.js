import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { API_HOST } from '../../config';
import { useNavigation, useRoute } from '@react-navigation/native';
import { showMessage } from "react-native-flash-message";

const VerifyEmail = () => {
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    const route = useRoute();
    const { token } = route.params;

    useEffect(() => {
        if (token) {
            axios.get(`${API_HOST.url}/verify-email/${token}`)
                .then(response => {
                    showMessage({
                        message: 'Verifikasi email berhasil!',
                        type: 'success',
                    });
                    navigation.navigate('Masuk');
                })
                .catch(error => {
                    console.error('Verifikasi error:', error);
                    showMessage({
                        message: 'Verifikasi gagal!',
                        type: 'danger',
                    });
                })
                .finally(() => setLoading(false));
        } else {
            showMessage({
                message: 'Tidak ada token verifikasi yang tersedia!',
                type: 'danger',
            });
            setLoading(false);
        }
    }, [token]);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Melakukan verifikasi email Anda, tunggu sebentar...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text>Proses verifikasi email Anda telah selesai.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default VerifyEmail;