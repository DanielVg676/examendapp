import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";



const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Pantalla de inicio</Text>
            
            <View style={styles.fixToText}>
                <TouchableOpacity 
                    style={[styles.button, { backgroundColor: "#f79327" }]}
                    onPress={() => navigation.navigate('Savings')}
                >
                    <Ionicons name="wallet-outline" size={24} color="white" />
                    <Text style={styles.buttonText}>Ahorros</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.button, { backgroundColor: "#26c6da" }]}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <Ionicons name="person-outline" size={24} color="white" />
                    <Text style={styles.buttonText}>Perfil</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.fixToText}>
                <TouchableOpacity 
                    style={[styles.button, { backgroundColor: "#f79327" }]}
                    onPress={() => navigation.navigate('Config')}
                >
                    <Ionicons name="settings-outline" size={24} color="white" />
                    <Text style={styles.buttonText}>Configuración</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.button, { backgroundColor: "#26c6da" }]}
                    onPress={() => alert("Leave")}
                >
                    <Ionicons name="exit-outline" size={24} color="white" />
                    <Text style={styles.buttonText}>Salir</Text>
                </TouchableOpacity>
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
});

export default HomeScreen;
