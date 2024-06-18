import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DetailHeader, DonationCardList, Gap, KategoriBar } from '../../components'
import { DonationDummy1, DonationDummy2, DonationDummy3 } from '../../assets'

const Kategori = () => {
    return (
    <View style={styles.page}>
        <DetailHeader title={'Donasi'}/>
        <KategoriBar />
        <ScrollView style={{flex:1}}>
            <View style={styles.container}>
                <Gap height={24}/>
                <DonationCardList image={DonationDummy2}/>
                <Gap height={12}/>
                <DonationCardList image={DonationDummy1}/>
                <Gap height={12}/>
                <DonationCardList image={DonationDummy3}/>
                <Gap height={12}/>
                <DonationCardList image={DonationDummy2}/>
                <Gap height={12}/>
                <DonationCardList image={DonationDummy1}/>
                <Gap height={12}/>
                <DonationCardList image={DonationDummy3}/>
                <Gap height={12}/>
                <DonationCardList image={DonationDummy2}/>
                <Gap height={12}/>
                <DonationCardList image={DonationDummy1}/>
                <Gap height={12}/>
                <DonationCardList image={DonationDummy3}/>
                <Gap height={12}/>
            </View>
        </ScrollView>
    </View>
    )
}

export default Kategori

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFF',
        flex: 1
    },

    container: {
        marginHorizontal: 20,
    }
})