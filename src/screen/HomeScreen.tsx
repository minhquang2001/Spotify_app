import { SafeAreaView, StatusBar, View, Text, Image, ScrollView, useColorScheme, StyleSheet } from 'react-native'
import Header from '../components/Header/Header';
import ListType from '../components/ListType/ListType';
import Footer from '../components/Footer/Footer';
import Separate from '../components/Separate/Separate';
import WrapArtists from '../components/WrapArtists/WrapArtists';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'light';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <SafeAreaView style={styles.backGroundColor}>
      <Header />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.marginLayout}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View
            style={
              styles.backGroundColor
            }>
            <Image style={styles.banner} source={require("../../assets/images/banner/banner1.png")} />
            <View style={styles.contentToday}>
              <Text style={[styles.colorText, styles.headerText]} >Today's hit</Text>
              <ScrollView style={styles.wrapAlbum} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.wrapContentAlbum}>
                  <View style={styles.wrapImage}>
                    <Image source={require('../../assets/images/banner/Album1.png')} style={styles.imageAlbum} />
                    <Image source={require('../../assets/images/icon/playAlbum.png')} style={styles.playAlbum} />
                  </View>
                  <Text style={[styles.headerAlbum, styles.colorText]}>ArTi Untuk Cinta</Text>
                  <Text style={[styles.authorAlbum, styles.colorText]}>Arsy Widianto, Tiar...</Text>
                </View>
                <View style={styles.wrapContentAlbum}>
                  <View style={styles.wrapImage}>
                    <Image source={require('../../assets/images/banner/Album1.png')} style={styles.imageAlbum} />
                    <Image source={require('../../assets/images/icon/playAlbum.png')} style={styles.playAlbum} />
                  </View>
                  <Text style={[styles.headerAlbum, styles.colorText]}>ArTi Untuk Cinta</Text>
                  <Text style={[styles.authorAlbum, styles.colorText]}>Arsy Widianto, Tiar...</Text>
                </View>
                <View style={styles.wrapContentAlbum}>
                  <View style={styles.wrapImage}>
                    <Image source={require('../../assets/images/banner/Album1.png')} style={styles.imageAlbum} />
                    <Image source={require('../../assets/images/icon/playAlbum.png')} style={styles.playAlbum} />
                  </View>
                  <Text style={[styles.headerAlbum, styles.colorText]}>ArTi Untuk Cinta</Text>
                  <Text style={[styles.authorAlbum, styles.colorText,]}>Arsy Widianto, Tiar...</Text>
                </View>
              </ScrollView>
            </View>
          </View>


        </View>


        <ListType />
        <Separate />
        <WrapArtists />
      </ScrollView>
      <Footer />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backGroundColor: {
    backgroundColor: '#0f0e0e',
    flex: 1,
  },
  marginLayout: {
    // marginTop: 20
  },
  container: {
    marginHorizontal: 25,

  },
  banner: {
    width: '100%'
  },
  colorText: {
    color: '#fff'
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700'
  },
  contentToday: {
    marginTop: 30

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
  }
});

export default HomeScreen;
