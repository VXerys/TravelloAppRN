import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/fix.png')}
        style={styles.backgroundStyle}
        resizeMode="cover"
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Your Next Adventure{'\n'}Starts Here</Text>
          <Text style={styles.subtitle}>
            Life's too short to stay in one place. Find your next favorite city, beach, or mountain and let's get moving!
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start Exploring</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end', 
  },
  contentContainer: {
    alignItems: 'flex-start', 
    justifyContent: 'flex-end', 
    paddingLeft: 24,
    paddingBottom: 48,
    paddingRight: 24,
    width: '100%',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    marginBottom: 12,
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 6,
    lineHeight: 42,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'left',
    marginBottom: 32,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    paddingRight: 24,
  },
  button: {
    backgroundColor: '#19C6C6',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 28,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 4,
    alignSelf: 'flex-start', 
    marginBottom: 26,
  },
  buttonText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default OnboardingScreen;