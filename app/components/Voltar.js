import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import colors from '../config/colors'

const Voltar = ({navigation}) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={()=>{navigation.goBack()}}
        >
            <Text>Voltar</Text>
        </TouchableOpacity>
    )
}

export default Voltar

const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.orange,
        borderRadius: 40,
        position: 'absolute',
        bottom: 20,
    },
})