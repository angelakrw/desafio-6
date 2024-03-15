import { StyleSheet } from 'react-native'
import React from 'react'
import Categories from '../Components/Categories'

const Home = ({navigation}) => {
  return (
    <>
        <Categories navigation={navigation}/>
    </>
    )
}

export default Home

const styles = StyleSheet.create({})