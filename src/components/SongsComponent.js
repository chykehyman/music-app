import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';

import data from '../data';
import SongDataComponent from './songs/SongDataComponent';

const { width } = Dimensions.get('window');

const SongsComponent = ({ navigation, name }) => {
  const _keyExtractor = (item, index) => item.title + index;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <View style={{ padding: 10, paddingTop: 0 }}>
        <FlatList
          data={data.songs}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item }) => (
            <SongDataComponent item={item} navigation={navigation} />
          )}
          keyExtractor={_keyExtractor}
        />
      </View>
    </View>
  );
};

export default SongsComponent;

const styles = StyleSheet.create({
  container: {
    width,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
    marginLeft: 15,
  },
  separator: {
    height: 10,
    backgroundColor: '#e5e5e5',
  },
  dataContainer: {
    paddingLeft: 10,
    width: width - 160,
  },
});
