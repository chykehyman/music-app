import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Splash = ({ navigation }) => {
  const goToTabs = () => navigation.navigate('Tabs');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Music App</Text>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <TouchableOpacity style={styles.btn} onPress={goToTabs}>
        <Text style={styles.text}>Start Listening</Text>
      </TouchableOpacity>
      <StatusBar barStyle="dark-content" backgroundColor={'black'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  logo: {
    height: 220,
    width: '80%',
    marginBottom: 40,
    marginTop: 20,
  },
  btn: {
    width: '60%',
    height: 50,
    borderRadius: 20,
    backgroundColor: '#ff5b77',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    elevation: 15,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Splash;
