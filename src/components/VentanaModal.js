import {Button, Modal, StyleSheet, Text, View} from 'react-native'

import React from 'react'

const VentanaModal = (props) => {

    const {modalVisible, setModalVisible, selectedItem, deleteItem } = props

    return(
        <Modal
        animationType='slide'
        visible={modalVisible}
        transparent
        >
        
        <View style={style.modalContainer}>
            <View style={[style.modalContent, style.shadow]}>
                <Text>Estas seguro de querer borrar el item?</Text>
                <View style={style.buttonContainer}>
                    <Button
                        title="SI"
                        color="black"
                        onPress={() => deleteItem(selectedItem.id)}
                    />
                    <Button
                        title="NO"
                        color="black"
                        onPress={() => setModalVisible(false)}
                    />
                </View>
            </View>
        </View>

    </Modal>
    )     
    
}

const style = StyleSheet.create({
    modalContainer: {
        flex: 1,
        aligItems: 'center',
        justifyContent: 'center'
    },
    modalContent: {
        padding: 30,
        backgroundColor: 'orange',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        overflow: 'hidden'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonContainer: {
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10,
    }
})

export default VentanaModal