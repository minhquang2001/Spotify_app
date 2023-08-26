import { Text, StyleSheet, View, Image } from 'react-native'

const Header = (Navbar: any) => {
    const { Nav } = Navbar
    return (
        <View style={styles.container}>

            {/* Render header when tab Home */}

            {Nav === "Home"
                && (
                    <>
                        <Image source={require('../../../assets/images/icon/search.png')} />
                        <Image source={require('../../../assets/images/logo/Spotify_Logo.png')} />
                        <Image source={require('../../../assets/images/icon/setting.png')} />
                    </>
                )}

            {/* Render header when tab Playlist */}

            {Nav === "Playlist" && (
                <>
                    <Image source={require('../../../assets/images/icon/search.png')} />
                    <Text style={styles.heading}>Playlists</Text>
                    <Image source={require('../../../assets/images/icon/add.png')} />
                </>
            )}

            {/* Render header when tab History */}

            {Nav === "History" && (
                <>
                    <Image source={require('../../../assets/images/icon/search.png')} style={{ opacity: 0 }} />
                    <Text style={styles.heading}>History</Text>
                    <Image source={require('../../../assets/images/icon/more.png')} />
                </>
            )}

            {/* Render header when tab Profil */}

            {Nav === "Profil" && (
                <>
                    <Image source={require('../../../assets/images/icon/search.png')} />
                    <Text style={styles.heading}>Profil</Text>
                    <Image source={require('../../../assets/images/icon/setting.png')} />
                </>
            )}

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
        marginHorizontal: 32
    },
    heading: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    }
})

export default Header;
