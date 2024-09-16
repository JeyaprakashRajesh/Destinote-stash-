import {
    StyleSheet,
    View,
    Text,
    TextInput,
    ImageBackground,
    Pressable,
    Image,
    ActivityIndicator,
} from "react-native";
import background from "../assets/auth_background.jpg";
import { useState, useEffect } from "react";
import * as Font from "expo-font";

export default function Login() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                "poppins-regular": require("../fonts/Poppins-Regular.ttf"),
                "poppins-semibold": require("../fonts/Poppins-SemiBold.ttf"),
                "poppins-bold": require("../fonts/Poppins-Bold.ttf"),
                "poppins-extrabold": require("../fonts/Poppins-ExtraBold.ttf"),
                "montserrat-regular": require("../fonts/Montserrat-Regular.ttf"),
                "montserrat-bold": require("../fonts/Montserrat-Bold.ttf"),
                "montserrat-semibold": require("../fonts/Montserrat-SemiBold.ttf"),
                "montserrat-extrabold": require("../fonts/Montserrat-ExtraBold.ttf"),
                "montserrat-black": require("../fonts/Montserrat-Black.ttf"),
            });
            setFontsLoaded(true);
        };

        loadFonts();
    }, []);
    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }
    return (
        <ImageBackground source={background} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.heading}>
                    <Text style={styles.headingText}>Destinote</Text>
                </View>
                <View style={styles.heading}>
                    <Text style={styles.headingText}>LOGIN</Text>
                </View>
                <View style={styles.textInput}>
                    <Text style={styles.textInputText}>EMAIL</Text>
                    <TextInput style={styles.textInputBox}></TextInput>
                </View>
                <View style={styles.textInput}>
                    <Text style={styles.textInputText}>PASSWORD</Text>
                    <TextInput style={styles.textInputBox}></TextInput>
                </View>
                <Pressable style={styles.login}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </Pressable>
                <View style={styles.forgotPassword}> 
                    <Text style={styles.forgotPasswordText}>forgot password ?</Text>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "11%",
    },
    heading: {
        width: "100%",
        justifyContent: "center",
        marginTop: "5%",
        marginBottom: "5%",
    },
    headingText: {
        color: "#333333",
        fontSize: 40,
        letterSpacing: 1,
        fontFamily: "montserrat-bold",
    },
    textInput: {
        width: "100%",
        marginTop: "6%",
        marginBottom: "6%",
    },
    textInputText: {
        color: "#708090",
        fontFamily: "montserrat-regular",
    },
    textInputBox: {
        width: "100%",
        height: 50,
        backgroundColor: "#E3E3E3",
        borderColor: "#333333",
        borderRadius: 10,
        borderWidth: 2,
    },
    login: {
        width : "100%",
        height : 50,
        backgroundColor: "#333333",
        alignItems: "center",
        justifyContent : "center",
        borderRadius : 25,
        marginTop : "6%",
        marginBottom: "6%"
    },
    loginText: {
        color : "#ffffff",
        fontFamily : "montserrat-bold",
        fontSize: 16
    },
    forgotPassword : {
        width : "100%",
        alignItems : "center",
        marginTop : "2%",
        marginBottom : "10%"
    },
    forgotPasswordText: {
        color : "#708090",
        fontFamily : "montserrat-regular",
        
    }
});
