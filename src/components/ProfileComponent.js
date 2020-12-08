import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Surface } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';

import data from '../data';

const ProfileComponent = () => {
  const renderOption = (icon, name, count) => (
    <>
      <View style={styles.left}>
        <Icon name={icon} size={30} color="#000" />
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.left}>
        <Text style={styles.title}>{count}</Text>
        <Icon2
          name="ios-arrow-forward"
          size={30}
          color="gray"
          style={{ marginLeft: 20 }}
        />
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Surface style={styles.surface}>
          <Image
            source={require('../assets/icon_black.png')}
            style={styles.profile}
          />
        </Surface>
        <View style={styles.dataContainer}>
          <Text style={styles.name}>Chike Hygi</Text>
          <Text style={styles.uname}>chykehyman</Text>
          <Text style={styles.uname}>10 Jan 2011</Text>
        </View>
      </View>
      <View style={styles.divider} />
      {data.profile.map(({ icon, name, count }, index) => (
        <View style={styles.options} key={index}>
          {renderOption(icon, name, count)}
        </View>
      ))}
      <View style={styles.divider} />
    </View>
  );
};

export default ProfileComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    padding: 10,
    flexDirection: 'row',
  },

  surface: {
    height: 80,
    width: 80,
    borderRadius: 75,
    elevation: 15,
    overflow: 'hidden',
  },
  profile: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  dataContainer: {
    paddingLeft: 10,
  },
  name: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  uname: {
    fontSize: 18,
    color: 'gray',
  },
  divider: {
    height: 10,
    backgroundColor: '#e5e5e5',
  },
  options: {
    height: 55,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  left: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    marginLeft: 15,
  },
});
