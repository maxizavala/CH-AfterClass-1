import {FlatList, Text, TouchableOpacity, View} from 'react-native'

import React from 'react'

const List = (props) => {


    const {data, showModal} = props

    return(
        <View>
            <FlatList
                style={styles.container}
                data={data}
                keyExtractor={ item => item.id.toString() }
                renderItem={ ({item}) => (
                    <TouchableOpacity onPress={() => showModal(item.id)}>
                        <Text style={{fontSize: 25}}> - {item.value} </Text>
                    </TouchableOpacity>
                ) }
            />
        </View>
    )

}

const styles = {
    container: {
        padding: 25
    }
}

export default List