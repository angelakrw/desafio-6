import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { colors } from '../Global/colors'

const TabBarIcon = ({title, iconName, focused}) => {
  return (
    <View style={styles.Container}>
        <Entypo
            name= {iconName}
            size={40}
            color= {focused ? 'white' : colors.green1}/>
        
        <Text style={[styles.Text, focused && styles.TextFocused]}>{title}</Text>
    </View>
  )
}

export default TabBarIcon

const styles = StyleSheet.create({

    Container: {
        alignItems: 'center'
    },

    Text: {
        color: colors.green1,
        fontFamily: 'Ubuntu',
        fontWeight: 'bold'
    },

    TextFocused: {
        color: 'white'
    }
})