import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, DetailHeader, Gap, DateBirth} from '../../components'
import { IcAkunDefault, IcCamera } from '../../assets'
import { getData, updateDatabase} from '../../utils'
import axios from 'axios'
import { API_HOST } from '../../config'
import moment from 'moment'

const EditAkun = ({navigation}) => {
    const [userProfile, setUserProfile] = useState({
        name: '',
        email: '',
        birthDate: new Date(),
        phoneNumber: '',
    });

    useEffect(() => {
        getData('userProfile').then((res) => {
        setUserProfile(res)
        })
    },[])

    const updateUserProfile = (newUserProfile) => {
        console.log('Updating user profile:', newUserProfile);
        setUserProfile(newUserProfile);
    };

    const [updatedUserProfile, setUpdatedUserProfile] = useState({
        name: '',
        email: '',
        birthDate: '',
        phoneNumber: '',
    });

    const handleUpdateProfile = () => {
        getData('token').then(resToken => {
            const updatedData = {
                name: updatedUserProfile.name? updatedUserProfile.name : userProfile.name,
                email: updatedUserProfile.email? updatedUserProfile.email : userProfile.email,
                birthDate: updatedUserProfile.birthDate? updatedUserProfile.birthDate : userProfile.birthDate,
                phoneNumber: updatedUserProfile.phoneNumber? updatedUserProfile.phoneNumber : userProfile.phoneNumber,
            };
            axios.post(`${API_HOST.url}/updateProfile`, updatedUserProfile, {
            headers: {
                'Authorization': resToken
            }
            })
            .then(res => {
            console.log('update data success: ', res.data)
            updateDatabase(updatedData).then(() => {
                console.log('Database updated!');
                updateUserProfile(updatedData);
                navigation.navigate('Akun', { userProfile: updatedData });
              }).catch((error) => {
                console.error('Error updating database:', error);
              });
            })
           .catch(err => {
            console.log('update data gagal: ', err.response)
            })
        })
    };

    const handleDateChange = (date) => {
        const formattedDate = moment(date).format('YYYY-MM-DD HH:mm:ss').replace(/-/g, '');
        setUpdatedUserProfile({ ...updatedUserProfile, birthDate: formattedDate });
    };
    
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -50}
            enabled
            style={{ flex: 1 }}
        >
            <ScrollView style={styles.page}>
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
                    <TextInput 
                    defaultValue={userProfile.name}
                    onChangeText={(text) => setUpdatedUserProfile({ ...updatedUserProfile, name: text })}
                    style={styles.input}
                    />
                </View>
                <Gap height={12}/>
                <Text style={styles.title}>Email</Text>
                <Gap height={6}/>
                <View style={styles.inputContainer}>
                    <TextInput 
                    defaultValue={userProfile.email} 
                    onChangeText={(text) => setUpdatedUserProfile({ ...updatedUserProfile, email: text })}
                    style={styles.input}
                    />
                </View>
                <Gap height={12}/>
                <Text style={styles.title}>Tanggal Lahir</Text>
                <Gap height={6}/>
                <View style={styles.dateInputContainer}>
                    <DateBirth onDateChange={handleDateChange}/>
                </View>
                <Gap height={12}/>
                <Text style={styles.title}>Nomor Telepon</Text>
                <Gap height={6}/>
                <View style={styles.inputContainer}>
                    <TextInput 
                    defaultValue={userProfile.phoneNumber} 
                    onChangeText={(text) => setUpdatedUserProfile({ ...updatedUserProfile, phoneNumber: text })}
                    style={styles.input}
                    />
                </View>
            </View>
            </ScrollView>
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
                        onPress={handleUpdateProfile}/>
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
        color: '#212121',
        width: '90%'
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

    dateInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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