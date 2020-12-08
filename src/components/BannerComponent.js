import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import data from '../data';

const { width } = Dimensions.get('window');

const BannerComponent = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data.banner}
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.banner} key={index}>
              <ImageBackground source={item.img} style={styles.bannerImage}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => {
                    // this.playSong(bannerItem);
                  }}
                >
                  <Icon name="play" size={18} color="#000" />
                  <Text style={styles.text}>Play Now</Text>
                </TouchableOpacity>
              </ImageBackground>
            </View>
          );
        }}
        />
    </View>
  );
};

export default BannerComponent;

const styles = StyleSheet.create({
  container: {
    height: 250,
    backgroundColor: '#fff',
    elevation: 15,
  },
  banner: {
    height: 230,
    width: width,
  },
  bannerImage: {
    height: 250,
    width: '100%',
  },
  btn: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 24,
    flexDirection: 'row',
  },
  text: {
    marginLeft: 5,
  },
});

