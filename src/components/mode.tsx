import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState, useContext } from 'react';

export const themes = {
  light: {
    background: '#FFFFFF',
    text: '#121212',
    primary: '#6200ee',
    card: '#F5F5F5',
  },
  dark: {
    background: '#121212',
    text: '#FFFFFF',
    primary: '#bb86fc',
    card: '#1E1E1E',
  },
};


const mode = () => {
  




  return (
    <View style = {styles.container}>
      <Text>mode</Text>
      <ToggleTheme />
    </View>
  )

}


export default mode

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})