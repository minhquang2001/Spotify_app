import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import WrapAlbum from '../../WrapAlbum/WrapAlbum'
const WrapPlaylists = () => {

    const todayHits = [
        {
            id: 1,
            title: "ArTi Untuk Cinta",
            desc: "Arsy Widianto, Tiar...",
            pathImg: require('../../../../assets/images/playlists/Playlist1.jpg'),
            playIcon: false,
            type: "large",
        },
        {
            id: 2,
            title: "Runtuh",
            desc: "Feby Putri, Fiersa B...",
            pathImg: require('../../../../assets/images/playlists/Playlist1.jpg'),
            playIcon: false,
            type: "large",

        },
        {
            id: 3,
            title: "Blue Jeans",
            desc: "GANGGA",
            pathImg: require('../../../../assets/images/playlists/Playlist1.jpg'),
            playIcon: false,
            type: "large",

        },
        {
            id: 4,
            title: "ArTi Untuk Cinta",
            desc: "Arsy Widianto, Tiar...",
            pathImg: require('../../../../assets/images/playlists/Playlist1.jpg'),
            playIcon: false,
            type: "large",
        },
        {
            id: 5,
            title: "Runtuh",
            desc: "Feby Putri, Fiersa B...",
            pathImg: require('../../../../assets/images/playlists/Playlist1.jpg'),
            playIcon: false,
            type: "large",

        },
        {
            id: 6,
            title: "Blue Jeans",
            desc: "GANGGA",
            pathImg: require('../../../../assets/images/playlists/Playlist1.jpg'),
            playIcon: false,
            type: "large",

        }
    ]
    return (
        <View style={styles.contentToday}>
            <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
                <View style={styles.wrapAlbum}>
                    <WrapAlbum data={todayHits} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    contentToday: {
        marginTop: 30,
        marginHorizontal: 32
    },
    headerText: {
        fontSize: 24,
        fontWeight: '700'
    },
    wrapAlbum: {
        marginTop: 12,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    wrapContentAlbum: {
        marginRight: 16
    },
    wrapImage: {
        marginBottom: 8
    },
    imageAlbum: {
        height: 128,
        width: 128,
        borderRadius: 10
    },
    playAlbum: {
        position: 'absolute',
        right: 8,
        bottom: 8
    },
    headerAlbum: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20
    },
    authorAlbum: {
        fontSize: 12,
        lineHeight: 20
    },
    colorText: {
        color: '#fff'
    },
})

export default WrapPlaylists
