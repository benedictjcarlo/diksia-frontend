import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IcAktivitaskuOff, IcAktivitaskuOn, IcAkunOff, IcAkunOn, IcDonasiOff, IcDonasiOn, IcPesanOff, IcPesanOn } from '../../../assets';

const Icon = ({label, focus}) => {
    switch(label){
        case 'Donasi':
            return focus ? <IcDonasiOn /> : <IcDonasiOff/>
        case 'Aktivitasku':
            return focus ? <IcAktivitaskuOn /> : <IcAktivitaskuOff/>
        case 'Pesan':
            return focus ? <IcPesanOn /> : <IcPesanOff/>;
        case 'Akun':
            return focus ?  <IcAkunOn /> : <IcAkunOff/>
        default:
            return <IcDonasiOn/>
    }
}

const BottomNavigator = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
            options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
            const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
            }
            };

            const onLongPress = () => {
            navigation.emit({
                type: 'tabLongPress',
                target: route.key,
            });
            };

            return (
            <TouchableOpacity
                key={index}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{alignItems:'center'}}
                >
                <Icon label={label} focus={isFocused}/>
                <Text style={{ 
                    color: isFocused ? '#5CB8FF' : '#8A8A8A'}}>
                {label}
                </Text>
            </TouchableOpacity>
            );
        })}
        </View>
    );
}

export default BottomNavigator

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor:'#fff',
        paddingVertical: 12,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: 'rgba(212,212,212,0.8)',
    },
})