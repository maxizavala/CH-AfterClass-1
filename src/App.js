import React, {useState} from 'react'
import {
  StyleSheet,
  View
} from 'react-native';

import Header from './components/Header';
import Input from './components/Input';
import List from './components/List';
import VentanaModal from './components/VentanaModal';

const App = () => {

    const [modalVisible, setModalVisible] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)

    const [text, setText] = useState('')

    const onHandlerChangeItem = (t) => {
        setText(t)
    }

    const addItem = (item) => {
        if (item !== '') {
            setItemList([...itemList, {
                id: Math.random().toString(), 
                value: item
            }])
            setText('')
        }
    }

    const showModal = (id) => {
        setSelectedItem(itemList.find(itemList => itemList.id === id))
        setModalVisible(!modalVisible)
    }

    const [itemList, setItemList] = useState([
        {id: 1, value: 'agua'},
        {id: 2, value: 'cerveza'}
    ])

    const deleteItem = (id) => {
        const newList = itemList.filter(itemList => itemList.id !== id)
        setItemList(newList)
        setSelectedItem({})
        setModalVisible(!modalVisible)
    }

    return(
        <View style={styles.container}>
            <Header/>
            <Input
                text={text}
                onHandlerChangeItem={onHandlerChangeItem}
                addItem={addItem}
            />
            <List
                data={itemList}
                showModal={showModal}
            />
            <VentanaModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                selectedItem={selectedItem}
                deleteItem = {deleteItem}
            />
        </View>)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    }
});

export default App;
