import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import tracker from '../api/tracker';

const trackReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_tracks':
      return action.payload;
    default:
      return state;
  }
}

const fetchTracks = dispatch => async () => {
  console.log("fetching tracks")
  const response = await trackerApi.get('/tracks');
  dispatch({type: 'fetch_tracks', payload: response.data});
  console.log("response = " + response)
  
};

const createTrack = dispatch => async (name, locations) => {
  await trackerApi.post('/tracks', {name, locations});
}

export const {Provider, Context} = createDataContext(
  trackReducer,
  {fetchTracks, createTrack},
  []
);
