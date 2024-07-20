import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { launchImageLibrary } from 'react-native-image-picker';
import { DonationGadgetDummy1, IcPlus } from '../../assets';
import { Button, DetailHeader, Gap, SelectJenis, SelectKondisi, TextInput } from '../../components';
import { useForm } from '../../utils';

const DonasiGadget = () => {
    const navigation = useNavigation()
    const [photo, setPhoto] = useState('');
    const [dataImage, setDataImage] = useState('');
    const route = useRoute();
    const {id, title, picturePath, deadline} = route.params;
    const [form, setForm] = useForm({
        jenis: '',
        kondisi: '',
        merk: '',
        kendala: '',
    })

    const handleSelectJenisChange = (itemValue) => {
        console.log(`Selected jenis: ${itemValue}`);
        setForm('jenis', itemValue)
    };

    const handleSelectKondisiChange = (itemValue) => {
        console.log(`Selected kondisi: ${itemValue}`);
        setForm('kondisi', itemValue)
    };

    const addPhoto = () => {
        launchImageLibrary({
            quality: 0.5,
            maxWidth: 200,
            maxHeight: 200,
        }, (response) => {
            console.log('Response: ', response)
            if(response.didCancel || response.error){
                showToast('Anda tidak memilih photo')
            } else {
                const source = {uri: response.assets[0].uri};
                const dataImage = {
                    uri: response.assets[0].uri,
                    type: response.assets[0].type,
                    name: response.assets[0].fileName
                }
                setPhoto(source)
                setDataImage(dataImage)
            }
        })
    }

    const onSubmit = () => {
        const data = {
            id,
            title,
            picturePath,
            deadline,
            ...form,
            dataImage: dataImage,
        }
        navigation.navigate('MetodePengirimanGadget', {data})
    }

    const showToast = (message, type) => {
        showMessage({
            message,
            type: type === 'success' ? 'success' : 'danger',
            backgroundColor: type === 'success' ? '#1ABC9C' : '#D9435E',
        })
    }
    
    return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -50}
        enabled
        style={{ flex: 1 }}
    >
        <View style={styles.page}>
            <DetailHeader title={'Informasi Gadget'}/>
            <View style={styles.contentContainer}>
                <ScrollView vertical showsVerticalScrollIndicator={false}>
                    <Gap height={24}/>
                    <Text style={styles.title}>Informasi Gadget</Text>
                    <Gap height={6}/>
                    <Text style={styles.text}>Kami membutuhkan informasi dari gadget yang ingin Anda donasikan guna memastikan gadget yang Anda donasikan dapat digunakan untuk membantu keberlangsungan belajar penerima bantuan.</Text>
                    <Gap height={12}/>
                    <Text style={styles.title}>Rekomendasi minimal spesifikasi gadget:</Text>
                    <Gap height={6}/>
                    <Text style={styles.subTitle}>Handphone/Tablet:</Text>
                    <Text style={styles.text}>- Minimal menggunakan Android 5 (Lolipop)</Text>
                    <Text style={styles.text}>- Minimal menggunakan iOS 8</Text>
                    <Gap height={6}/>
                    <Text style={styles.subTitle}>Laptop</Text>
                    <Text style={styles.text}>- Minimal menggunakan prosessor 2.2 Ghz</Text>
                    <Gap height={24}/>
                    <SelectJenis 
                    label={'Jenis Gadget'} 
                    onSelectChange={handleSelectJenisChange}
                    />
                    <Gap height={24}/>
                    <SelectKondisi 
                    label={'Jenis Kondisi'}
                    onSelectChange={handleSelectKondisiChange}
                    />
                    <Gap height={24}/>
                    <TextInput
                    fontS={16}
                    label={"Merk dan Tipe Gadget"}
                    placeholder={"cth: Samsung Galaxy S7"}
                    value={form.merk}
                    onChangeText={(value) => setForm('merk', value)}/>
                    <Gap height={24}/>
                    <TextInput
                    fontS={16}
                    label={"Kendala atau Kekurangan Gadget (Opsional)"}
                    placeholder={"cth: Mic Rusak, Tombol Volume Rusak, Kamera Rusak"}
                    value={form.kendala}
                    onChangeText={(value) => setForm('kendala', value)}/>
                    <Gap height={6}/>
                    <Gap height={24}/>
                    <Text style={styles.title}>Upload Foto Gadget</Text>
                    <Text style={styles. text}>Untuk memverifikasi gadget yang ingin Anda donasikan, kami membutuhkan foto nampak depan gadget dengan keadaan menyala</Text>
                    <Gap height={24}/>
                    <Text style={styles.title}>Contoh Foto:</Text>
                    <Gap height={12} />
                    <Image source={DonationGadgetDummy1} style={styles.image}/>
                    <Gap height={12}/>
                    <View style={styles.plusContainer}>
                        <TouchableOpacity onPress={addPhoto}>
                            {photo ? (
                                <Image source={photo} style={styles.plusContainer}/>
                            ) : (
                                <IcPlus style={styles.icPlus}/>
                            )}

                        </TouchableOpacity>
                    </View>
                    <Gap height={24}/>
                </ScrollView>
            </View>
            <View style={styles.footerButton}>
                <Button
                    text="Lanjutkan Donasi Gadget" 
                    bgColor='#4485B7' 
                    color='#FFF'
                    brColor='#4485B7' 
                    brWidth={0}
                    onPress={onSubmit}/>
            </View>
        </View>
    </KeyboardAvoidingView>
    )
}

export default DonasiGadget

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFF',
        flex: 1
    },

    contentContainer: {
        marginHorizontal: 20,
        flex: 1
    },

    title: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#212121'
    },

    subTitle: {
        fontFamily: 'Roboto',
        fontSize: 14,
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
        color: '#212121'
    },

    image: {
        height: 160,
        width: 220,
        borderRadius: 6
    },

    footerButton: {
        borderTopWidth: 1,
        borderTopColor: '#D4D4D4',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 6,
    },

    plusContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderWidth: 1,
        borderColor: '#D4D4D4',
        width: 80,
        height: 80,
        borderRadius: 6
    },

    icPlus: {
        height: 12,
        width: 18,
    }
})