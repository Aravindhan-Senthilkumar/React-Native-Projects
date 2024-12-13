import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './android/app/screens/IndexScreen';
import ShowScreen from './android/app/screens/ShowScreen';
import CreateScreen from './android/app/screens/CreateScreen';
import EditScreen from './android/app/screens/EditScreen';
import { Provider } from './android/app/context/BlogContext';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="IndexScreen"
            component={IndexScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('CreateScreen')}>
                  <FontAwesome name="plus" size={30} color="#000"/>
                </TouchableOpacity>
              ), title : 'Home Screen',
              headerTitleAlign: 'center'
            })}
          />
          <Stack.Screen name="ShowScreen" component={ShowScreen} options={({navigation,route}) => (
            {
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('EditScreen',{id: route.params.id})}>
                  <FontAwesome name="pencil" size={30} color="#000"/>
                </TouchableOpacity>
            )
          })}/>
          <Stack.Screen name="CreateScreen" component={CreateScreen} options={{title: 'Create Blogs', headerTitleAlign: 'center'}}/>
          <Stack.Screen name="EditScreen" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
