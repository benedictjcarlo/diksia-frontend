import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { DetailHeader, DonationCardList, Gap, KategoriBar } from '../../components'
import { getDonationData } from '../../redux/action'

const Kategori = () => {
    const dispatch = useDispatch();

    const {donation} = useSelector(state => state.home)

    useEffect(() => {
    dispatch(getDonationData())
    })


    return (
    <View style={styles.page}>
        <DetailHeader title={'Donasi'}/>
        <KategoriBar />
        <ScrollView style={{flex:1}}>
            <View style={styles.container}>
                <Gap height={24}/>
                {donation.map(itemDonation => {
                    return (
                    <DonationCardList
                    key={itemDonation.id}
                    title={itemDonation.title}
                    image={{ uri: itemDonation.picturePath}}
                    donationAmount={itemDonation.donationAmount}
                    donationNeed={itemDonation.donationNeed}
                    deadline={itemDonation.deadline}
                    />
                    )
                })}
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