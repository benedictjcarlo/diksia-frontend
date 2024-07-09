import React, {useEffect} from 'react'
import { View} from 'react-native'
import { Logo } from '../../assets'
import { getData } from '../../utils'

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            getData('token').then((token) => {
                console.log('token: ', token)
                if(token) {
                    navigation.reset({index: 0, routes: [{name: 'MainApp'}]})
                } else {
                    navigation.replace('Masuk')
                }
            })
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