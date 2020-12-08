import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  BannerComponent,
  CategoriesComponent,
  SongsComponent,
} from '../components';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Music App</Text>
      <ScrollView>
        <BannerComponent navigation={navigation} />
        <CategoriesComponent navigation={navigation} />
        <SongsComponent navigation={navigation} name="Songs" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
    marginLeft: 15,
  },
});

export default Home;
