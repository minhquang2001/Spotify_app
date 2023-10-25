import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import WrapPlaylists from '../components/Playlists/WrapPlaylists/WrapPlaylists';
import Separate from '../components/Separate/Separate';

function Playlists() {
    return (
        <SafeAreaView style={styles.backGroundColor}>
            <Header Nav="Playlist" />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.marginLayout}
                showsVerticalScrollIndicator={false}
            >
                <Separate />

                <WrapPlaylists />



            </ScrollView>

            {/* Footer */}
            <Footer />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    backGroundColor: {
        backgroundColor: '#0f0e0e',
        flex: 1,
    },
    marginLayout: {
        marginBottom: 73
    },
})
export default Playlists
