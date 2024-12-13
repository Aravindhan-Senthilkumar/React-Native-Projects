import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import {Context} from '../context/BlogContext'

const ShowScreen = ({ route }) => {
  const {id} = route.params;
  const {state} = useContext(Context);

  const BlogPost = state.find((BlogPost) => BlogPost.id === id)

return (
    <View>
      <Text style={styles.titleStyle}>{BlogPost.title}</Text>
      <Text style={styles.contentStyle}>{BlogPost.content}</Text>
    </View>
  )
}

export default ShowScreen

const styles = StyleSheet.create({
   titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
    paddingVertical: 20,
    fontStyle: 'italic'
   },
   contentStyle: {
    fontSize: 17,
    margin: 3,
   }
})