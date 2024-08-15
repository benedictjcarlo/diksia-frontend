import React from 'react';
import { 
    SplashScreen, 
    Masuk, 
    Daftar,
    KodeOTP,
    KataSandi,
    Donasi,
    Aktivitasku,
    Pesan,
    Akun,
    DetailDonasi,
    DetailDonasiGadget,
    CeritaPenggalangan,
    DonasiLainnya,
    PembayaranDonasi,
    MetodePembayaran,
    RingkasanDonasi,
    TerimakasihDonasiUang,
    Kategori,
    KategoriMenu,
    KategoriUrutkan,
    KategoriFilter,
    DonasiGadget,
    MetodePengirimanGadget,
    PengirimanGadget,
    RingkasanPengiriman,
    TerimakasihDonasiGadget,
    EditAkun,
    UbahKataSandi,
    Bantuan,
    SyaratKetentuan,
    TentangDiksia,
    VerifyEmail,


} from '../pages';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Donasi"
            component={Donasi}
            options={{headerShown: false}}
            />

            <Tab.Screen name="Aktivitasku"
            component={Aktivitasku}
            options={{headerShown: false}}
            />

            <Tab.Screen name="Pesan"
            component={Pesan}
            options={{headerShown: false}}
            />

            <Tab.Screen name="Akun"
            component={Akun}
            options={{headerShown: false}}
            />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" 
            component={SplashScreen} 
            options={{headerShown: false}}
            />

            <Stack.Screen 
            name="Masuk" 
            component={Masuk}
            options={{headerShown: false}}
            />
            
            <Stack.Screen 
            name="Daftar" 
            component={Daftar}
            options={{headerShown: false}}
            />

            <Stack.Screen 
            name="KodeOTP" 
            component={KodeOTP}
            options={{headerShown: false}}
            />

            <Stack.Screen 
            name="KataSandi" 
            component={KataSandi}
            options={{headerShown: false}}
            />

            <Stack.Screen 
            name="MainApp" 
            component={MainApp}
            options={{headerShown: false}}
            />

            <Stack.Screen 
            name="DetailDonasi" 
            component={DetailDonasi}
            options={{headerShown: false}}
            />

            <Stack.Screen 
            name="DetailDonasiGadget" 
            component={DetailDonasiGadget}
            options={{headerShown: false}}
            />

            <Stack.Screen 
            name="CeritaPenggalangan" 
            component={CeritaPenggalangan}
            options={{headerShown: false}}
            />

            <Stack.Screen 
            name="DonasiLainnya" 
            component={DonasiLainnya}
            options={{headerShown: false}}
            />

            <Stack.Screen 
            name="PembayaranDonasi" 
            component={PembayaranDonasi}
            options={{headerShown: false}}
            />

            <Stack.Screen 
            name="MetodePembayaran" 
            component={MetodePembayaran}
            options={{headerShown: false}}
            />

            <Stack.Screen 
            name="RingkasanDonasi" 
            component={RingkasanDonasi}
            options={{headerShown: false}}
            />

            <Stack.Screen 
            name="TerimakasihDonasiUang" 
            component={TerimakasihDonasiUang}
            options={{headerShown: false}}
            />

            <Stack.Screen 
            name="Kategori" 
            component={Kategori}
            options={{headerShown: false}}
            />

            <Stack.Screen 
            name="KategoriMenu" 
            component={KategoriMenu}
            options={{headerShown: false}}
            />
            
            <Stack.Screen 
            name="KategoriUrutkan" 
            component={KategoriUrutkan}
            options={{headerShown: false}}
            />

            <Stack.Screen 
            name="KategoriFilter" 
            component={KategoriFilter}
            options={{headerShown: false}}
            />

            <Stack.Screen 
            name="DonasiGadget" 
            component={DonasiGadget}
            options={{headerShown: false}}
            />

            <Stack.Screen 
            name="MetodePengirimanGadget" 
            component={MetodePengirimanGadget}
            options={{headerShown: false}}
            />

            <Stack.Screen 
            name="PengirimanGadget" 
            component={PengirimanGadget}
            options={{headerShown: false}}
            />

            <Stack.Screen 
            name="RingkasanPengiriman" 
            component={RingkasanPengiriman}
            options={{headerShown: false}}
            />

            <Stack.Screen 
            name="TerimakasihDonasiGadget" 
            component={TerimakasihDonasiGadget}
            options={{headerShown: false}}
            />

            <Stack.Screen 
            name="EditAkun" 
            component={EditAkun}
            options={{headerShown: false}}
            />

            <Stack.Screen 
            name="UbahKataSandi" 
            component={UbahKataSandi}
            options={{headerShown: false}}
            />

            <Stack.Screen 
            name="Bantuan" 
            component={Bantuan}
            options={{headerShown: false}}
            />

            <Stack.Screen 
            name="SyaratKetentuan" 
            component={SyaratKetentuan}
            options={{headerShown: false}}
            />

            <Stack.Screen 
            name="TentangDiksia" 
            component={TentangDiksia}
            options={{headerShown: false}}
            />
            
            <Stack.Screen 
            name="VerifyEmail" 
            component={VerifyEmail}
            options={{headerShown: false}}
            />

        </Stack.Navigator>
    )
}

export default Router