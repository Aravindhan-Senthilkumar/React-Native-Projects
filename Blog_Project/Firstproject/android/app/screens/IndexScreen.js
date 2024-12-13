import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React, { useContext,useEffect } from 'react'
import { Context as BlogContext } from '../context/BlogContext';
import { FlatList } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const IndexScreen = ({navigation}) => {

  const {state, deleteBlogPost, getBlogPost} = useContext(BlogContext);

  useEffect(() => {
    getBlogPost();

    const listener = navigation.addListener('didFocus', () => {
      getBlogPost();
    })

    return () => {
      listener.remove();
    }
  },[]);

  return (
    <View>
      <FlatList 
      showsVerticalScrollIndicator={false}
      data={state}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('ShowScreen',{id: item.id})}>
          <View style={styles.viewStyle}>
            <Text style={styles.title}>{item.title}</Text>
          <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
            <FontAwesome name='trash' size={30} color="#000" style={styles.icon} />
          </TouchableOpacity>
          </View>
          </TouchableOpacity>
  )}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row', justifyContent:'space-between',alignItems: 'center', padding: 20, borderBottomWidth: 1, borderColor: 'gray'
  },
  title: {
    fontSize: 18,
    fontWeight:'bold',
  },
  icon: {
    fontSize: 24
  }

})

export default IndexScreen