import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const TeacherInfo = ({navigation,route}) => {


  console.log('routeeee',route?.params?.info);
  
  const user = {
    profileImage: require('../images/user.png'), // Replace with actual image URL
    name: 'Rajesh Sharma',
    education: 'B.Tech in Computer Science',
    experience: '3 years in React Native Development',
    achievements: [
      'Developed a successful car rental app',
      'Integrated Fiserv payment system',
      'Firebase backend optimization',
    ],
    currentStatus: 'React Native Developer at XYZ Company',
  };

  return (
    <ScrollView style={styles.container}>
        
              <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                  <Image source={require('../images/left.png')} style={styles.backIcon} resizeMode='contain' />
                </TouchableOpacity>
                <Text style={styles.headerText}>Teacher Profile</Text>
                <View style={{ width: 40 }}></View>
              </View>
      {/* Profile Image and Name */}
      <View style={styles.profileSection}>
        <Image source={ {uri :route?.params?.info?.teacher_images} } style={styles.profileImage} />
        <Text style={styles.name}>{route?.params?.info?.name}</Text>
      </View>

      {/* Education */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Education</Text>
        <Text style={styles.cardText}>{route?.params?.info?.education}</Text>
      </View>

      {/* Experience */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Experience</Text>
        <Text style={styles.cardText}>{route?.params?.info?.experience}</Text>
      </View>

      {/* Achievements */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Achievements</Text>
        {/* {user.achievements.map((ach, index) => ( */}
          <Text style={styles.cardText}>{route?.params?.info?.achivement}</Text>
        {/* ))} */}
      </View>

      {/* Current Status */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Current Status</Text>
        <Text style={styles.cardText}>{route?.params?.info?.current_status}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f8f9fa',
    backgroundColor: '#f8f5ff',

    paddingTop:20
  },
  profileSection: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 8,
    elevation: 3, // For shadow on Android
    shadowColor: '#000', // For shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 16,
    color: '#555',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    // paddingVertical: 5,
    paddingHorizontal:5
  },
  backButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  backIcon: {
    height: 20,
    width: 20,
  },
  headerText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '400',
  },
});

export default TeacherInfo;
