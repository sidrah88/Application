import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from "react-native";
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from "react-bootstrap/ButtonGroup";

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleEmailInput = (email) => {
    //do some validation
    this.setState({email: email})
  }

  handlePasswordInput = (pass) => {
    //do some validation
    this.setState({password: pass})
  }



  render() {
    return (
      <View>
        <TextInput placeholder='email...' onChangeText={this.handleEmailInput} value={this.state.email} />
        <TextInput placeholder='password...' onChangeText={this.handlePasswordInput} value={this.state.password} />
        
        <Button
            title="Login"        
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  
});


export default Login