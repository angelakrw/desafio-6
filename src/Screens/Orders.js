import { FlatList, StyleSheet, Text, View } from 'react-native'
import orders from '../Data/orders.json'
import React from 'react'
import OrderItem from '../Components/OrderItem'

const Orders = () => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={orders}
        renderItem={({item}) => <OrderItem order={item} /> }
        keyExtractor={order => order.id}
        style={styles.list}
      />
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({})