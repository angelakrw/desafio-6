import { StyleSheet, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import ShopStack from './ShopStack'
import OrdersStack from './OrdersStack'
import CartStack from './CartStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { colors } from '../Global/colors'
import TabBarIcon from '../Components/TabBarIcon'

const Tab = createBottomTabNavigator()

const Navigator = () => {
  return (
    <>
        <NavigationContainer>
        <Tab.Navigator
            initialRouteName='ShopStack'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}
        >
            <Tab.Screen 
                name='ShopStack' 
                component={ShopStack}
                options={{
                    tabBarIcon: ({focused}) => <TabBarIcon 
                    title='Productos' 
                    iconName="home" 
                    focused={focused}/>
                }}
            />
            <Tab.Screen 
                name='CartStack' 
                component={CartStack}
                options={{
                    tabBarIcon: ({focused}) => <TabBarIcon 
                    title='Carrito' 
                    iconName="shopping-cart" 
                    focused={focused}/>
                }}    
            />
            <Tab.Screen 
                name='OrdersStack' 
                component={OrdersStack}
                options={{
                    tabBarIcon: ({focused}) => <TabBarIcon 
                    title='Órdenes' 
                    iconName="list" 
                    focused={focused}/>
                }}
            />
        </Tab.Navigator>
        </NavigationContainer>
    </>
  )
}

export default Navigator

const styles = StyleSheet.create({

    tabBar: {
        backgroundColor: colors.green3,
        shadowColor: 'black',
        elevation: 4,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90
    }
})