import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { WebView } from 'react-native-webview';
import { useSelector } from 'react-redux';


const App = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [filteredVideos, setFilteredVideos] = useState([]);

const youtubeData = useSelector((state:any) => state?.authReducer?.useYoutubeView)

console.log('youtubeData---',youtubeData);
useEffect(()=>{
  setFilteredVideos(youtubeData)
},[])

  const onClick = (url) => {
    console.log('urlll000', url);

    const video = url.youtube_link;
    const videoId = video.replace("https://www.youtube.com/watch?v=", "");

    console.log('1111', videoId);

    navigation.navigate('YtView', { data: url  ,videoID : videoId})
  }
  const VideoItem = ({url} ) => (
    <TouchableOpacity style={styles.videoContainer} onPress={() => onClick(url)}>
      <Image source={{uri : url?.thumb}} style={{height:50,width:50}} resizeMode='contain'/>
      <Text style={{ fontSize: 16, color: '#000', fontWeight: '600' ,marginLeft:10}}>{url?.title}</Text>
      {/* <WebView style={styles.webview} source={{ uri: url?.url }} allowsFullscreenVideo /> */}
    </TouchableOpacity>
  );

  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const newData = youtubeData.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
      setFilteredVideos(newData);
    } else {
      setFilteredVideos(youtubeData);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f8f5ff', paddingTop: 20, paddingHorizontal: 5 }}>


      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require('../images/left.png')} style={styles.backIcon} resizeMode='contain' />
        </TouchableOpacity>
        <Text style={styles.headerText}>Youtube Video</Text>
        <View style={{ width: 40 }}></View>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search video..."
          placeholderTextColor="#888"
          value={search}
          onChangeText={handleSearch}
        />
      </View>

      <FlatList
        data={filteredVideos}
        ListEmptyComponent={() =>
          <Text style={{ color: '#000', textAlign: 'center', marginTop: '50%', fontWeight: '600' }}>No Data Found</Text>
        }
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <VideoItem url={item}
        />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({


  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 45,
    marginBottom: 15,
    borderWidth: 0.4,
    borderColor: 'grey',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  videoContainer: {
    // height: 100,
    marginVertical: 10,
    // padding: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
    marginHorizontal: 5,
    flexDirection:'row',
    alignItems:'center'
    
  },
  webview: {
    flex: 1,

  },
});

export default App;
