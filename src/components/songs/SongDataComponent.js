import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import SongModalComponent from './SongsModalComponent';

const { width } = Dimensions.get('window');

const SongDataComponent = ({ item, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const playSong = (item) => {
    navigation.navigate('Player', { item });
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View>
      <SongModalComponent
        item={item}
        modalVisible={modalVisible}
        closeModal={closeModal}
      />
      <TouchableWithoutFeedback
        style={styles.songContainer}
        onPress={() => playSong(item)}
      >
        <View style={{ flexDirection: 'row' }}>
          <Image source={item.img} style={styles.img} />
          <View style={styles.dataContainer}>
            <Text style={styles.songTitle}>{item.title}</Text>
            <Text style={styles.subTitle}>{item.subTitle}</Text>
            <Text style={styles.subTitle}>{item.duration / 60}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon
              name="download"
              color="gray"
              size={30}
              style={{ marginRight: 10 }}
            />
            <TouchableOpacity onPress={() => openModal()}>
              <Icon name="dots-vertical" color="gray" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SongDataComponent;

const styles = StyleSheet.create({
  songContainer: {
    width: width,
    height: 70,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 5,
  },
  dataContainer: {
    paddingLeft: 10,
    width: width - 160,
  },
  songTitle: {
    fontSize: 18,
    color: '#000',
  },
  subTitle: {
    fontSize: 16,
    color: 'gray',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
