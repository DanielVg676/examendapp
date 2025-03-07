import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ConfigScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Configuración</Text>
            
            <View style={styles.fixToText}>
                <TouchableOpacity 
                    style={[styles.button, { backgroundColor: "#e4491c" }]}
                    onPress={() => alert("Cambiando el tema")}
                >
                    <Ionicons name="color-palette-outline" size={24} color="white" />
                    <Text style={styles.buttonText}>Cambiar Tema</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.fixToText}>
                <TouchableOpacity 
                    style={[styles.button, { backgroundColor: "#4CAF50" }]}
                    onPress={() => alert("Cambiando Idioma")}
                >
                    <Ionicons name="globe-outline" size={24} color="white" />
                    <Text style={styles.buttonText}>Idioma</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.fixToText}>
                <TouchableOpacity 
                    style={[styles.button, { backgroundColor: "#FFC107" }]}
                    onPress={() => alert("Cambiando contraseña")}
                >
                    <Ionicons name="key-outline" size={24} color="white" />
                    <Text style={styles.buttonText}>Cambiar Contraseña</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.fixToText}>
                <TouchableOpacity 
                    style={[styles.button, { backgroundColor: "#D32F2F" }]}
                    onPress={() => alert("Cerrando sesión")}
                >
                    <Ionicons name="log-out-outline" size={24} color="white" />
                    <Text style={styles.buttonText}>Cerrar Sesión</Text>
                </TouchableOpacity>
            </View>

            <StatusBar style="black" hidden={false} />
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
        width: 210,
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

export default ConfigScreen;
