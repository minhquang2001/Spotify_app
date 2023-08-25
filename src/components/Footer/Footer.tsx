import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../navigators/RootNavigator';



const Footer = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    const [active, setActive] = useState(false)
    const handleOnPress = () => {
        setActive(!active)
    }
    return (
        <View style={styles.bottom} >
            <View style={styles.marginHorizontal}>
                <View style={styles.wrapIcon}>

                    <TouchableOpacity style={styles.wrapContent} onPress={() => navigation.navigate('Home')}>
                        <Image source={require('../../../assets/images/icon/activeIcon.png')} style={[styles.spaceDot, styles.dotNoActive, styles.dotActive]} />
                        <Image source={require('../../../assets/images/icon/home.png')} style={[styles.colorImgNoActive, styles.colorImgActive]} />
                        <Text style={[styles.colorTextNoActive, styles.textStyle, styles.colorTextActive]}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.wrapContent} onPress={() => navigation.navigate('Playlists')}>
                        <Image source={require('../../../assets/images/icon/activeIcon.png')} style={[styles.spaceDot, styles.dotNoActive]} />
                        <Image source={require('../../../assets/images/icon/music-filter.png')} style={styles.colorImgNoActive} />
                        <Text style={[styles.colorTextNoActive, styles.textStyle]}>Playlist</Text>
                    </TouchableOpacity>

                    <Image source={require('../../../assets/images/icon/home.png')} style={{ opacity: 0 }} />

                    <TouchableOpacity style={styles.wrapContent} onPress={() => navigation.navigate('History')}>
                        <Image source={require('../../../assets/images/icon/activeIcon.png')} style={[styles.spaceDot, styles.dotNoActive]} />
                        <Image source={require('../../../assets/images/icon/history.png')} style={styles.colorImgNoActive} />
                        <Text style={[styles.colorTextNoActive, styles.textStyle]}>History</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.wrapContent} onPress={() => navigation.navigate('Profil')}>
                        <Image source={require('../../../assets/images/icon/activeIcon.png')} style={[styles.spaceDot, styles.dotNoActive]} />
                        <Image source={require('../../../assets/images/icon/profile.png')} style={styles.colorImgNoActive} />
                        <Text style={[styles.colorTextNoActive, styles.textStyle]}>Profil</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Image style={styles.logo} source={require('../../../assets/images/logo/Logo.png')} />
        </View>
    )
}

const styles = StyleSheet.create({

    bottom: {
        position: 'absolute',
        height: 112,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#333'
    },
    logo: {
        bottom: 73 + 20,
        // right: '-50%',
        alignSelf: 'center'

    },
    marginHorizontal: {
        height: 73,
        marginHorizontal: 32
    },
    wrapIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%'
    },
    wrapContent: {
        height: '100%',
        alignItems: 'center',

    },
    textStyle: {
        marginTop: 4
    },
    spaceDot: {
        marginBottom: 12
    },
    dotNoActive: {
        opacity: 0
    },
    dotActive: {
        opacity: 1
    },
    // Color 
    colorTextNoActive: {
        color: '#fff',
        opacity: .6
    },
    colorTextActive: {
        color: '#42C83C',
        opacity: .8,
        fontWeight: '600'
    },
    colorImgNoActive: {
        tintColor: '#fff',
        opacity: 0.6,

    },
    colorImgActive: {
        tintColor: '#42C83C',
        opacity: 1
    }
})
export default Footer;

