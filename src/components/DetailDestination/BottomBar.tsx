import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Destination } from '../../types/destination';

const BottomBar: React.FC<{ destination: Destination }> = ({ destination }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.amountLabel}>Amount</Text>
          <View style={styles.amountRow}>
            <Text style={styles.amount}>${destination.price}</Text>
            <Text style={styles.amountStrike}>$6.500</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.bookBtn}>
          <Text style={styles.bookBtnText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#222',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomBar: {
    backgroundColor: '#222',
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    elevation: 10,
  },
  amountLabel: {
    color: '#fff',
    fontSize: 13,
    marginBottom: 2,
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amount: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  amountStrike: {
    color: '#bbb',
    fontSize: 16,
    textDecorationLine: 'line-through',
  },
  bookBtn: {
    backgroundColor: '#FF7043',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 12,
  },
  bookBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BottomBar;
