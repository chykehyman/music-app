import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ProfileComponent, SongsComponent } from '../components';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <ScrollView>
        <ProfileComponent />
        <SongsComponent
          navigation={navigation}
          name="History"
          style={styles.sectionText}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
    marginLeft: 15,
  },
});

export default Profile;
