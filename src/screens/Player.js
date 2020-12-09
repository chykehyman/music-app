import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PlayerComponent } from '../components';

const Player = ({ navigation, route }) => {
  let item = route.params.item;
  return (
    <View style={styles.container}>
      <PlayerComponent navigation={navigation} item={item} />
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
