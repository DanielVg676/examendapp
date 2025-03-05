import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";



const UserProfileScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Pantalla de inicio</Text>
            
            <View style={styles.fixToText}>
                <TouchableOpacity 
                    style={[styles.button, { backgroundColor: "#e4491c" }]}
                    onPress={() => navigation.navigate('Savings')}
                >
                    <Ionicons name="wallet-outline" size={24} color="white" />
                    <Text style={styles.buttonText}>Ahorros</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.button, { backgroundColor: "#2c85c0" }]}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <Ionicons name="person-outline" size={24} color="white" />
                    <Text style={styles.buttonText}>Perfil</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.fixToText}>
                <TouchableOpacity 
                    style={[styles.button, { backgroundColor: "#4CAF50" }]}
                    onPress={() => alert("Configuration")}
                >
                    <Ionicons name="settings-outline" size={24} color="white" />
                    <Text style={styles.buttonText}>Configuración</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.button, { backgroundColor: "#D32F2F" }]}
                    onPress={() => alert("Leave")}
                >
                    <Ionicons name="exit-outline" size={24} color="white" />
                    <Text style={styles.buttonText}>Salir</Text>
                </TouchableOpacity>
            </View>

            <StatusBar style="light" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#538a95',
        paddingHorizontal: 16,
    },
    text: {
        fontSize: 30,
        color: 'white',
        marginBottom: 20,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 10,
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

export default UserProfileScreen;
