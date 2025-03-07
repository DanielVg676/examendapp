import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SavingsScreen = () => {
    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count + 10)
    };
    const reset = () =>{
        setCount(0)
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ahorros</Text>

            <Text style={styles.text}>${count}</Text>
            
            <View style={styles.fixToText}>
                <TouchableOpacity style={[styles.button, { backgroundColor: "#4CAF50" }]} onPress={increment} >
                    <Ionicons name="cash-outline" size={24} color="white" />
                    <Text style={styles.buttonText}>Ahorrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, { backgroundColor: "#e4491c" }]}onPress={reset} >
                    <Ionicons name="card-outline" size={24} color="white" />
                    <Text style={styles.buttonText}>Retirar</Text>
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

export default SavingsScreen;
