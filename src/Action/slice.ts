import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface CounterState {
    useYoutubeView: any;
    useAllclass:any;
    useBooks:any;
    useSubjects:any;
    useTopics:any;
    useWinner:any;

}

export const initialState = {
    useYoutubeView: [],
    useAllclass:[],
    useBooks:[],
    useSubjects:[],
    useTopics:[],
    useWinner:[],

};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
 
    setYoutubeVideo: (state, {payload}: PayloadAction<any>) => {
      state.useYoutubeView = payload;
    },
    setAllClass: (state, {payload}: PayloadAction<any>) => {
        state.useAllclass = payload;
      },
      setBooks: (state, {payload}: PayloadAction<any>) => {
        state.useBooks = payload;
      },
      setSubjects: (state, {payload}: PayloadAction<any>) => {
        state.useSubjects = payload;
      },
      setTopics: (state, {payload}: PayloadAction<any>) => {
        state.useTopics = payload;
      },
      setWinnner: (state, {payload}: PayloadAction<any>) => {
        state.useWinner = payload;
      },
  },
});

export const {setYoutubeVideo,setAllClass,setBooks,setSubjects,setTopics,setWinnner} =
  authSlice.actions;

export const authSelector = (state: any) => state.auth;
export default authSlice.reducer;