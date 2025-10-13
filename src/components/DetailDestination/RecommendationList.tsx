import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Destination } from '../../types/destination';
import RecommendationCard from './RecommendationCard';

const RecommendationList: React.FC<{ destination: Destination }> = ({ destination }) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Recommendation in {destination.name}</Text>
      <View style={styles.verticalListContent}>
        {destination.activities.map((item, index) => (
          <RecommendationCard key={index} activity={item} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 12,
  },

  verticalListContent: {
    paddingBottom: 18,
  },
  activityCard: {
    fontWeight: 'bold',
  },
});

export default RecommendationList;
