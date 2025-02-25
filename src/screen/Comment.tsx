import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { commentAdd } from '../Action/AppAction';

const Comment = ({ navigation, route }) => {
  const [comment, setComment] = useState('');

  const dispatch = useDispatch()
  console.log('routeeee', route?.params?.id);


  const handleSubmit = () => {
    console.log('Submitted Comment:', comment);

    const formData = new FormData()
    formData.append('content_id', route?.params?.id)
    formData?.append('comment', comment)
    dispatch(commentAdd(formData))

    setComment(''); // Clear input after submission
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f8f5ff', paddingTop: 20, paddingHorizontal: 5 }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require('../images/left.png')} style={styles.backIcon} resizeMode='contain' />
        </TouchableOpacity>
        <Text style={styles.headerText}>Comment</Text>
        <View style={{ width: 40 }}></View>
      </View>

      <View style={{ padding: 10 }}>
        <Text style={styles.feedbackText}>Need help or have suggestions? We’re listening!</Text>

        <TextInput
          style={styles.input}
          placeholder='Write a comment...'
          placeholderTextColor='#888'
          multiline
          value={comment}
          onChangeText={setComment}
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
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
  feedbackText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
    marginTop: 30
  },
  input: {
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#6200EE',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
