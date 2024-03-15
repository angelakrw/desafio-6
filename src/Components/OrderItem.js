import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import React from 'react'
import { colors } from '../Global/colors'

const OrderItem = ({ order }) => {

    const total = order.items.reduce(
        (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
        0
    )

  return (
    <View style={styles.card} onPress={() => {}}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>
                {new Date(order.createdAt).toLocaleString()}
            </Text>
            <Text style={styles.price}>${total} </Text>
        </View>
        <Feather name='search' size={30} color='black' />
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
    
    card: {
        flex: 1,
        height: 100,
        backgroundColor: colors.lightGray,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },

    textContainer: {
        width: '70%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    text: {
        fontFamily: 'Ubuntu',
        fontSize: 17,
        color: 'black',
    },

    price: {
        fontFamily: 'Ubuntu',
        fontSize: 19,
    }
})