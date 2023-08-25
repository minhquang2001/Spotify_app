import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function History() {
    return (
        <SafeAreaView style={styles.backGroundColor}>
            <Header />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
            >




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
