// import { useDispatch } from "react-redux";
import { endPoint } from "../apis/apiEndPoints";
import { appOperation } from "../apis/apiservies";
import { Dispatch } from 'react';
import { setAllClass, setBooks, setSubjects, setTopics, setWinnner, setYoutubeVideo } from "./slice";
export const categorie = () => async () => {
  // dispatch(setLoading(true));
  try {
    const response: any = await appOperation.get(endPoint?.categories);

    if (response?.success == 200) {
      console.log('resoine--->>>>', response);

    } else {
      console.log('eroor');

    }
  } catch (error: any) {
    console.log('error', error);

  }
};

export const YoutudeView = (navigation, data) => async (dispatch: Dispatch<any>) => {
  // dispatch(setLoading(true));
  try {
    const response: any = await appOperation.post(endPoint?.videos, data);

    if (response?.success == 200) {
      console.log('YoutudeView--->>>>', response);
      dispatch(setYoutubeVideo(response?.data))
      navigation.navigate('Youtube')

    } else {
      console.log('eroor');

    }
  } catch (error: any) {
    console.log('error', error);

  }
};

export const Allclasses = (navigation, data) => async (dispatch: Dispatch<any>) => {
  // dispatch(setLoading(true));
  try {
    const response: any = await appOperation.post(endPoint?.classes, data);

    if (response?.success == 200) {
      console.log('YoutudeView--->>>>', response);
      dispatch(setAllClass(response?.data))
      navigation.navigate('AllClass')

    } else {
      console.log('eroor');

    }
  } catch (error: any) {
    console.log('error', error);

  }
};


export const GovBook = (navigation, data) => async (dispatch: Dispatch<any>) => {
  // dispatch(setLoading(true));
  try {
    const response: any = await appOperation.post(endPoint?.gov, data);

    if (response?.success == 200) {
      console.log('GovetExam--->>>>', response);
      dispatch(setBooks(response?.data))
      navigation.navigate('GovetExam')

    } else {
      console.log('eroor');

    }
  } catch (error: any) {
    console.log('error', error);

  }
};


export const subjectsByClasses = (navigation, data) => async (dispatch: Dispatch<any>) => {
  // dispatch(setLoading(true));
  try {
    const response: any = await appOperation.post(endPoint?.subjectsbyclass, data);

    if (response?.success == 200) {
      console.log('subjectsbyclass--->>>>', response);
      dispatch(setSubjects(response?.data))
      navigation.navigate('Classes')

      // navigation.navigate('GovetExam')


    } else {
      console.log('eroor');

    }
  } catch (error: any) {
    console.log('error', error);

  }
};

export const chaptersAll = (navigation, data, item,ids) => async (dispatch: Dispatch<any>) => {
  // dispatch(setLoading(true));
  try {
    const response: any = await appOperation.post(endPoint?.chapters, data);

    if (response?.success == 200) {
      console.log('chapters--->>>>', response);
      dispatch(setTopics(response?.data))
      // navigation.navigate('Classes')
      navigation.navigate('ChapterScreen', { teacher: item ,id: ids})
      // navigation.navigate('GovetExam')


    } else {
      console.log('eroor');

    }
  } catch (error: any) {
    console.log('error', error);

  }
};

export const chaptersAllTwo = ( data) => async (dispatch: Dispatch<any>) => {
  // dispatch(setLoading(true));
  try {
    const response: any = await appOperation.post(endPoint?.chapters, data);

    if (response?.success == 200) {
      console.log('chapters--->>>>', response);
      dispatch(setTopics(response?.data))
      // navigation.navigate('Classes')
      // navigation.navigate('ChapterScreen', { teacher: item ,id: ids})
      // navigation.navigate('GovetExam')


    } else {
      console.log('eroor');

    }
  } catch (error: any) {
    console.log('error', error);

  }
};


export const Getwinner = () => async (dispatch: Dispatch<any>) => {
  // dispatch(setLoading(true));
  try {
    const response: any = await appOperation.get(endPoint?.winner);

    if (response?.success == 200) {
      console.log('Getwinner--->>>>', response);
      dispatch(setWinnner(response?.slider_images))

    } else {
      console.log('eroor');

    }
  } catch (error: any) {
    console.log('error', error);

  }
};



export const commentAdd = ( data) => async (dispatch: Dispatch<any>) => {
  // dispatch(setLoading(true));
  try {
    const response: any = await appOperation.post(endPoint?.comment, data);

    if (response?.success == 200) {
      console.log('commentAdd--->>>>', response);


    } else {
      console.log('eroor');

    }
  } catch (error: any) {
    console.log('error', error);

  }
};