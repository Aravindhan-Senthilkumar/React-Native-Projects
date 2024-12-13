import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import { useState } from 'react'
import yelp from '../api/yelp'
import ResultList from '../components/ResultList'
import ProductListingScreen from './ProductListingScreen'


const RestaurantHome = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [resultss,setResult] = useState([]);

  const searchApi = async () => {
   const response = await yelp.get('/complexSearch',{
    params: {
      query: 'pasta',
      number: 5,
      addRecipeInformation: true,
    }
   })
   setResult(response.data);
  }

  return (
    <View style={{backgroundColor: '#fff'}}>
        <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={searchApi}
        />
    <Text>We have found {resultss.length} results</Text>
    <ResultList title="Cost Effective"/>
    <ResultList title="Bit Pricer"/>
    <ResultList title="Big Spender!"/>
    <Button title="Go to Product Lisiting Screen" onPress={() => navigation.navigate('Product Listing Screen')}/>
    </View>
    
  )
}

export default RestaurantHome

const styles = StyleSheet.create({})