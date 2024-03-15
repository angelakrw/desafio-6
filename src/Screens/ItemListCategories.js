import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductItem from '../Components/ProductItem'
import Search from '../Components/Search'
import { useSelector } from 'react-redux'
import ShopReducer from '../features/shop/shopSlice'
import { useGetProductsQuery, useGetProductsByCategoryQuery } from '../app/services/shopServices'

const ItemListCategories = ({navigation}) => {

    const category = useSelector(state => state.shopReducer.value.categorySelected)
    const {data: productsFilteredByCategory, isLoading, error} = useGetProductsByCategoryQuery(category)
    const [products, setProducts] = useState([])
    const [keyword, setKeyword] = useState('')

    useEffect(() => {
        if (productsFilteredByCategory) {
            const productsArray = Object.values(productsFilteredByCategory)
            
            const productsFiltered = productsArray.filter((product) =>
            product.title.toLowerCase().includes(keyword.toLowerCase())
            )
            setProducts(productsFiltered)

        }
    }, [productsFilteredByCategory, keyword])

    if(isLoading) return <View><Text>cargando...</Text></View>

    return (
        <>
            <Search onSearch={setKeyword} />
            <View style={styles.container}>
                <FlatList
                    data={products}
                    renderItem={({item}) => (
                        <ProductItem 
                            item={item}
                            navigation={navigation} />
                        
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </>
    )
}

export default ItemListCategories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    }
})