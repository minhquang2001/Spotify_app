import React, { useRef } from 'react'
import { View, Text, StyleSheet, ScrollView, Animated, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function Profil() {
    const scrollViewRef = useRef<ScrollView>(null);
    const lastOffsetY = useRef(0);
    const scrollDirection = useRef('');

    // làm lại như các header khác, kèm hiệu ứng làm mờ text

    const animatedValue = useRef(new Animated.Value(0)).current;
    const featureIconAnimation = {
        // transform: [

        //     {
        //         translateY: animatedValue.interpolate({
        //             inputRange: [0, 200],
        //             outputRange: [0, -100],
        //             extrapolate: 'clamp',
        //         }),
        //     },
        // ],
        opacity: animatedValue.interpolate({
            inputRange: [0, 200],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        }),
    };
    const featureWrapAnimation = {
        // transform: [
        //     {
        //       translateY: animatedValue.interpolate({
        //         inputRange: [0, 100],
        //         outputRange: [0, -100],
        //         extrapolate: 'clamp',
        //       }),
        //     },
        //   ],
        opacity: animatedValue.interpolate({
            inputRange: [0, 400],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        }),

    }
    const backGroundColorHeader = {
        backgroundColor: animatedValue.interpolate({
            inputRange: [0, 400],
            outputRange: ["#333", "#0f0e0e"],
            extrapolate: 'clamp',
        })
    }
    return (
        <Animated.View style={[styles.backGroundColor, backGroundColorHeader]}>
            <SafeAreaView style={styles.backGroundContent}>
                <Header Nav="Profile" />
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    showsVerticalScrollIndicator={false}
                    ref={scrollViewRef}

                    onScroll={e => {
                        const offsetY = e.nativeEvent.contentOffset.y;
                        scrollDirection.current =
                            offsetY - lastOffsetY.current > 0 ? 'down' : 'up';
                        lastOffsetY.current = offsetY;
                        animatedValue.setValue(offsetY);
                    }}
                    onScrollEndDrag={() => {
                        scrollViewRef.current?.scrollTo({
                            y: scrollDirection.current === 'down' ? 270 : 0,
                            animated: true,
                        });
                    }}
                    scrollEventThrottle={16}
                >
                    <View style={{ backgroundColor: '#000' }}>
                        <Animated.View style={[styles.containerProfil, featureWrapAnimation,]}>
                            <Animated.View style={[styles.wrapInfo, featureIconAnimation]}>
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
                        </Animated.View>
                        <View style={styles.content}>
                            <Animated.Text >Hello</Animated.Text>
                        </View>
                    </View>

                </ScrollView>

                {/* Footer */}
                <Footer />
            </SafeAreaView>
        </Animated.View>
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
        width: '100%',
        backgroundColor: '#333',
        borderEndEndRadius: 64,
        borderEndStartRadius: 64,
        paddingBottom: 20
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
        backgroundColor: '#333',
        flex: 1,
    },
    backGroundContent: {
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
