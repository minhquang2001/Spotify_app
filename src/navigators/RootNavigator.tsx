import { Text, View, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen'
import Playlists from '../screen/Playlists'
import History from '../screen/History'
import Profil from '../screen/Profil'
import Footer from '../components/Footer/Footer';

export type RootStackParams = {
    Home: any;
    Playlists: any;
    History: any;
    Profil: any
}

const RootStack = createStackNavigator<RootStackParams>()
const Tab = createBottomTabNavigator<RootStackParams>();
const RootNavigator = () => {
    return (

        <NavigationContainer>


            <Tab.Navigator
                tabBar={() => <Footer />}

            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name="Playlists"
                    component={Playlists}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name="History"
                    component={History}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name="Profil"
                    component={Profil}
                    options={{ headerShown: false }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
RootNavigator.navigationOptions = {
    tabBarVisible: false, // Hide the bottom tab bar in this screen
};
export default RootNavigator