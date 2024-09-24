import { StyleSheet, View, Text, ImageBackground, Pressable, Image, ActivityIndicator } from "react-native";
import background from "../assets/auth_background.jpg";
import * as Font from 'expo-font';
import { useEffect, useState } from "react";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
        
export default function GetStarted({ navigation }) {
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
                "montserrat-black": require("../fonts/Montserrat-Black.ttf")
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
                <View style={styles.subHeading}>
                    <Text style={styles.subHeadingText}>
                        Guiding you, one step closer to your destination
                    </Text>
                </View>
                <View style={styles.loginOrSignup}>
                    <Text style={styles.loginOrSignupText}>
                        login or signup to get started
                    </Text>
                </View>
                <View style={styles.loginOrSignupDivision}>
                    <Pressable
                        style={styles.loginOrSignupDivisionButton}
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={styles.loginOrSignupDivisionButtonText}>LOGIN</Text>
                    </Pressable>
                    <Pressable style={styles.loginOrSignupDivisionButton}>
                        <Text style={styles.loginOrSignupDivisionButtonText}>SIGNUP </Text>
                    </Pressable>
                </View>
                <View style={styles.otherOptions}>
                    <View style={styles.otherOptionsLine}></View>
                    <Text style={styles.otherOptionsText}>or, login with</Text>
                    <View style={styles.otherOptionsLine}></View>
                </View>
                <View style={styles.otherOptionsDivision}>
                    <Pressable style={styles.otherOptionsDivisionButton}>
                        <Image source={google}></Image>
                    </Pressable>
                    <Pressable style={styles.otherOptionsDivisionButton}>
                        <Image source={apple}></Image>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "11%"
    },
    heading: {
        width: "100%",
        justifyContent: "center",
        marginTop: "5%",
        marginBottom: "5%"
    },
    headingText: {
        color: "#333333",
        fontSize: 40,
        letterSpacing: 1,
        fontFamily: "montserrat-bold"
    },
    subHeading: {
        width: "100%",
        justifyContent: "center",
        marginTop: "5%",
        marginBottom: "7%"
    },
    subHeadingText: {
        fontSize: 25,
        letterSpacing: 1,
        fontFamily: "montserrat-regular",
        color: "#333333"
    },
    loginOrSignup: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: "3%",
        marginBottom: "3%"
    },
    loginOrSignupText: {
        color: "#708090",
        fontFamily: "montserrat-regular",
        fontSize: 12
    },
    loginOrSignupDivision: {
        height: "15%",
        width: "100%",
        justifyContent: "space-between",
        paddingTop: "2%",
        paddingBottom: "2%"
    },
    loginOrSignupDivisionButton: {
        width: "100%",
        backgroundColor: "#333333",
        height: "42%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25
    },
    loginOrSignupDivisionButtonText: {
        color: "#ffffff",
        fontFamily: "montserrat-bold",
        fontSize: 16
    },
    otherOptions: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5%",
        marginBottom: "5%",
        flexDirection: "row"
    },
    otherOptionsLine: {
        height: 1,
        width: "40%",
        backgroundColor: "#708090"
    },
    otherOptionsText: {
        color: "#708090",
        fontFamily: "montserrat-regular",
        fontSize: 12
    },
    otherOptionsDivision: {
        height: "5%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    otherOptionsDivisionButton: {
        height: "100%",
        width: "45%",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center"
    }
});
