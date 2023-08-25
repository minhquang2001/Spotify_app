import { SafeAreaView, StatusBar, View, Text, Image, ScrollView, useColorScheme, StyleSheet } from 'react-native'
import Header from '../components/Header/Header';
import ListType from '../components/ListType/ListType';
import Footer from '../components/Footer/Footer';
import Separate from '../components/Separate/Separate';
import WrapArtists from '../components/WrapArtists/WrapArtists';
import WrapAlbumsLayout from '../components/WrapAlbumsLayout/WrapAlbumsLayout';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'light';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <SafeAreaView style={styles.backGroundColor}>
      <Header Nav="Home" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.marginLayout}
        showsVerticalScrollIndicator={false}
      >

        {/* Banner */}
        <View style={styles.container}>

          <Image style={styles.banner} source={require("../../assets/images/banner/banner1.png")} />

        </View>

        <WrapAlbumsLayout />

        {/* Header list type */}
        <ListType />

        {/* Box shadow separate */}
        <Separate />

        {/* Wrap Artists Column */}
        <WrapArtists />


      </ScrollView>

      {/* Footer */}
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
