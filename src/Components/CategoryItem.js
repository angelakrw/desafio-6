import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import Card from './Card'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../features/shop/shopSlice'

const CategoryItem = ({category, navigation}) => {

    const dispatch = useDispatch()

  return (
    <Pressable
    onPress={() => {
        dispatch(setCategorySelected(category))
        navigation.navigate("ItemListCategory", {category});
    }}
    >
        <Card style={styles.cardContainer}>
            <Text style={styles.text}>{category}</Text>
        </Card>
    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 30,
        marginVertical: 10,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    text: {
        fontSize: 20,
        fontFamily: 'Ubuntu',
        textTransform: 'capitalize'
    }
})