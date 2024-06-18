import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView} from 'react-native'
import React from 'react'
import { Button, DetailHeader, Gap } from '../../components'
import { IcAkunDefault, IcCalendar, IcCamera } from '../../assets'

const EditAkun = ({navigation}) => {
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -50}
        enabled
        style={{ flex: 1 }}
    >
        <View style={styles.page}>
        <DetailHeader title={'Edit Akun'}/>
        <Gap height={48}/>
        <View style={styles.container}>
            <View style={styles.profile}>
                <View>
                    <IcAkunDefault height={100} width={100}/>
                    <IcCamera height={28} width={28} style={styles.cameraContainer}/>
                </View>
            </View>
            <Gap height={24}/>
            <Text style={styles.title}>Nama Lengkap</Text>
            <Gap height={6}/>
            <View style={styles.inputContainer}>
                <TextInput value='Benedict Juan Carlo' style={styles.input}/>
            </View>
            <Gap height={12}/>
            <Text style={styles.title}>Email</Text>
            <Gap height={6}/>
            <View style={styles.fixedInputContainer}>
                <TextInput value='carlo.bjc264@gmail.com' style={styles.fixedInput}/>
            </View>
            <Gap height={12}/>
            <Text style={styles.title}>Tanggal Lahir</Text>
            <Gap height={6}/>
            <View style={styles.dateInputContainer}>
                <TextInput value='-' style={styles.dateInput}/>
                <IcCalendar width={16} height={16}/>
            </View>
            <Gap height={12}/>
            <Text style={styles.title}>Nomor Telepon</Text>
            <Gap height={6}/>
            <View style={styles.inputContainer}>
                <TextInput value='-' style={styles.input}/>
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

export default EditAkun

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFF',
        flex: 1
    },

    container: {
        marginHorizontal: 40,
        flex: 1
    },

    profile: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    cameraContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
    },

    title: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'bold',
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
        color: '#212121'
    },

    fixedInput: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 'normal',
        color: '#212121'
    },

    fixedInputContainer :{
        borderWidth: 1,
        borderColor: '#D4D4D4',
        backgroundColor: '#D4D4D4',
        borderRadius: 6,
        paddingHorizontal: 12,
        height: 46,
    },

    dateInput: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 'normal',
        color: '#212121'
    },

    dateInputContainer :{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#D4D4D4',
        borderRadius: 6,
        paddingHorizontal: 12,
        height: 46,
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