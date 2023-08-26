import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import WrapAlbum from '../WrapAlbum/WrapAlbum'
const WrapAlbumLayout = () => {

    const todayHits = [
        {
            id: 1,
            title: "ArTi Untuk Cinta",
            desc: "Arsy Widianto, Tiar...",
            pathImg: require('../../../assets/images/banner/Album1.png'),
            playIcon: true,
            type: "medium",
        },
        {
            id: 2,
            title: "Runtuh",
            desc: "Feby Putri, Fiersa B...",
            pathImg: require('../../../assets/images/banner/Album2.png'),
            playIcon: true,
            type: "medium",

        },
        {
            id: 3,
            title: "Blue Jeans",
            desc: "GANGGA",
            pathImg: require('../../../assets/images/banner/Album3.png'),
            playIcon: true,
            type: "medium",

        }
    ]
    return (
        <View style={styles.contentToday}>
            <Text style={[styles.colorText, styles.headerText]} >Today's hit</Text>
            <ScrollView style={styles.wrapAlbum} horizontal={true} showsHorizontalScrollIndicator={false}>
                <WrapAlbum data={todayHits} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    contentToday: {
        marginTop: 30,
        marginLeft: 32
    },
    headerText: {
        fontSize: 24,
        fontWeight: '700'
    },
    wrapAlbum: {
        marginTop: 12,
        flexDirection: 'row',
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

export default WrapAlbumLayout
