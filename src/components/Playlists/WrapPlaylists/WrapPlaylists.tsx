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
            pathImg: require('../../../../assets/images/playlists/Playlist2.jpg'),
            playIcon: false,
            type: "large",

        },
        {
            id: 3,
            title: "Blue Jeans",
            desc: "GANGGA",
            pathImg: require('../../../../assets/images/playlists/Playlist3.jpg'),
            playIcon: false,
            type: "large",

        },
        {
            id: 4,
            title: "ArTi Untuk Cinta",
            desc: "Arsy Widianto, Tiar...",
            pathImg: require('../../../../assets/images/playlists/Playlist4.jpg'),
            playIcon: false,
            type: "large",
        },
        {
            id: 5,
            title: "Runtuh",
            desc: "Feby Putri, Fiersa B...",
            pathImg: require('../../../../assets/images/playlists/Playlist5.jpg'),
            playIcon: false,
            type: "large",

        },
        {
            id: 6,
            title: "Blue Jeans",
            desc: "GANGGA",
            pathImg: require('../../../../assets/images/playlists/Playlist6.jpg'),
            playIcon: false,
            type: "large",

        }
    ]
    return (
        <View style={styles.content}>
            <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
                <View style={styles.wrapAlbum}>
                    <WrapAlbum data={todayHits} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 30,
        marginHorizontal: 32
    },
    wrapAlbum: {
        marginTop: 12,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
})

export default WrapPlaylists
