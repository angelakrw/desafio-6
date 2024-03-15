import { StyleSheet, Text, Pressable, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'
import { Entypo } from '@expo/vector-icons'

const CartItem = ({ cartItem }) => {
  return (
    <View style={styles.card} onPress={() => {}}>
        <View style={styles.textContainer}>
            <Text style={styles.title}>{cartItem.title}</Text>
            <Text style={styles.text}>{cartItem.brand}</Text>
            <Text style={styles.text}>${cartItem.price}</Text>
            <Text style={styles.text}>Unidades: {cartItem.quantity}</Text>
        </View>
        <Entypo name='trash' size={30} color={colors.lightGray} />
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    
    card: {
        flex: 1,
        height: 100,
        backgroundColor: colors.green3,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    textContainer: {
        width: "70%",
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },

    title: {
        fontFamily: 'Ubuntu',
        fontSize: 19,
        color: colors.lightGray,
    },

    text: {
        fontFamily: 'Ubuntu',
        fontSize: 14,
        color: colors.lightGray,
    }
})