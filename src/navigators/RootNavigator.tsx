import { Text, View, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'
import HomeScreen from '../screen/HomeScreen'


const RootStack = createNativeStackNavigator()
const RootNavigator = () => {
    return (

        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                {/* <RootStack.Screen name="Profile" component={ProfileScreen} /> */}
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator