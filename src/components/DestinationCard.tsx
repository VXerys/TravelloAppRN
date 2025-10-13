import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Destination } from '../types/destination';

interface DestinationCardProps {
  destination: Destination;
  onPress?: (destination: Destination) => void;
}

const DestinationCard = ({
  destination,
  onPress,
}: DestinationCardProps) => {
  const handlePress = () => {
    if (onPress) {
      onPress(destination);
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <ImageBackground 
        source={{ uri: destination.image }} 
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      >
        {/* Overlay gradient effect achieved through absolute view */}
        <View style={styles.overlay} />
        
        {/* Favorite Button */}
        <TouchableOpacity style={styles.favoriteButton}>
          <MaterialCommunityIcons name="heart-outline" size={24} color="white" />
        </TouchableOpacity>
        
        {/* Content overlaid on image */}
        <View style={styles.contentContainer}>
          <View style={styles.locationInfo}>
            <Icon name="place" size={20} color="white" />
            <Text style={styles.country}>{destination.country}</Text>
          </View>
          
          <View style={styles.bottomContent}>
            <Text style={styles.location}>{destination.name}</Text>
            <View style={styles.ratingPrice}>
              <View style={styles.rating}>
                <Icon name="star" size={16} color="white" />
                <Text style={styles.ratingText}>{destination.rating.toFixed(1)}</Text>
              </View>
              <Text style={styles.price}>${destination.price}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 200,
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 16,
    marginHorizontal: 16,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'space-between',
  },
  imageStyle: {
    borderRadius: 24,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 24,
  },
  favoriteButton: {
    position: 'absolute',
    right: 16,
    top: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 50,
    padding: 8,
  },
  contentContainer: {
    padding: 20,
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  country: {
    fontSize: 14,
    color: 'white',
    marginLeft: 4,
    fontWeight: '500',
  },
  bottomContent: {
    marginTop: 'auto',
  },
  location: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  ratingPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  ratingText: {
    color: 'white',
    marginLeft: 4,
    fontSize: 14,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default DestinationCard;