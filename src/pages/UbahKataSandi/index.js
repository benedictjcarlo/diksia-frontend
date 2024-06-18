import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView} from 'react-native'
import React from 'react'
import { Button, DetailHeader, Gap } from '../../components'
import { IcSandiOff } from '../../assets'

const UbahKataSandi = ({navigation}) => {
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -50}
        enabled
        style={{ flex: 1 }}
    >
        <View style={styles.page}>
            <DetailHeader title={'Ubah Kata Sandi'}/>
            <Gap height={48}/>
            <View style={styles.container}>
                <Text style={styles.title}>Kata Sandi Baru</Text>
                <Gap height={6}/>
                <View style={styles.inputContainer}>
                    <TextInput placeholder='Masukkan kata sandi baru Anda' style={styles.input}/>
                    <IcSandiOff width={16} height={16}/>
                </View>
                <Gap height={12}/>
                <Text style={styles.title}>Konfirmasi Kata Sandi Baru</Text>
                <Gap height={6}/>
                <View style={styles.inputContainer}>
                    <TextInput placeholder='Masukkan ulang kata sandi baru Anda' style={styles.input}/>
                    <IcSandiOff width={16} height={16}/>
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
                    text="Simpan Perubahan" 
                    bgColor='#4485B7' 
                    color='#FFF'
                    brColor='#4485B7' 
                    brWidth={0}
                    width={174}
                    onPress={() => navigation.navigate('')}/>
            </View>
        </View>
    </KeyboardAvoidingView>
  )
}

export default UbahKataSandi

const styles = StyleSheet.create({
    page:{backgroundColor: '#FFF', flex:1},

    container: {
        marginHorizontal: 40,
        flex: 1
    },

    title: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#212121'
    },

    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        color: '#212121'
    },

    footerButton: {
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