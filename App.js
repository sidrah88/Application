import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import Navigation from './Components/Navigation'
import Login from './Components/Login'

class App extends Component{
  render(){
    return(
        <View>

          <Button
            title="Login"
            onPress={() => this.props.navigation.navigate('Login')}
          />

        </View>
    );
  }
}

export default App;
