import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { subjectsByClasses } from '../Action/AppAction';

const AllClass = ({ navigation }) => {

const dispatch = useDispatch()
    const menuItems = useSelector((state: any) => state?.authReducer?.useAllclass)

    console.log('menuItemsmenuItems', menuItems);

    const OnClick = (id) => {
        const formData = new FormData()
        formData.append('class_id', id)

        dispatch(subjectsByClasses(navigation, formData))
    }


    return (
        <View style={styles.container}>
            {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image source={require('../images/left.png')} style={{ height: 20, width: 40 }} resizeMode='contain' />
                </TouchableOpacity>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: '500' }}>Class</Text>
                <View style={{ width: 40 }}></View>
            </View> */}

            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Image source={require('../images/left.png')} style={styles.backIcon} resizeMode='contain' />
                </TouchableOpacity>
                <Text style={styles.headerText}>Class</Text>
                <View style={{ width: 40 }}></View>
            </View>
            <ScrollView contentContainerStyle={styles.gridContainer}>
                {menuItems.map(item => (
                    <TouchableOpacity key={item.id} style={styles.card} onPress={() => OnClick(item?.id)}>
                        <Image source={{ uri: item?.binner_image }} style={styles.icon} resizeMode='cover' />
                        <Text style={styles.cardText}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f5ff',
        paddingTop: 20,
        paddingHorizontal: 5,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        // marginBottom: 20,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 5
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
        elevation: 8,
    },
    icon: {
        width: 60,
        height: 60,
        marginBottom: 10,
    },
    cardText: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
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
        borderRadius: 12,
        paddingHorizontal: 10,
        height: 45,
        // shadowColor: '#000',
        // shadowOpacity: 0.1,
        // shadowRadius: 4,
        // elevation: 3,
        marginBottom: 15,
    },
    searchIcon: {
        width: 20,
        height: 20,
        tintColor: '#888',
        marginRight: 10,
    },
    searchBar: {
        flex: 1,
        fontSize: 16,
        color: 'black',
    },
});

export default AllClass;
