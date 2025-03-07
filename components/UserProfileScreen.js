import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const UserProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require("../assets/7d753abc69dbf8e7b6e64487246e9f62.jpg")} style={styles.image} />
            <Text style={styles.text}>Usuario Pepito</Text>
            
            <View style={styles.fixToText}>
                <View style={[styles.button, { backgroundColor: "#F76C6C" }]}>
                    <Ionicons name="person-outline" size={24} color="white" />
                    <Text style={styles.buttonText}>Nombre</Text>
                </View>
                <View style={[styles.button, { backgroundColor: "#00A896" }]}>
                    <Text style={styles.buttonText}>Daniel</Text>
                </View>
            </View>

            <View style={styles.fixToText}>
                <View style={[styles.button, { backgroundColor: "#F76C6C" }]}>
                    <Ionicons name="id-card-outline" size={24} color="white" />
                    <Text style={styles.buttonText}>Apellido</Text>
                </View>
                <View style={[styles.button, { backgroundColor: "#00A896" }]}>
                    <Text style={styles.buttonText}>Villarreal</Text>
                </View>
            </View>

            <View style={styles.fixToText}>
                <View style={[styles.button, { backgroundColor: "#F76C6C" }]}>
                    <Ionicons name="mail-outline" size={24} color="white" />
                    <Text style={styles.buttonText}>Email</Text>
                </View>
                <View style={[styles.button, { backgroundColor: "#00A896" }]}>
                    <Text style={styles.buttonText}>dv9565@gmail.com</Text>
                </View>
            </View>

            <View style={styles.fixToText}>
                <View style={[styles.button, { backgroundColor: "#F76C6C" }]}>
                    <Ionicons name="call-outline" size={24} color="white" />
                    <Text style={styles.buttonText}>Número</Text>
                </View>
                <View style={[styles.button, { backgroundColor: "#00A896" }]}>
                    <Text style={styles.buttonText}>618-156-3424</Text>
                </View>
            </View>

            <StatusBar style="black" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2A2D34',
        paddingHorizontal: 16,
    },
    text: {
        fontSize: 30,
        color: 'white',
        marginBottom: 20,
        marginTop: 20,
        fontWeight: "bold",
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: "#3E4C59",
        borderRadius: 15,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 170,
        height: 50,
        paddingVertical: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: "contain",
        borderRadius: 100,
        borderWidth: 3,
        borderColor: "#00A896",
    },
});

export default UserProfileScreen;
