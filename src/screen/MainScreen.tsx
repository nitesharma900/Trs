import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';
import { useDispatch, useSelector } from 'react-redux';
import { Allclasses, categorie, Getwinner, GovBook, YoutudeView } from '../Action/AppAction';

const MainScreen = ({ navigation }) => {
  const dispatch = useDispatch()

  const BannerData = useSelector((state: any) => state?.authReducer?.useWinner)

  console.log('BannerDataBannerData', BannerData);

  useEffect(() => {
    dispatch(Getwinner())
  }, [])







  const onClik = (id: any) => {
    const formData = new FormData()
    if (id == 1) {
      formData.append('category_id', '1')
      dispatch(GovBook(navigation, formData))
    }
    else if (id == 2) {
      formData.append('category_id', '2')
      dispatch(Allclasses(navigation, formData))
    }
    else if (id == 3) {
      formData.append('category_id', '3')
      dispatch(Allclasses(navigation, formData))
    } else {
      formData.append('category_id', '4')
      dispatch(YoutudeView(navigation, formData))
    }

  }


  const menuItems = [
    { id: 1, title: 'Govt. Exam', icon: require('../images/book.png'), button: '1', backgroundColor: '#ba61c9' },
    { id: 2, title: 'Daily Classes', icon: require('../images/classroom.png'), button: '2', backgroundColor: '#FFA726' },
    { id: 3, title: 'NCERT Notes', icon: require('../images/NCERT-Black.png'), button: '3', backgroundColor: '#7acc7e' },
    { id: 4, title: 'Youtube Video', icon: require('../images/youtube.png'), button: '4', backgroundColor: '#F0FFF0' },

  ];

  const Images = [
    {
      id: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmn2JL5FElrABC0NUXZWf1FVgwIrwA-J11zg&s'
    },
    {
      id: 2,
      image: 'https://csat.allen.ac.in/document/student/studentImage/750X530_jee.jpg'
    },
    {
      id: 3,
      image: 'https://myexam.allen.in/wp-content/uploads/2021/02/ALLEN-Raipur-1.jpg'
    },
  ]

  const onCms = (val) => {
    if (val == 1) {
      navigation.navigate('cms',{link :'https://thetrs.com/cms-page/privacy-policy'})
    }
    else if (val == 2) {
      navigation.navigate('cms',{link : 'https://thetrs.com/cms-page/terms'})
    }
    else if (val == 3) {
      navigation.navigate('cms',{link : 'https://thetrs.com/cms-page/about-us'})
    }
  }
  return (
    <View style={styles.container}>
      {/* <StatusBar backgroundColor={"black"}></StatusBar> */}
      <StatusBar
        backgroundColor="#f8f5ff" // Background color of the status bar
        barStyle='dark-content'  // Text color of the status bar (light-content, dark-content)
        hidden={false}            // Hide or show the status bar
        translucent={false}       // Make the status bar translucent
      />

      <View style={{ height: 300 }}>
        <Swiper autoplay autoplayTimeout={3} style={{ height: 250 }} dotStyle={{}}>
          {BannerData.map((item,index) => (
            
            <Image
              key={index}
              source={{ uri: item?.slider }}
              style={{
                height: 250,
                // flex:1,
                borderRadius: 20,
                shadowColor: '#000',
                shadowOpacity: 0.1,
                shadowRadius: 10,
                elevation: 10,
              }}
              resizeMode="cover"
            />
          ))}
        </Swiper>
      </View>
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {menuItems.map(item => (
          <TouchableOpacity key={item.id} style={[styles.card, { backgroundColor: item?.backgroundColor }]} onPress={() => onClik(item?.button)}>
            <Image source={item.icon} style={styles.icon} resizeMode='contain' />
            <Text style={styles.cardText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 20, marginBottom: 5 }}>
        <TouchableOpacity onPress={() => onCms(1)}>
          <Text style={styles.cms} >Privacy policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onCms(2)}>
          <Text style={styles.cms}>Terms & condition</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onCms(3)}>
          <Text style={styles.cms}>About Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f5ff',
    // backgroundColor:"lightgreen",
    paddingTop: 30,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // marginTop: 50,
    paddingHorizontal: 5,
    flex: 1,
    // backgroundColor:'red',
    paddingTop: 30
  },
  card: {
    backgroundColor: '#f0e9ff',
    borderRadius: 12,
    width: '48%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,

  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
    // backgroundColor:'transparnt'
  },
  cardText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: 'black'
  },
  cms: {
    color: 'black',
    // color:'white',
    fontSize: 15
  }
});

export default MainScreen;