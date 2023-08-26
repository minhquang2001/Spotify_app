import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Separate from '../components/Separate/Separate';
import HistoryPlays from '../components/HistoryPlays/HistoryPlays';

function History() {
    return (
        <SafeAreaView style={styles.backGroundColor}>
            <Header Nav="History" />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
            >
                <Separate />
                <HistoryPlays />




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
export default History
