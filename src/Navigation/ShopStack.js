import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../Screens/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ItemListCategories from '../Screens/ItemListCategories'
import ItemDetail from '../Screens/ItemDetail'
import Header from '../Components/Header'

const Stack = createNativeStackNavigator()

const ShopStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Home'
        screenOptions={
            ({route, navigation}) => (
                {
                    header: () => {
                        return <Header title={
                            route.name === 'Home' ? 'Categories':
                            route.name === 'ItemListCategory' ? route.params.category:
                            'Detail'
                        }
                        navigation={navigation}/>
                    }
                }
            )
        }
    >
        <Stack.Screen
            name='Home'
            component={Home}
        />

        <Stack.Screen
            name='ItemListCategory'
            component={ItemListCategories}
        />

        <Stack.Screen
            name='Detail'
            component={ItemDetail}
        />
    </Stack.Navigator>
  )
}

export default ShopStack

const styles = StyleSheet.create({})