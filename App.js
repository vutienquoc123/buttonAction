import React, { Component } from 'react';
import { StyleSheet, View ,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from './src/components/button'

export default function App () {

    return (
      <View style={{flex:1, alignItems:'center'}}>
          <Image 
            source={require("./src/asset/1.png")}
            resizeMode="cover"
            style={{width:'100%',height:'100%',opacity:0.5}}
          />
          <Button/>
      </View>
    );
}

const styles = StyleSheet.create({
});