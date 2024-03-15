import { StyleSheet, FlatList, Text, Pressable, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import AllCartItems from '../Data/cart.json'
import CartItem from '../Components/CartItem'
import { colors } from '../Global/colors'
import { useSelector } from 'react-redux'
import cartReducer from '../features/cart/cartSlice'

const Cart = () => {

  const cartItems = useSelector(state => state.cartReducer.value.items)
  const total = useSelector(state => state.cartReducer.total)

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (<CartItem cartItem={item} />) }
      />

      <View style={styles.confirmContainer}>
        <Pressable>
          <Text style={styles.confirmText}>Confirm</Text>
        </Pressable>
        <Text style={styles.confirmText}>Total: ${total} </Text>
      </View>
      
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingBottom: 130,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.lightGray
  },

  list: {
    width: '100%'
  },

  confirmContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'gray',
    padding: 15,
    width: '100%'
  },

  confirmText: {
    fontFamily: 'Ubuntu',
    fontSize: 18,
    color: 'white'
  }

})