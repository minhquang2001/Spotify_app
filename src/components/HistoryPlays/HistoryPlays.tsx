import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

function HistoryPlays() {
    return (
        <View style={styles.wrapContent}>
            <Text style={styles.colorText}>Heading</Text>
            <View style={styles.wrapHeading}>
                <Image source={require('../../../assets/images/playlists/Playlist1.jpg')} style={styles.imageHeader} />
                <View style={styles.wrapText} >
                    <Text style={styles.colorText}>Heading Playlist</Text>
                    <Text style={styles.colorText}>Sub Playlist</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapContent: {
        marginHorizontal: 32,
        marginTop: 30
    },
    colorText: {
        color: '#fff'
    },

    wrapHeading: {
        flexDirection: 'row',
        marginTop: 16
    },

    imageHeader: {
        width: 80,
        height: 80
    },
    wrapText: {
        marginLeft: 16
    }
})
export default HistoryPlays
