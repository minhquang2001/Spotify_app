import { center } from '@shopify/react-native-skia'
import { Text, StyleSheet, View, Image, SafeAreaView } from 'react-native'

const Header = (Navbar: any) => {
    const { Nav } = Navbar
    return (
        <>

            {/* Render header when tab Home */}

            {Nav === "Home"
                && (
                    <View style={styles.container}>
                        <Image source={require('../../../assets/images/icon/search.png')} />
                        <Image source={require('../../../assets/images/logo/Spotify_Logo.png')} />
                        <Image source={require('../../../assets/images/icon/setting.png')} />
                    </View>
                )}

            {/* Render header when tab Playlist */}

            {Nav === "Playlist" && (
                <View style={styles.container}>
                    <Image source={require('../../../assets/images/icon/search.png')} />
                    <Text style={styles.heading}>Playlists</Text>
                    <Image source={require('../../../assets/images/icon/add.png')} />
                </View>
            )}

            {/* Render header when tab History */}

            {Nav === "History" && (
                <View style={styles.container}>
                    <Image source={require('../../../assets/images/icon/search.png')} style={{ opacity: 0 }} />
                    <Text style={styles.heading}>History</Text>
                    <Image source={require('../../../assets/images/icon/moreX.png')} />
                </View>
            )}

            {/* Render header when tab Profil */}

            {Nav === "Profil" && (
                <View style={styles.containerProfil}>
                    <SafeAreaView>
                        <View style={styles.container}>
                            <Image source={require('../../../assets/images/icon/search.png')} style={{ opacity: 0 }} />
                            <Text style={styles.heading}>Profil</Text>
                            <Image source={require('../../../assets/images/icon/moreX.png')} />
                        </View>
                        <View style={styles.wrapInfo}>
                            <Image source={require('../../../assets/images/avatar/avatar.jpg')} style={styles.avatar} />
                            <Text style={styles.infoHeading}>Pham Minh Quang</Text>
                            <Text style={styles.infoEmail}>Email@gmail.com</Text>
                            <View style={styles.infoSocial}>
                                <View style={styles.infoSocialWrap}>
                                    <Text style={styles.infoSocialHeading}>Followers</Text>
                                    <Text style={styles.infoSocialContent}>129</Text>
                                </View>
                                <View style={styles.infoSocialWrap}>
                                    <Text style={styles.infoSocialHeading}>Following</Text>
                                    <Text style={styles.infoSocialContent}>1299</Text>
                                </View>
                            </View>
                        </View>

                    </SafeAreaView>
                </View>
            )}

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        marginHorizontal: 32
    },
    containerProfil: {
        backgroundColor: '#333',
        height: 418,
        borderEndEndRadius: 64,
        borderEndStartRadius: 64
    },

    heading: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    wrapInfo: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        width: 96,
        height: 96,
        borderRadius: 96 / 2,
        textAlign: 'center',
        marginTop: 24,
        marginBottom: 16
    },
    infoHeading: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 4
    },
    infoEmail: {
        fontSize: 14,
        fontWeight: '400',
        color: '#fff',
        marginBottom: 32
    },
    infoSocial: {
        width: 244,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoSocialWrap: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    infoSocialHeading: {
        fontSize: 12,
        color: '#fff',
        marginBottom: 4,
        fontWeight: '400',
    },
    infoSocialContent: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '600',
    }
})

export default Header;
