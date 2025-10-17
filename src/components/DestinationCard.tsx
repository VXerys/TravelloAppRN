import React, { useState } from 'react';
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
  const [isFavorite, setIsFavorite] = useState(false);

  const handlePress = () => {
    if (onPress) {
      onPress(destination);
    }
  };

  const handleFavoritePress = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress} activeOpacity={0.9}>
      <ImageBackground 
        source={{ uri: destination.image }} 
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      >
        {/* Overlay gradient effect */}
        <View style={styles.overlay} />
        
        {/* Favorite Button */}
        <TouchableOpacity 
          style={styles.favoriteButton} 
          onPress={handleFavoritePress}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons 
            name={isFavorite ? "heart" : "heart-outline"} 
            size={24} 
            color={isFavorite ? "#FF4444" : "white"} 
          />
        </TouchableOpacity>
        
        {/* Content overlaid on image - positioned at bottom */}
        <View style={styles.contentContainer}>
          <View style={styles.bottomRowLocation}>
            <View style={styles.leftColumn}>
              <View style={styles.locationInfo}>
                <Icon name="place" size={16} color="white" />
                <Text style={styles.country}>{destination.country}</Text>
              </View>
              <Text style={styles.location}>{destination.name}</Text>
            </View>
            
            <View style={styles.rightColumn}>
              <View style={styles.rating}>
                <Icon name="star" size={14} color="white" />
                <Text style={styles.ratingText}>{destination.rating.toFixed(1)}</Text>
              </View>
              
              <View style={styles.priceContainer}>
                <Text style={styles.price}>${destination.price}</Text>
                <Text style={styles.paxText}>/pax</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 240,
    borderRadius: 28,
    overflow: 'hidden',
    marginBottom: 20,
    marginHorizontal: 0,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  imageBackground: {
    flex: 1,
  },
  imageStyle: {
    borderRadius: 28,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: 28,
  },
  favoriteButton: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 50,
    padding: 10,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    paddingBottom: 16,
  },
  bottomRowLocation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  leftColumn: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  country: {
    fontSize: 13,
    color: 'white',
    marginLeft: 4,
    fontWeight: '500',
  },
  location: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 0.2,
  },
  rightColumn: {
    alignItems: 'flex-end',
    gap: 4,
    justifyContent: 'flex-end',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  paxText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
    opacity: 0.9,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  ratingText: {
    color: 'white',
    marginLeft: 3,
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default DestinationCard;