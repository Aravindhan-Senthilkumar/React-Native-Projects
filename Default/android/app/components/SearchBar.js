import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'; 
import Icons from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.Viewstyle}>
      <Icons name='search' size={30} color="#000" style={styles.icon}/>
      <TextInput 
        placeholder='Search'
        style={styles.InputView}
        value={term}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
      
    </View>
  )
}

export default SearchBar;

const styles = StyleSheet.create({
  Viewstyle: {
    display: "flex",
    backgroundColor: "#F0EEEE",
    color: 'lightgrey',
    margin: 15,
    flexDirection: 'row',
    borderRadius: 7,
    alignItems: 'center', // This ensures the icon and input are vertically aligned
    padding: 10,
  },
  icon: {
    marginRight: 10, // Adds space between the icon and the input field
  },
  InputView: {
    flex: 1, // Takes up the remaining space
    height: 40, // Adjust height as needed
    backgroundColor: '#F0EEEE',
    borderRadius: 5,
    paddingLeft: 10, // Adds padding to the left of the text
    fontSize: 15
  }
});
