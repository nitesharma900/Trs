import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const GoveExam = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const BooksData = useSelector((state: any) => state?.authReducer?.useBooks)
    console.log('BooksDataBooksData', BooksData);

    useEffect(() => {
        setFilteredData(BooksData)
    }, [BooksData])


    const handleSearch = (text) => {
        setSearch(text);
        if (text) {
            const newData = BooksData.filter(item => item.name_en.toLowerCase().includes(text.toLowerCase()));
            setFilteredData(newData);
        } else {
            setFilteredData(BooksData);
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#f8f5ff', paddingHorizontal: 5, paddingTop: 20 }}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Image source={require('../images/left.png')} style={styles.backIcon} resizeMode='contain' />
                </TouchableOpacity>
                <Text style={styles.headerText}>BOOKS</Text>
                <View style={{ width: 40 }}></View>
            </View>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search books..."
                    placeholderTextColor="#888"
                    value={search}
                    onChangeText={handleSearch}
                />
            </View>

            <FlatList
                data={filteredData ? filteredData : BooksData}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={() =>
                    <Text style={{ color: '#000', textAlign: 'center', marginTop: '50%', fontWeight: '600' }}>No Data Found</Text>
                }
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Pdfgov', { pdf: item?.pdf })} style={styles.bookItem}>
                        <Image source={require('../images/Message.png')} style={styles.bookImage} resizeMode='contain' />
                        <Text style={styles.bookTitle}>{item.name}</Text>
                    </TouchableOpacity>
                )}
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
    bookItem: {
        flexDirection: 'row',
        backgroundColor: '#f0e9ff',
        flex: 1,
        // backgroundColor:'red',
        padding: 10,
        marginVertical: 8,
        // marginHorizontal:5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 6,
        marginHorizontal: 5,

    },
    bookImage: {
        height: 60,
        width: 60,
        // backgroundColor:'red'
    },
    bookTitle: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 10,
        // flex:1,
        // backgroundColor:'red',
        marginLeft: 20,
        // marginRight:10
        width: '80%'

    },
});

export default GoveExam;
