import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, {useState} from 'react'

const BlogPostForm = ({onSubmit , initialValues = {title: "",content: ""}}) => {
    const [title,setTitle] = useState(initialValues.title);
    const [content,setContent] = useState(initialValues.content);


  return <View style={styles.viewStyle}>
  <Text style={styles.textStyle1}>Enter Title:</Text>
  <TextInput 
  style={styles.textInputStyles1}
  value={title}
  onChangeText={(text) => setTitle(text)}
  multiline={true}
  />
  <Text style={styles.textStyle2}>Enter Content:</Text>
  <TextInput 
  style={styles.textInputStyles2}
  value={content}
  onChangeText={(text) => setContent(text)}
  multiline={true}
  />
  <Button 
  title='Save Blog Post'
  style={styles.btnStyle}
  onPress={() => onSubmit(title,content)}
  />
</View>
}

export default BlogPostForm

const styles = StyleSheet.create({
    textInputStyles1: {
        borderColor: 'black',
        borderWidth: 1,
        height: 100,
        marginTop: 10,
        textAlign: 'left',
        textAlignVertical: 'top',
    },
    textInputStyles2: {
        borderColor: 'black',
        borderWidth: 1,
        height: 150,
        marginTop: 10,
        marginBottom: 20,
        textAlign: 'left',
        textAlignVertical: 'top',
    },
    textStyle1: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textStyle2: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    viewStyle: {
        padding:10
    },
})