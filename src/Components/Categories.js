import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'
import { useSelector } from 'react-redux'
import { useGetCategoriesQuery } from '../app/services/shopServices'


const Categories = ({navigation}) => {

  //const categories = useSelector(state => state.shopReducer.value.categories)

  const {data, isLoading, error} = useGetCategoriesQuery()

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        renderItem={({item}) => <CategoryItem
            category={item}
            navigation={navigation}
        />}
        data = {data}
        keyExtractor={category => category}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    }
})