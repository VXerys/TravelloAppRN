import React from 'react';
import { Text,ImageBackground,  ScrollView, StatusBar, View, StyleSheet } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Destination } from '../types/destination';
import HeaderSection from '../components/DetailDestination/HeaderSection';
import DetailInfoSection from '../components/DetailDestination/DetailInfoSection';
import CommentList from '../components/DetailDestination/CommentList';
import RecommendationList from '../components/DetailDestination/RecommendationList';
import BottomBar from '../components/DetailDestination/BottomBar';

type DetailRouteParams = {
  DetailDestination: {
    destination: Destination;
  };
};

const DetailDestinationScreen = () => {
  const route = useRoute<RouteProp<DetailRouteParams, 'DetailDestination'>>();
  const { destination } = route.params;

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <HeaderSection destination={destination} />
      <ScrollView style={styles.detailContent} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <DetailInfoSection destination={destination} />
        <CommentList />
        <RecommendationList destination={destination} />
      </ScrollView>
      <BottomBar destination={destination} />
    </View>
  );
};

export default DetailDestinationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6EF',
  },
  detailContent: {
    flex: 1,
    backgroundColor: '#F7F6EF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: -32,
    paddingTop: 24,
    paddingHorizontal: 20,
    marginBottom: 90,
  },
  scrollContent: {
    paddingBottom: 100,
  },
});