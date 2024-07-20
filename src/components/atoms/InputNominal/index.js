import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const InputNominal = ({ value, onChangeText }) => {
    return (
        <View style={styles.container}>
        <Text style={styles.label}>Rp</Text>
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={'0'}
            placeholderTextColor={'#212121'}
            keyboardType="numeric"
        />
        </View>
);
};

export default InputNominal

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#E0EEFA',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 6,
        height: 60,
    },

    label: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#212121'
    },

    input: {
        fontFamily: 'Roboto',
        textAlign: 'right',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#212121'
    }
})