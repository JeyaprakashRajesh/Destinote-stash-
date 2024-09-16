import { View, Text, ImageBackground } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "../components/getStarted";
import Login from "../components/login";
import Signup from "../components/signup";
import background from "../assets/auth_background.jpg";

const Stack = createNativeStackNavigator();

export default function AuthScreen() {
    return (

        <Stack.Navigator
            initialRouteName="GetStarted"
            screenOptions={{
                headerShown: false,
            }}

        >
            <Stack.Screen name="GetStarted" component={GetStarted} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    );
}
