import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

function HistoryPlays() {
    return (
        <View style={styles.wrapScreen}>
            <View style={styles.wrapContent}>
                <Text style={[styles.colorText, styles.headingContent]}>Heading</Text>
                <View style={styles.wrapHeading}>
                    <Image source={require('../../../assets/images/playlists/Playlist1.jpg')} style={[styles.imageHeader, styles.styleImg]} />
                    <View style={styles.wrapText} >
                        <Text style={[styles.colorText, styles.headingPlaylist]}>Heading Playlist</Text>
                        <Text style={[styles.colorText, styles.subPlaylist]}>Sub Playlist</Text>
                    </View>
                </View>
                <View style={styles.wrapList}>

                    <View style={styles.wrapListChild}>
                        <View style={styles.wrapContentChild}>
                            <Image source={require('../../../assets/images/playlists/Playlist1.jpg')} style={[styles.imageChild, styles.styleImg]} />
                            <View style={styles.wrapText} >
                                <Text style={[styles.colorText, styles.headingPlaylist]}>Heading Playlist</Text>
                                <Text style={[styles.colorText, styles.subPlaylist]}>Sub Playlist</Text>
                            </View>
                        </View>
                        <Image source={require('../../../assets/images/icon/moreY.png')} />
                    </View>
                    <View style={styles.wrapListChild}>
                        <View style={styles.wrapContentChild}>
                            <Image source={require('../../../assets/images/playlists/Playlist1.jpg')} style={[styles.imageChild, styles.styleImg]} />
                            <View style={styles.wrapText} >
                                <Text style={[styles.colorText, styles.headingPlaylist]}>Heading Playlist</Text>
                                <Text style={[styles.colorText, styles.subPlaylist]}>Sub Playlist</Text>
                            </View>
                        </View>
                        <Image source={require('../../../assets/images/icon/moreY.png')} />
                    </View>
                    <View style={styles.wrapBottomChild}>
                        <Text style={[styles.colorText, styles.playedAll]}>See all 28 played</Text>
                        <Image source={require('../../../assets/images/icon/vector.png')} />
                    </View>
                </View>
            </View>

            <View>
                <Text style={[styles.colorText, styles.headingContent]}>Heading</Text>
                <View style={styles.wrapHeading}>
                    <Image source={require('../../../assets/images/playlists/Playlist1.jpg')} style={[styles.imageHeader, styles.styleImg]} />
                    <View style={styles.wrapText} >
                        <Text style={[styles.colorText, styles.headingPlaylist]}>Heading Playlist</Text>
                        <Text style={[styles.colorText, styles.subPlaylist]}>Sub Playlist</Text>
                    </View>
                </View>
                <View style={styles.wrapList}>

                    <View style={styles.wrapListChild}>
                        <View style={styles.wrapContentChild}>
                            <Image source={require('../../../assets/images/playlists/Playlist1.jpg')} style={[styles.imageChild, styles.styleImg]} />
                            <View style={styles.wrapText} >
                                <Text style={[styles.colorText, styles.headingPlaylist]}>Heading Playlist</Text>
                                <Text style={[styles.colorText, styles.subPlaylist]}>Sub Playlist</Text>
                            </View>
                        </View>
                        <Image source={require('../../../assets/images/icon/moreY.png')} />
                    </View>
                    <View style={styles.wrapListChild}>
                        <View style={styles.wrapContentChild}>
                            <Image source={require('../../../assets/images/playlists/Playlist1.jpg')} style={[styles.imageChild, styles.styleImg]} />
                            <View style={styles.wrapText} >
                                <Text style={[styles.colorText, styles.headingPlaylist]}>Heading Playlist</Text>
                                <Text style={[styles.colorText, styles.subPlaylist]}>Sub Playlist</Text>
                            </View>
                        </View>
                        <Image source={require('../../../assets/images/icon/moreY.png')} />
                    </View>
                    <View style={styles.wrapBottomChild}>
                        <Text style={[styles.colorText, styles.playedAll]}>See all 28 played</Text>
                        <Image source={require('../../../assets/images/icon/vector.png')} />
                    </View>
                </View>
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    wrapScreen: {
        marginHorizontal: 32,
        marginTop: 30,
        marginBottom: 20
    },
    wrapContent: {
        marginBottom: 36
    },
    colorText: {
        color: '#fff'
    },
    headingContent: {
        fontSize: 24,
        fontWeight: '600'
    },
    headingPlaylist: {
        fontSize: 18,
        fontWeight: '600'
    },
    subPlaylist: {
        fontSize: 16
    },

    wrapHeading: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16
    },

    wrapList: {
        marginLeft: 16
    },
    wrapListChild: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    wrapContentChild: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8
    },
    wrapBottomChild: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16

    },

    styleImg: {
        borderRadius: 12
    },
    imageHeader: {
        width: 80,
        height: 80
    },
    imageChild: {
        width: 64,
        height: 64
    },
    wrapText: {
        marginLeft: 16
    },
    playedAll: {
        fontSize: 14,
        fontWeight: '600'
    }
})
export default HistoryPlays
