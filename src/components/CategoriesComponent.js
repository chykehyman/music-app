import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import { Surface } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import data from '../data';

const { width } = Dimensions.get('window');

const CategoriesComponent = ({ navigation }) => {
  const goToDetails = (item) => {
    navigation.navigate('Details', { item });
  };

  const _keyExtractor = (item, index) => item.name + index;

  const renderCategories = ({ item }) => (
    <TouchableWithoutFeedback onPress={() => goToDetails(item)}>
      <Surface style={styles.surface}>
        <ImageBackground source={item.img} style={styles.img} blurRadius={3}>
          <Icon name="music" color="#fff" size={22} />
          <Text style={styles.name}>{item.name}</Text>
        </ImageBackground>
      </Surface>
    </TouchableWithoutFeedback>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={data.categories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderCategories}
        keyExtractor={_keyExtractor}
      />
    </View>
  );
};

export default CategoriesComponent;

const styles = StyleSheet.create({
  container: {
    width,
    height: 230,
    marginTop: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
    marginLeft: 15,
  },
  surface: {
    elevation: 15,
    height: 150,
    width: 150,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 15,
    overflow: 'hidden',
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 10,
    padding: 10,
  },
  name: {
    position: 'absolute',
    bottom: 10,
    left: 15,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
