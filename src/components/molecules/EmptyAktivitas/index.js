import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap } from '../../atoms'
import { IlAktivitasku } from '../../../assets'
import { useNavigation } from '@react-navigation/native'

const EmptyAktivitas = () => {
    const navigation = useNavigation()
    return (
    <View style={{backgroundColor: '#FFF', flex: 1}}>
        <Gap height={100}/>
        <View style={styles.container}>
            <IlAktivitasku width={260} height={218}/>
            <Gap height={24}/>
            <Text style={styles.title}>Kamu belum memiliki aktivitas apapun</Text>
            <Gap height={12}/>
            <Text style={styles.text}>Berikan perubahan positif dengan donasi pertamamu!</Text>
            <Text style={styles.text}>Setiap kontribusi memiliki dampat besar untuk</Text>
            <Text style={styles.text}>menciptakan dunia yang lebih baik.</Text>
            <Gap height={24}/>
            <Button 
                text="Donasi Sekarang" 
                bgColor='#FFF' 
                color='#5CB8FF'
                brWidth={2}
                brColor='#5CB8FF'
                fontSize={12}
                fontWeight={'bold'}
                onPress={() => navigation.navigate('MainApp')}/>
        </View>
    </View>
    )
}

export default EmptyAktivitas

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: 'Roboto'
    },

        title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#212121'
    },
        
        text: {
        fontWeight: 'normal',
        color: '#5C5C5C'
    }
})