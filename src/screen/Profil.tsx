import React, { useRef } from 'react'
import { View, Text, StyleSheet, ScrollView, Animated, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { translate } from '@shopify/react-native-skia';

function Profil() {

    // làm lại như các header khác, kèm hiệu ứng làm mờ text
    
    const animatedValue = useRef(new Animated.Value(0)).current;
    const featureIconAnimation = {
        transform: [

            {
                translateY: animatedValue.interpolate({
                    inputRange: [0, 200],
                    outputRange: [0, -100],
                    extrapolate: 'clamp',
                }),
            },
        ],
        opacity: animatedValue.interpolate({
            inputRange: [0, 200],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        }),
    };
    return (
        <View style={styles.backGroundColor}>
            <Header Nav="Profile" />

            <SafeAreaView>

                <View style={styles.upperHeader} />
            </SafeAreaView>
            <SafeAreaView style={[styles.containerProfil, { transform: [{ translateY: 0 }] }]}>
                <View style={styles.container}>
                    <Image source={require('../../assets/images/icon/search.png')} style={{ opacity: 0 }} />
                    <Text style={styles.heading}>Profil</Text>
                    <Image source={require('../../assets/images/icon/moreX.png')} />
                </View>
                <Animated.View style={[styles.wrapInfo, featureIconAnimation, { transform: [{ translateY: 0 }] }]}>
                    <Animated.Image source={require('../../assets/images/avatar/avatar.jpg')} style={[styles.avatar, featureIconAnimation]} />
                    <Animated.Text style={[styles.infoHeading, featureIconAnimation]}>Pham Minh Quang</Animated.Text>
                    <Animated.Text style={[styles.infoEmail, featureIconAnimation]}>Email@gmail.com</Animated.Text>
                    <Animated.View style={[styles.infoSocial, featureIconAnimation]}>
                        <View style={styles.infoSocialWrap}>
                            <Text style={styles.infoSocialHeading}>Followers</Text>
                            <Text style={styles.infoSocialContent}>129</Text>
                        </View>
                        <View style={styles.infoSocialWrap}>
                            <Text style={styles.infoSocialHeading}>Following</Text>
                            <Text style={styles.infoSocialContent}>1299</Text>
                        </View>
                    </Animated.View>
                </Animated.View>
            </SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
                onScroll={e => {
                    const offsetY = e.nativeEvent.contentOffset.y
                    animatedValue.setValue(offsetY)
                }}
                scrollEventThrottle={16}
            >

                <View style={styles.spaceForHeader} />
                <View style={styles.content}>
                    <Animated.Text >Hello</Animated.Text>
                </View>

            </ScrollView>

            {/* Footer */}
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    upperHeader: {
        height: 30,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        paddingHorizontal: 32,
        zIndex: 99,
        backgroundColor: '#333',

    },
    containerProfil: {
        position: 'absolute',
        width: '100%',
        backgroundColor: '#333',
        borderEndEndRadius: 64,
        borderEndStartRadius: 64,
    },

    heading: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    wrapInfo: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        width: 96,
        height: 96,
        borderRadius: 96 / 2,
        textAlign: 'center',
        marginTop: 24,
        marginBottom: 16
    },
    infoHeading: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 4
    },
    infoEmail: {
        fontSize: 14,
        fontWeight: '400',
        color: '#fff',
        marginBottom: 32
    },
    infoSocial: {
        width: 244,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoSocialWrap: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    infoSocialHeading: {
        fontSize: 12,
        color: '#fff',
        marginBottom: 4,
        fontWeight: '400',
    },
    infoSocialContent: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '600',
    },
    backGroundColor: {
        backgroundColor: '#0f0e0e',
        flex: 1,
    },
    spaceForHeader: {
        height: 298,

    },
    content: {
        height: 1000,
        backgroundColor: 'white'
    }
})
export default Profil
