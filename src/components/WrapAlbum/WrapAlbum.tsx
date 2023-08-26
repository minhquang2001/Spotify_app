import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const WrapAlbum = ({ data }: any) => {

    return (
        <>
            {data.map((album: any) => (
                <View style={[album.type === "large" ? styles.marginBottom : styles.wrapContentAlbum]} key={album.id}>
                    <View style={styles.wrapImage}>
                        <Image source={album.pathImg} style={[styles.imageAlbum, albumStyles[album.type]]} />
                        {album.playIcon && <Image source={require('../../../assets/images/icon/playAlbum.png')} style={styles.playAlbum} />}
                    </View>
                    <Text style={[album.type === "large" ? styles.headerLarge : styles.headerMedium, styles.colorText]}>{album.title}</Text>
                    <Text style={[album.type === "large" ? styles.subTextLarge : styles.subTextMedium, styles.colorText]}>{album.desc}</Text>
                </View>
            ))}
        </>
    )
}

const albumStyles: any = {
    medium: {
        width: 128,
        height: 128
    },
    large: {
        width: 150,
        height: 150,
    },
    // Add more styles for other types if needed
};
const styles = StyleSheet.create({

    wrapContentAlbum: {
        marginRight: 16
    },
    marginBottom: {
        marginBottom: 32
    },
    wrapImage: {
        marginBottom: 8
    },
    imageAlbum: {
        borderRadius: 12
    },
    playAlbum: {
        position: 'absolute',
        right: 8,
        bottom: 8
    },



    headerLarge: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24
    },
    headerMedium: {
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 20
    },
    subTextLarge: {
        fontSize: 14,
        lineHeight: 20
    },
    subTextMedium: {
        fontSize: 12,
        lineHeight: 20
    },
    colorText: {
        color: '#fff'
    },
})

export default WrapAlbum
