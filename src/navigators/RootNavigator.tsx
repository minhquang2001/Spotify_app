import { Text, View, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screen/HomeScreen'
import Playlists from '../screen/Playlists'
import History from '../screen/History'
import Profil from '../screen/Profil'

export type RootStackParams = {
    Home: any;
    Playlists: any;
    History: any;
    Profil: any
}

const RootStack = createStackNavigator<RootStackParams>()
const RootNavigator = () => {
    return (

        <NavigationContainer>
            <RootStack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="Home">
                <RootStack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="Playlists"
                    component={Playlists}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="History"
                    component={History}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="Profil"
                    component={Profil}
                    options={{ headerShown: false }}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator