// Importing Native components for proper functioning of the app
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// Importing custom components to better configure the app (styling and back-end)
import Header from '../components/Header'
import Voltar from '../components/Voltar'

// Beginning the configuration of the Main screen
const Blitz = ({ navigation }) => {

    return (
        <><Header title="Blitz" />
            <View style={styles.container}>
                <Text>Saiba Mais</Text>
                <Voltar navigation={navigation} />
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
})

export default Blitz