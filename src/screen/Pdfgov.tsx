import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Pdf from 'react-native-pdf';

const PdfGov = ({ navigation,route }) => {

    // console.log('routeeeeepdfff', route?.params?.pdf?.id);

    const pdfSource = {
        uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
        cache: true,
    };

    return (
        <View style={styles.container}>
            <Pdf
                trustAllCerts={false}
                source={{
                    uri: route?.params?.pdf,
                    cache: true,
                }}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={error => {
                    console.log(error);
                }}
                onPressLink={uri => {
                    console.log(`Link pressed: ${uri}`);
                }}
                style={styles.pdf}
            />

            {/* <TouchableOpacity style={{ backgroundColor: "lightgray", height: 40, width: '100%', alignItems: "center", flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}
            
            onPress={()=> navigation.navigate('comment',{id: route?.params?.pdf?.id})}
            >
                <Text>Give your feedback</Text>
                <Image source={require('../images/right.png')} style={{ height: 30, width: 30 }} resizeMode='contain' />

            </TouchableOpacity> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pdf: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});

export default PdfGov
