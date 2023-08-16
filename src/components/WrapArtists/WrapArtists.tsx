import { Image, StyleSheet, Text, View } from 'react-native'

const artists = [
    {
        id: 1,
        name: 'Adele',
        totalLisners: '43,877,516 monthly listeners',
        pathImg: require('../../../assets/images/artists/Adele.png')
    },
    {
        id: 2,
        name: 'Tiara Andini',
        totalLisners: '38,782,341 monthly listeners',
        pathImg: require('../../../assets/images/artists/Tiara.png')
    },
    {
        id: 3,
        name: 'Tulus',
        totalLisners: '32,908,713 monthly listeners',
        pathImg: require('../../../assets/images/artists/Tulus.png')
    },
]
const WrapArtists = () => {
    return (
        <View style={styles.container}>
            {artists.map((artist) => (
                <View style={styles.wrapBox} key={artist.id}>
                    <View style={styles.wrapImg}>
                        <Image source={artist.pathImg} style={{ borderRadius: 50 }} />
                    </View>
                    <View style={styles.wrapContent}>
                        <View style={styles.wrapText}>
                            <Text style={[styles.text, styles.heading]}>{artist.name}</Text>
                            <Text style={styles.text}>{artist.totalLisners}</Text>
                        </View>
                        <Image source={require('../../../assets/images/icon/vector.png')} />
                    </View>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginTop: 4
    },
    wrapBox: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 12
    },
    wrapImg: {
        width: '20%',
    },
    wrapContent: {
        paddingLeft: 32,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    wrapText: {
        // flexDirection: 'row'
    },
    heading: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 8
    },
    text: {
        color: '#fff',
        fontSize: 12
    }
})
export default WrapArtists
