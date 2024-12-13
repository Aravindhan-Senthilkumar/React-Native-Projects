import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ResultList = ({title}) => {
  return (
    <View>
      <Text style={styles.textstyle}>{title}</Text>
    </View>
  )
}

export default ResultList

const styles = StyleSheet.create({
    textstyle: {
        fontSize: 23,
        fontWeight: 'bold'
    }
})