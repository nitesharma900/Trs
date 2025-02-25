import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screen/MainScreen';
import ChapterListScreen from '../screen/ChapterListScreen';
import YoutubeVideo from '../screen/YoutubeVideo';
import GoveExam from '../screen/GoveExam';
import Pdfs from '../screen/Pdf';
import ClassListScreen from '../screen/Classes';
import AllClass from '../screen/AllClasses';
import YouTubeView from '../screen/YoutubeVIew';
import TeacherInfo from '../screen/Teacherinfo';
import Cms from '../screen/cms';
import Comment from '../screen/Comment';
import PdfGov from '../screen/Pdfgov';


const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ChapterScreen" component={ChapterListScreen}options={{ headerShown: false }}/>
        <Stack.Screen name="Youtube" component={YoutubeVideo}options={{ headerShown: false }}/>
        <Stack.Screen name="GovetExam" component={GoveExam}options={{ headerShown: false }}/>
        <Stack.Screen name="Pdf" component={Pdfs}options={{ headerShown: false }}/>
        <Stack.Screen name="Classes" component={ClassListScreen}options={{ headerShown: false }}/>
        <Stack.Screen name="AllClass" component={AllClass}options={{ headerShown: false }}/>
        <Stack.Screen name="YtView" component={YouTubeView}options={{ headerShown: false }}/>
        <Stack.Screen name="TeacherInfo" component={TeacherInfo}options={{ headerShown: false }}/>
        <Stack.Screen name="cms" component={Cms}options={{ headerShown: false }}/>
        <Stack.Screen name="comment" component={Comment}options={{ headerShown: false }}/>
        <Stack.Screen name="Pdfgov" component={PdfGov}options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack