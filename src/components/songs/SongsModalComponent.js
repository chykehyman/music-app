import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Surface } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SongsModalComponent = ({ item, modalVisible, closeModal }) => {
  return (
    <Modal
      transparent={true}
      onRequestClose={() => closeModal()}
      visible={modalVisible}
      animationType="slide"
    >
      <View style={{ height: '100%', backgroundColor: 'rgba(0,0,0,0.4)' }}>
        <View style={styles.modal}>
          <Surface style={styles.surface}>
            <Image source={item.img} style={styles.modalImg} />
          </Surface>

          <View style={styles.modalData}>
            <View style={styles.playerContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subTitle}>{item.subTitle}</Text>
              <TouchableOpacity style={styles.btn}>
                <Icon name="play" size={30} color="#fff" />
              </TouchableOpacity>
            </View>
            <View style={styles.option}>
              <Icon name="heart" size={30} color="#ff5b77" />
              <Text style={styles.text}>Add To Favorite</Text>
            </View>
            <View style={styles.option}>
              <Icon name="playlist-plus" size={30} color="#000" />
              <Text style={styles.text}>Add To Playlist</Text>
            </View>
            <View style={styles.option}>
              <Icon name="album" size={30} color="#000" />
              <Text style={styles.text}>Create Album</Text>
            </View>
            <View style={styles.option}>
              <Icon name="download" size={30} color="#000" />
              <Text style={styles.text}>Download</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SongsModalComponent;

const styles = StyleSheet.create({
  modal: {
    height: '60%',
    width: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  modalImg: {
    height: 180,
    width: 180,
  },
  surface: {
    height: 180,
    width: 180,
    alignSelf: 'center',
    position: 'absolute',
    overflow: 'hidden',
    top: -100,
    borderRadius: 20,
    elevation: 20,
  },
  modalData: {
    marginTop: 100,
  },
  option: {
    height: 50,
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#e5e5e5',
  },
  text: {
    marginLeft: 15,
    color: '#000',
    fontSize: 20,
  },
  playerContainer: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#ff5b77',
    elevation: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
