import {StyleSheet, Text, View} from 'react-native'

import React from 'react'

const Header = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de compras</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        padding: 15,
        alignItems: "center",
        height: 60,
        borderRadius: 20,
    },
    titulo: {
        color: 'white',
        fontSize: 20,
    }
})

export default Header