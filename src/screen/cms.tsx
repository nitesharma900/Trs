import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import WebView from 'react-native-webview';

const Cms = ({ navigation ,route}) => {

  console.log('rrr---',route?.params?.link);
  
  const webViewRef = useRef(null);
  const disableZoomScript = `
      (function() {
        var head = document.getElementsByTagName('head')[0];
        var viewportMeta = document.querySelector('meta[name="viewport"]');
        if (viewportMeta) {
          viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
        } else {
          var meta = document.createElement('meta');
          meta.name = 'viewport';
          meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
          head.appendChild(meta);
        }
      })();
    `;

  const onMessage = (event: any) => {
    const { data } = event.nativeEvent;
    if (data === 'pageLoaded') {
      webViewRef.current.injectJavaScript(disableZoomScript);
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#f8f5ff', paddingTop: 20, paddingHorizontal: 5 }}>
      {/* <Text>cms</Text> */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require('../images/left.png')} style={styles.backIcon} resizeMode='contain' />
        </TouchableOpacity>
        <Text style={styles.headerText}>CMS</Text>
        <View style={{ width: 40 }}></View>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 5, marginTop: 20 }}>
        <WebView
          ref={webViewRef}
          originWhitelist={['*']}
          source={{ uri: route?.params?.link }}
          onMessage={onMessage}
          injectedJavaScriptBeforeContentLoaded={`window.ReactNativeWebView.postMessage('pageLoaded');`}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          injectedJavaScript={`const meta = document.createElement('meta');
            meta.setAttribute('content', 'width=device-width, initial-scale=0.8, maximum-scale=0.8, user-scalable=0.5');
            meta.setAttribute('name', 'viewport');
            document.getElementsByTagName('head')[0].appendChild(meta); `}
        />
      </View>

    </View>
  )
}

export default Cms

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
})