import React, {Component} from "react";
import { Text, View} from 'react-native';

class SayHello extends Component{
  render(){
    return(
      <View>
        <Text>Hello {this.props.name}</Text>
      </View>
    );
  }
}

class myApp extends Component{
  render(){
    return(
      <View>
        <SayHello name="Sidrah"/>
        <SayHello name="Nini"/>
      </View>
    );
  }
}

export default myApp

