import { StyleSheet, Text, View,Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios';
import yelp from '../api/yelp';

const ProductListingScreen = () => {
    const [products,setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    },[]);

    const getProducts = () => {
    yelp.get('/products')
        .then((response)=> setProducts(response.data))
    }
    
  return (
    <View>
      <Text>ProductListingScreen</Text>
      <FlatList 
      data={products}
      renderItem={({ item }) => 
    (
        <View>
            <Image source={{ uri:item.image }} style={{height:200, width:200}}/>
            <Text>{item.price}</Text>
            </View>
    )
    }
      />
    </View>
  )
}

export default ProductListingScreen

const styles = StyleSheet.create({})