import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Orders from '../Screens/Orders'
import Header from '../Components/Header'

const Stack = createNativeStackNavigator()

const OrdersStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Orders'
        screenOptions={{
            header: () => <Header title='Orders'/>
        }}
    >
        <Stack.Screen name='Orders' component={Orders}/>

    </Stack.Navigator>
  )
}

export default OrdersStack