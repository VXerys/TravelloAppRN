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
        <Text style={styles.desc}>{activity.description}</Text>
        <Text style={styles.detail}>{activity.duration} • {activity.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    backgroundColor: '#eee',
  },
  infoContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  desc: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
    lineHeight: 16,
  },
  detail: {
    fontSize: 14,
    color: '#FF7043',
    fontWeight: 'bold',
  },
});

export default RecommendationCard;
