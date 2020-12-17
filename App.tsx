import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View>
        <TextInput placeholder="Input" style={{borderColor: 'black', borderWidth: 1, padding: 20}}/>
        <Button title="ADD" />
      </View>
    </View>
  );
}
