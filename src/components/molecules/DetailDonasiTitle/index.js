import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress'
import { Gap, TextSpan, TextSpanCard } from '../../atoms'

const DetailDonasiTitle = ({title, progress, donationAmount, donationNeed, types, deadline}) => {
    const formatNominal = (value) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };
    if( types === 'UANG' ){
        return (
            <View>
                <Text style={styles.title}>{title}</Text>
                <Gap height={6}/>
                <Progress.Bar 
                progress={progress}
                color='#FF893E' unfilledColor='#D4D4D4'
                borderColor='#D4D4D4' 
                borderWidth={0.1}
                width={null}
                />
                <Gap height={12}/>
                <Text style={styles.text}>Jumlah Dana Terkumpul</Text>
                <Gap height={4}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.jumlahDana}>{`Rp ${formatNominal(donationAmount)}`}</Text>
                    <TextSpanCard 
                    color={'#212121'}
                    colorS={'#212121'}
                    textSpan={deadline} 
                    span={' hari lagi'} 
                    fontWeight={'bold'}
                    fontSize={14}/>
                </View>
                <Gap height={4}/>
                <TextSpanCard
                    color={'#212121'}
                    colorS={'#212121'}
                    textSpan={'dari '} 
                    span={`Rp ${formatNominal(donationNeed)}`}
                    fontWeightS={'bold'}
                    fontSize={14}/>
            </View>
        )
    } else if( types === 'PERANGKAT' ){
        return (
            <View>
                <Text style={styles.title}>{title}</Text>
                <Gap height={6}/>
                <Progress.Bar 
                progress={progress}
                color='#FF893E' unfilledColor='#D4D4D4'
                borderColor='#D4D4D4' 
                borderWidth={0.1}
                width={null}
                />
                <Gap height={12}/>
                <Text style={styles.text}>Jumlah Perangkat Terkumpul</Text>
                <Gap height={4}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.jumlahDana}>{`${donationAmount.toLocaleString()} perangkat`}</Text>
                    <TextSpanCard 
                    color={'#212121'}
                    colorS={'#212121'}
                    textSpan={deadline} 
                    span={' hari lagi'} 
                    fontWeight={'bold'}
                    fontSize={14}/>
                </View>
                <Gap height={4}/>
                <TextSpanCard
                    color={'#212121'}
                    colorS={'#212121'}
                    textSpan={'dari '} 
                    span={`${donationNeed.toLocaleString()} perangkat dibutuhkan`}
                    fontWeightS={'bold'}
                    fontSize={14}/>
            </View>
        )
    }
}

export default DetailDonasiTitle

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#212121'
    },

    text: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: 'normal',
        color: '#212121'
    },

    jumlahDana: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#5CB8FF'
    }

})