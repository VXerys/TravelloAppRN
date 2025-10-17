import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Destination } from '../../types/destination';

const BottomBar: React.FC<{ destination: Destination }> = ({ destination }) => {
  const [qty, setQty] = useState<number>(1);

  const unitPrice = useMemo(() => {
    // Extract numeric value from strings like "5,000" or "$5,000.00"
    const n = Number(String(destination.price).replace(/[^0-9.]/g, '')) || 0;
    return Math.round(n);
  }, [destination.price]);

  const total = unitPrice * qty;

  const formatWithDots = (num: number) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.bottomBarContent}>
        <View style={styles.rowBetween}>
          <View style={styles.qtyRow}>
            <TouchableOpacity
              accessibilityRole="button"
              style={[styles.circleBtn, qty === 1 && styles.circleBtnDisabled]}
              onPress={() => qty > 1 && setQty(qty - 1)}
              disabled={qty === 1}
            >
              <Text style={styles.circleSign}>−</Text>
            </TouchableOpacity>
            <Text style={styles.qtyText}>{qty}</Text>
            <TouchableOpacity
              accessibilityRole="button"
              style={styles.circleBtn}
              onPress={() => setQty(qty + 1)}
            >
              <Text style={styles.circleSign}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.totalWrap}>
            <Text style={styles.totalLabel}>Total Amount</Text>
            <Text style={styles.totalValue}>${formatWithDots(total)}</Text>
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
    backgroundColor: 'rgba(19, 30, 46, 0.85)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 1,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 16,
      },
    }),
  },
  bottomBarContent: {
    paddingHorizontal: 20,
    paddingTop: 0,
    paddingBottom: 16,
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleBtnDisabled: {
    backgroundColor: '#3A3A3A',
  },
  circleSign: {
    color: '#fff',
    fontSize: 22,
    lineHeight: 22,
    fontWeight: '600',
  },
  qtyText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginHorizontal: 12,
  },
  totalWrap: {
    alignItems: 'flex-end',
  },
  totalLabel: {
    color: '#BDBDBD',
    fontSize: 12,
    marginBottom: 2,
  },
  totalValue: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bookBtn: {
    backgroundColor: '#FF6A3D',
    marginTop: 10,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FF6A3D',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  bookBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BottomBar;
