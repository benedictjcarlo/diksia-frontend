import React, {useEffect} from 'react'
import { View} from 'react-native'
import { Logo } from '../../assets'

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Masuk')
        }, 2000)
    }, [])

    return (
        <View style={{
            backgroundColor: '#5CB8FF',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
            }}>
            <Logo />
        </View>
    )
}

export default SplashScreen