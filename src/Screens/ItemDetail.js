import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import products from '../Data/products.json'
import { useDispatch } from 'react-redux'
import { useGetCategoriesQuery } from '../app/services/shopServices'
import { addItem } from '../features/cart/cartSlice'

const ItemDetail = ({route}) => {
  const {productId} = route.params
  const [product, setProduct] = useState({})
  const dispatch = useDispatch()

  useEffect(() => {
    const productFinded = products.find(product => product.id === productId)
    setProduct(productFinded)
  }, [productId, products])

  const onAddCart = () => {
    dispatch(addItem({...product, quantity: 1}))
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={{uri:product?.images ? product.images[0] : null}}
          resizeMode='cover'
        />

        <View style={styles.containerText}>
          <Text style={styles.title}>{product.title}</Text>
          <Text>{product.description}</Text>
        </View>

        <View style={styles.containerPrice}>
          <Text style={styles.price}>$ {product.price}</Text>
          <Pressable style={styles.buyNow} onPress={onAddCart}>
            <Text style={styles.buyNowText}>Carrito</Text>
          </Pressable>
        </View>

      </View>

    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  buyNow: {
    padding: 30
  },

  buyNowText: {
    fontSize: 40
  }
})