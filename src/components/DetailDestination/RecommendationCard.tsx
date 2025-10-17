import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Activity } from '../../types/destination';

const RecommendationCard: React.FC<{ activity: Activity }> = ({ activity }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        source={activity.image ? { uri: activity.image } : require('../../assets/bg-detail.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{activity.name}</Text>
        <Text style={styles.desc} numberOfLines={2}>
          {activity.description}
        </Text>
        <Text style={styles.detail}>
          {activity.duration} • {activity.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#0E0E0E',
    borderRadius: 20,
    padding: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  image: {
    width: 88,
    height: 88,
    borderRadius: 24,
    backgroundColor: '#1C1C1C',
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
    paddingVertical: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  desc: {
    fontSize: 12,
    color: '#CFCFCF',
    marginBottom: 8,
    lineHeight: 16,
  },
  detail: {
    fontSize: 13,
    color: '#FF6A3D',
    fontWeight: 'bold',
  },
});

export default RecommendationCard;
