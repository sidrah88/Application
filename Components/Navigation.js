import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function MyProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My Profile</Text>
    </View>
  );
}

function MyFriendsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My Friends</Text>
    </View>
  );
}

function MyPostsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My Posts</Text>
    </View>
  );
}

function LogOutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Log Out</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="My Profile" component={MyProfileScreen} />
      <Tab.Screen name="My Friends" component={MyFriendsScreen} />
      <Tab.Screen name="My Posts" component={MyPostsScreen} />
      <Tab.Screen name="Log out" component={LogOutScreen} />

    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}















































/* import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Appearance } from 'react-native-web';
import { createStackNavigator } from '@react-navigation/stack';
import { Stack } from 'react-bootstrap';


function App(){

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Login" component = {Login}/>
        <Stack.Screen name = "CreateAccount" component = {CreateAccount}/>
        <Stack.Screen name = "profile" component = {profile}/>
      </Stack.Navigator>
    </NavigationContainer>

  )

};

export default App;


 */


/* import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ButtonGroup from "react-bootstrap/ButtonGroup";

const TextInputBox = () => {
  const [number, onChangeNumber] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);


  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter..."
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="Enter..."
        keyboardType="numeric"
      />
      <ButtonGroup style={{width:"100%"}}>
        <Button>Login</Button>
      </ButtonGroup>
      <ButtonGroup style={{width:"100%"}}>
        <Button>Create an Account</Button>
      </ButtonGroup>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 20,
  },
});

export default TextInputBox; */