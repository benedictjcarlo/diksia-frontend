import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Button, DetailHeader, Gap, TextSpan } from '../../components'

const PengirimanGadget = ({navigation}) => {
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -50}
        enabled
        style={{ flex: 1 }}
    >
        <View style={styles.page}>
        <DetailHeader title={'Pengiriman Gadget'}/>
        <View style={styles.container}>
            <Gap height={24}/>
            <View style={styles.timerContainer}>
                <Text style={styles.timer}>Batas Waktu Pengiriman</Text>
                <Gap height={12}/>
                <Text style={styles.timer}>23 : 59 : 59</Text>
            </View>
            <Gap height={24}/>
            <Text style={styles.title}>Tata Cara Pengiriman Gadget</Text>
            <Gap height={6}/>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.text}>1. Melakukan pengisian data </Text>
                <TextSpan
                    color={'#212121'}
                    textSpan={"Informasi Gadget"} 
                    fontWeight={'bold'}
                    fontSize={14}/>
            </View>
            <Gap height={12}/>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.text}>2. </Text>
                <TextSpan
                    color={'#212121'}
                    textSpan={"Kirim Gadget"} 
                    fontWeight={'bold'}
                    fontSize={14}/>
                <Text style={styles.text}> Anda ke alamat:</Text>
            </View>
            <Gap height={12}/>
            <Text style={styles.title}>Diksia</Text>
            <Text style={styles.text}>Jalan Jendral Sudirman, Senayan, Kebayoran Baru, RT 01/ RW 03, Gelora, Jakarta Selatan, Kota Jakarta Pusat, Daerah Khusus Ibu Kota Jakarta, 12345 (0812-3456-7890)</Text>
            <Gap height={12}/>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.text}>3. </Text>
                <TextSpan
                    color={'#212121'}
                    textSpan={"Lengkapi Form Pengiriman"} 
                    fontWeight={'bold'}
                    fontSize={14}/>
                <Text style={styles.text}> di bawah ini.</Text>
            </View>
            <Gap height={24}/>
            <Text style={styles.title}>Form Pengiriman</Text>
            <Gap height={12}/>
            <Text style={styles.title}>Kurir</Text>
            <Gap height={6}/>
            <View style={styles.inputContainer}>
                <TextInput 
                placeholder='cth: JNE, JNT, SiCepat' 
                placeholderTextColor='#D4D4D4'
                style={styles.input}/>
            </View>
            <Gap height={12}/>
            <Text style={styles.title}>Nomor Resi</Text>
            <Gap height={6}/>
            <View style={styles.inputContainer}>
                <TextInput 
                placeholder='Masukkan nomor resi pengiriman gadget' 
                placeholderTextColor='#D4D4D4'
                style={styles.input}/>
            </View>
        </View>
        <View style={styles.footerButton}>
                <Button
                    text="Batalkan" 
                    bgColor='#FFF' 
                    color='#96CDF8'
                    brColor='#96CDF8' 
                    brWidth={2}
                    width={174}
                    onPress={() => navigation.goBack()}/>
                <Button
                    text="Kirim Gadget" 
                    bgColor='#4485B7' 
                    color='#FFF'
                    brColor='#4485B7' 
                    brWidth={0}
                    width={174}
                    onPress={() => navigation.navigate('TerimakasihDonasiGadget')}/>
            </View>
        </View>
    </KeyboardAvoidingView>
  )
}

export default PengirimanGadget

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFF',
        flex: 1
    },

    container: {
        marginHorizontal: 20,
        flex: 1
    },

    timerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        borderWidth: 2,
        borderColor: '#D4D4D4',
        borderRadius: 10,
    },

    timer: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#212121'
    },

    title: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#212121'
    },

    text: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 'normal',
        color: '#212121'
    },

    inputContainer: {
        borderWidth: 1,
        borderColor: '#D4D4D4',
        borderRadius: 6,
        paddingHorizontal: 12,
        height: 46,
    },

    input: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 'normal',
        color: '#8A8A8A'
    },

    footerButton: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#D4D4D4',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 6,
    },
})