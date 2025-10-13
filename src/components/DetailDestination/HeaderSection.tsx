import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Destination } from '../../types/destination';
import { useNavigation } from '@react-navigation/native';

interface HeaderSectionProps {
  destination: Destination;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ destination }) => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={{ uri: destination.image }}
      style={styles.backgroundStyle}
      resizeMode="cover"
    >
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.weatherInfo}>
          <Icon name="wb-sunny" size={20} color="white" />
          <Text style={styles.weatherText}>24°C</Text>
        </View>
      </View>
      <View style={styles.imageOverlay} />
      <View style={styles.contentContainer}>
        <View style={styles.ratingRow}>
          <Icon name="star" size={18} color="white" />
          <Text style={styles.ratingText}>{destination.rating.toFixed(1)}</Text>
        </View>
        <Text style={styles.title}>{destination.name}</Text>
        <Text style={styles.subtitle}>{destination.description}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    width: '100%',
    height: 340,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 38,
    zIndex: 2,
  },
  backButton: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    padding: 8,
  },
  weatherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  weatherText: {
    color: 'white',
    marginLeft: 6,
    fontSize: 16,
    fontWeight: '600',
  },
  contentContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 24,
    paddingBottom: 32,
    paddingRight: 24,
    width: '100%',
    zIndex: 1,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 6,
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 6,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    marginBottom: 8,
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 6,
    lineHeight: 38,
  },
  subtitle: {
    fontSize: 15,
    color: 'white',
    textAlign: 'left',
    marginBottom: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    paddingRight: 22,
    lineHeight: 22,
  },
});

export default HeaderSection;
