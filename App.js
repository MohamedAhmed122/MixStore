import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import AppButton from './src/common/AppButton';
import AppInput from './src/common/AppInput';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import WelcomeScreen from './src/Screens/WelcomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {primary} from './src/config/colors';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <View style={styles.screen}>
    //   <Text>Hello World</Text>
    //   <AppButton title="my Pressable button" />
    //   <AppInput />
    // </View>
    // <HomeScreen />
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTintColor: primary}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>Home Page</Text>
      <Button
        title="Go To About Page"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
};

const AboutScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>About Page</Text>
      <Button
        title="Go To Contact Page"
        onPress={() => navigation.navigate('Contact')}
      />
    </View>
  );
};

const ContactScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>Contact Page</Text>
      <Button
        title="Go To Home Page"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
