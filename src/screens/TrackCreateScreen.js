import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import Map from '../components/Map';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import '../_mockLocation';
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import {withNavigationFocus} from 'react-navigation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({ isFocused }) => {
  
  const {state, addLocation} = useContext(LocationContext);
  const [err] = useLocation(isFocused, (location) => addLocation(location, state.recording));
  
  return (
    <SafeAreaView forceInset={{top: 'never'}}>
      <Text h3>Create a Track</Text>
      <Map/>
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
