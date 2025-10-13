import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

const comments = [
  {
    id: '1',
    name: 'Rifqi starboy',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    comment: 'Wow amazing yahh, best experience in my life very very worth it i like it! Very good very well',
  },
  {
    id: '2',
    name: 'Sarah Queen',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    comment: 'The trip was wonderful, the guide was super friendly and the view is breathtaking!',
  },
  {
    id: '3',
    name: 'Budi Santoso',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    comment: 'Sangat direkomendasikan! Semua fasilitas lengkap dan pelayanan sangat baik.',
  },
];

const CommentList: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleComments = showAll ? comments : comments.slice(0, 1);

  return (
    <View>
      {visibleComments.map(item => (
        <View key={item.id} style={styles.card}>
          <View style={styles.row}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <Text style={styles.name}>By {item.name}</Text>
          </View>
          <Text style={styles.comment}>{item.comment}</Text>
        </View>
      ))}
      {comments.length > 1 && (
        <TouchableOpacity style={styles.viewAllBtn} onPress={() => setShowAll(!showAll)}>
          <Text style={styles.viewAllText}>{showAll ? 'View Less' : 'View All'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222',
  },
  comment: {
    fontSize: 14,
    color: '#444',
    lineHeight: 18,
  },
  viewAllBtn: {
    alignSelf: 'center',
    backgroundColor: '#F7F6EF',
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  viewAllText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default CommentList;
