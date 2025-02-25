import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, TextInput, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { chaptersAll, chaptersAllTwo } from '../Action/AppAction';
// import { RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';

const ChapterListScreen = ({ navigation, route }) => {
  const [loaded, setLoaded] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [trans, setTrans] = useState(false)

  const dispatch = useDispatch()

  // console.log('rrrrrr', route?.params?.id);


  const TopicsData = useSelector((state: any) => state?.authReducer?.useTopics)
  // console.log('TopicsDataTopicsData', TopicsData);


  useEffect(() => {
    setFilteredData(TopicsData)
  }, [TopicsData])
  // useEffect(() => {
  //   const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
  //     setLoaded(true);
  //   });

  //   const unsubscribeEarned = rewarded.addAdEventListener(
  //     RewardedAdEventType.EARNED_REWARD,
  //     reward => {
  //       console.log('User earned reward of ', reward);
  //     },
  //   );

  //   rewarded.load();
  //   return () => {
  //     unsubscribeLoaded();
  //     unsubscribeEarned();
  //   };
  // }, []);

  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      if (trans) {
        const newData1 = filteredData.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
        setFilteredData(newData1);
      }
      else {
        const newData = filteredData.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
        setFilteredData(newData);
      }

    } else {
      if (trans) {
        setFilteredData(TopicsData)
      }
      else {
        setFilteredData(TopicsData)
      }
      // setFilteredData(data);
    }
  };


  const onTrans = (val) => {
    setTrans(val)
    const formData = new FormData()
    if (val) {

      formData.append('subject_id', route?.params?.id)
      formData.append('lang', 'hi')
      dispatch(chaptersAllTwo(formData))

    }
    else {
      formData.append('subject_id', route?.params?.id)
      formData.append('lang', 'en')
      dispatch(chaptersAllTwo(formData))
  
    }
  }

  return (
    <View style={styles.container}>


      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require('../images/left.png')} style={styles.backIcon} resizeMode='contain' />
        </TouchableOpacity>
        <Text style={styles.headerText}>Topic</Text>
        <View style={{ width: 40 }}></View>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, }}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search topic..."
            placeholderTextColor="#888"
            value={search}
            onChangeText={handleSearch}
          />
        </View>
        {/* <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={() => onTrans(!trans)}>
          <Image source={require('../images/trans.png')} style={{ height: 40, width: 40 }} resizeMode='contain' />
        </TouchableOpacity> */}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          // paddingHorizontal:10,
          padding: 10
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',

          }}>
          <Image source={{ uri: route?.params?.teacher?.teacher_images }} style={{ height: 50, width: 50, borderRadius: 50 }} resizeMode='cover' />

          <Text style={{ color: 'black', fontSize: 16, fontWeight: '500', marginLeft: 20 }}>{route?.params?.teacher?.name}</Text>
        </View>
        <TouchableOpacity
          style={{ backgroundColor: 'grey', padding: 5, borderRadius: 5 }}
          onPress={() => navigation.navigate('TeacherInfo', { info: route?.params?.teacher })}>
          <Text style={{ color: 'white' }}>Teacher info</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredData}
        ListEmptyComponent={() =>
          <Text style={{ color: '#000', textAlign: 'center', marginTop: '50%', fontWeight: '600' }}>No Data Found</Text>
        }
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 15, paddingTop: 5 }}
        renderItem={({ item, index }) => (
          <TouchableOpacity key={index} style={[styles.card, { flexDirection: 'row', flex: 1, alignItems: 'center', }]} onPress={() => navigation.navigate('Pdf', { pdf: item })}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <Image source={require('../images/pdf.png')} style={{ height: 35, width: 35 }} resizeMode='contain' />
              <Text style={styles.subtitle}>{item?.name}</Text>
            </View>

            <Image source={require('../images/right.png')} style={{ height: 30, width: 30 }} resizeMode='contain' />

          </TouchableOpacity>
        )}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: 40, paddingBottom: 10 }}>
        <TouchableOpacity style={[styles.mediumView, {
          // backgroundColor: trans ? '#007BFF' : "#f8f5ff" 
          backgroundColor: trans ? '#f8f5ff' : "#007BFF"

        }]} onPress={() => onTrans(false)}>
          <Text style={{
            // color: trans ? 'white' : 'black', fontWeight: '500'
            color: trans ? 'black' : 'white', fontWeight: '500'

          }}>English Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.mediumView, {
          // backgroundColor: trans ? '#f8f5ff' : "#007BFF"
          backgroundColor: trans ? '#007BFF' : "#f8f5ff"

        }]} onPress={() => onTrans(true)}>
          <Text
            style={{
              // color: trans ? 'black' : 'white', fontWeight: '500'
              color: trans ? 'white' : 'black', fontWeight: '500'

            }}>हिंदी माध्यम</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f5ff',
    paddingTop: 20,
    paddingHorizontal: 5,
    // paddingBottom:15
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 45,

    borderWidth: 0.4,
    borderColor: 'grey',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    flex: 1,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  card: {
    backgroundColor: '#eae4f5',
    paddingVertical: 16,
    paddingHorizontal: 10,
    marginVertical: 8,
    borderRadius: 16,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  subtitle: {
    fontSize: 14,
    // color: '#6C757D',
    marginLeft: 5,
    marginRight: 15,
    color: '#000',
    flex: 1

  },
  buttonContainer: {
    marginTop: 12,
  },
  readButton: {
    backgroundColor: '#28A745',
    height: 40,
    borderRadius: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    // paddingVertical: 10,
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
  mediumView: {
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'lightblue',
    borderWidth: 1,
    borderColor: 'gray'
  }
});

export default ChapterListScreen;
