import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import React, { useContext, useState } from 'react';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';


const EditScreen = ({route,navigation}) => {
  const {id} = route.params;

  const {state,editBlogPost} = useContext(Context)

  const blogPost = state.find((blogPost) => blogPost.id === id);


  return <BlogPostForm 
  initialValues={{title: blogPost.title,content: blogPost.content}}
  onSubmit={(title,content) => {
    editBlogPost(id,title,content,() => navigation.pop());
  }}/>
}

export default EditScreen

const styles = StyleSheet.create({

})