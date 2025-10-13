import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Destination } from '../../types/destination';

const DetailInfoSection: React.FC<{ destination: Destination }> = ({ destination }) => {
  return (
    <View style={styles.sectionHeader}>
      <View style={styles.countryRow}>
        <Text style={styles.flag}>🇮🇩</Text>
        <Text style={styles.countryText}>{destination.country}</Text>
      </View>
      <Text style={styles.detailTitle}>Discover the Beauty of {destination.name}</Text>


    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    marginBottom: 18,
  },
  countryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  flag: {
    fontSize: 18,
    marginRight: 6,
  },
  countryText: {
    fontSize: 15,
    color: '#222',
    fontWeight: '600',
  },
  detailTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
  },

});

export default DetailInfoSection;
