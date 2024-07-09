import { StyleSheet, Text, View, ScrollView, TextInput, Image, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Button, DetailHeader, DropDownOption, Gap } from '../../components'
import { DonationGadgetDummy1, IcPlus } from '../../assets'
import { useNavigation } from '@react-navigation/native'

const DonasiGadget = () => {
    const navigation = useNavigation()
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
                    <Text style={styles.subTitle}>Handphone/Table:</Text>
                    <Text style={styles.text}>- Minimal menggunakan Android 5 (Lolipop)</Text>
                    <Text style={styles.text}>- Minimal menggunakan iOS 8</Text>
                    <Gap height={6}/>
                    <Text style={styles.subTitle}>Laptop</Text>
                    <Text style={styles.text}>- Minimal menggunakan prosessor 2.2 Ghz</Text>
                    <Gap height={24}/>
                    <Text style={styles.title}>Jenis Gadget</Text>
                    <Gap height={6}/>
                    <DropDownOption placeholder={'Pilih Jenis Gadget'}/>
                    <Gap height={24}/>
                    <Text style={styles.title}>Kondisi Gadget</Text>
                    <Gap height={6}/>
                    <DropDownOption placeholder={'Pilih Kondisi Gadget'}/>
                    <Gap height={24}/>
                    <Text style={styles.title}>Merk dan Tipe Gadget</Text>
                    <Gap height={6}/>
                    <View style={styles.inputContainer}>
                        <TextInput 
                        placeholder='cth: Samsung Galaxy S7' 
                        placeholderTextColor='#D4D4D4'
                        style={styles.input}/>
                    </View>
                    <Gap height={24}/>
                    <Text style={styles.title}>Kendala atau Kekurangan Gadget (Opsional)</Text>
                    <Gap height={6}/>
                    <View style={styles.inputContainer}>
                        <TextInput 
                        placeholder='cth: Mic Rusak, Tombol Volume Rusak' 
                        placeholderTextColor='#D4D4D4'
                        style={styles.input}/>
                    </View>
                    <Gap height={24}/>
                    <Text style={styles.title}>Upload Foto Gadget</Text>
                    <Text style={styles. text}>Untuk memverifikasi gadget yang ingin Anda donasikan, kami membutuhkan foto nampak depan gadget dengan keadaan menyala</Text>
                    <Gap height={24}/>
                    <Text style={styles.title}>Contoh Foto:</Text>
                    <Gap height={12} />
                    <Image source={DonationGadgetDummy1} style={styles.image}/>
                    <Gap height={12}/>
                    <View style={styles.plusContainer}>
                        <IcPlus style={styles.icPlus}/>
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
                    onPress={() => navigation.navigate('MetodePengirimanGadget')}/>
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
        width: 66,
        borderRadius: 6
    },

    icPlus: {
        height: 12,
        width: 18,
    }
})