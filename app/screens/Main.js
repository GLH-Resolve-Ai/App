// Importing Native components for proper functioning of the app
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

// Importing custom components to better configure the app (styling and back-end)
import Header from '../components/Header'
import colors from '../config/colors'

// Beginning the configuration of the Main screen
const Main = ({ navigation }) => {
    return (
        <><Header title="Resolve aí" />
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}
                        onPress={()=>{navigation.navigate("Blitz")}}
                    >
                        <Text style={styles.buttonText}>Blitz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                        onPress={()=>{navigation.navigate("Clonagem")}}
                    >
                        <Text style={styles.buttonText}>Clonagem</Text>
                    </TouchableOpacity>
                </View>
            </View></>
    );
}

// Style Sheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        width: 120,
        height: 60,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: colors.black,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 24,
    },
})

export default Main