import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from 'react-native-flash-message';

export const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        showMessage('Gagal Menyimpan Data Di Local Storage!')
    }
};

export const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        showMessage('Gagal Mengambil Data Dari Local Storage!')
    }
};

export const updateDatabase = async (updatedUserProfile) => {
    await storeData('userProfile', updatedUserProfile);
};