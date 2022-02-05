import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ButtonGroup from "react-bootstrap/ButtonGroup";



const TextInputBox = () => {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter..."
        keyboardType="numeric"
      />
      <ButtonGroup style={{width:"100%"}}>
  <Button>Like </Button>
  <Button>Comment</Button>
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






export default TextInputBox;