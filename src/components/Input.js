import {Button, StyleSheet, TextInput, View} from 'react-native'

import React from 'react'

const Input = (props) => {

    const {text, onHandlerChangeItem, addItem} = props

    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Ingresa un articulo'
                value={text}
                onChangeText={onHandlerChangeItem}
            />
            <Button
                title="Agregar"
                color="grey"
                onPress={() => addItem(text)}
            />
        </View>
    )   
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 25
    },
    input: {
        borderColor: "black",
        borderWidth: 1,
        width: '75%',
    }
})

export default Input