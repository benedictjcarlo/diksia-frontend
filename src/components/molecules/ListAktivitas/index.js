import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Gap, TagStatus } from '../../atoms'

const ListAktivitas = ({title, image, status, createdAt, amount}) => {
    const formatNominal = (value) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };
    return (
        <View style={styles.donationContainer}>
            <Image source={image} style={styles.image}/>
            <View style={styles.donationInfo}>
                <Text style={styles.donationTitle}>{title}</Text>
                <Gap height={12}/>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 8}}>
                    <Text style={styles.text}>{createdAt}</Text>
                    {amount === 1 ?
                    <Text style={styles.text}>{formatNominal(amount)} Perangkat</Text> : 
                    <Text style={styles.text}>Rp {formatNominal(amount)}</Text>}
                    
                    <TagStatus
                        text={status}
                        status={status}
                    />
                </View>
            </View>
        </View>
    )
}

export default ListAktivitas

const styles = StyleSheet.create({
    donationContainer: {
        width: '100%',
        flexDirection: 'row',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#D4D4D4',
        overflow: 'hidden',
        marginBottom: 12,
    },
    
    donationInfo: {
        width: '70%',
        padding: 8,
    },
    
    donationTitle: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#212121',
    },

    image: {
        width: '30%',
        height: '100%',
        resizeMode: 'cover',
    },

    text: {
        fontSize: 12,
        color: '#212121',
        fontWeight: 'bold'
    },
})