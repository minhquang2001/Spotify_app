import { Text, StyleSheet, View, Image } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/images/icon/search.png')} />
            <Image source={require('../../../assets/images/logo/Spotify_Logo.png')} />
            <Image source={require('../../../assets/images/icon/setting.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0f0e0e',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        marginHorizontal: 25
    }
})

export default Header;
