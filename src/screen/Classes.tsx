import React from 'react';
import { FlatList, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { chaptersAll } from '../Action/AppAction';


const COLORS = ["#FFA726", "#29B6F6", "#66BB6A", "#AB47BC",];
const ClassListScreen = ({ navigation }: any) => {
    const dispatch = useDispatch()
    const SubjectData = useSelector((state: any) => state?.authReducer?.useSubjects)



    // console.log('SubjectDataSubjectData',SubjectData);

    const OnClick = (id,teacher) => {
        const formData = new FormData()
        formData?.append('subject_id', id)
        dispatch(chaptersAll(navigation, formData ,teacher,id))
    }




    const ClassCard = ({ data, index }: any) => (
        <TouchableOpacity
            style={[styles.card,
            {
                // backgroundColor,
                justifyContent: 'space-between',
                backgroundColor: COLORS[index % COLORS.length]
            }]}
            onPress={() => OnClick(data?.id, data?.teacher)}>
            <Text style={styles.subject}>{data?.name}</Text>

            <View
                style={{
                    alignItems: 'center',
                    alignSelf: 'flex-end',
                }}>
                <Image source={{ uri: data?.teacher?.teacher_images }} style={{ height: 50, width: 50, borderRadius: 50 }} resizeMode='contain' />

                <Text style={styles.teacher}>{data?.teacher?.name}</Text>
            </View>
        </TouchableOpacity>
    );
    return (
        <View style={{ flex: 1, backgroundColor: '#f8f5ff', paddingTop: 20, paddingHorizontal: 5 }}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Image source={require('../images/left.png')} style={styles.backIcon} resizeMode='contain' />
                </TouchableOpacity>
                <Text style={styles.headerText}>Subject</Text>
                <View style={{ width: 40 }}></View>
            </View>
            <FlatList
                data={SubjectData}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <ClassCard
                        data={item}
                        index={index}
                    />
                )}
                contentContainerStyle={styles.container}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    card: {
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        height: 150,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
    },
    subject: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    period: {
        fontSize: 16,
        color: 'white',
        marginTop: 4,
    },
    teacher: {
        fontSize: 14,
        color: 'white',
        marginTop: 8,
        fontWeight: 'bold'
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
});

export default ClassListScreen;
