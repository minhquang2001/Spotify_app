import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import WrapPlaylists from '../components/Playlists/WrapPlaylists/WrapPlaylists';

function Playlists() {
    return (
        <SafeAreaView style={styles.backGroundColor}>
            <Header Nav="Playlist" />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
            >
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
})
export default Playlists
