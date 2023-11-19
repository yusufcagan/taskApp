// LocationMapScreen.tsx

import React, {useState} from 'react';
import {View, Text, Button, Input, NativeBaseProvider} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {addLocation} from '../redux/action/action';
import MapView, {Marker, Region} from 'react-native-maps';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../routes/types';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'AddLocation'>;
}

const LocationMapScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const [selectedLocation, setSelectedLocation] = useState({
    latitude: 35,
    longitude: 45,
  });
  const [locationName, setLocationName] = useState('');
  const [locationColor, setLocationColor] = useState<string>('');
  const [mapRegion, setMapRegion] = useState<Region>({
    latitude: 35,
    longitude: 45,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const locations = useSelector((state: any) => {
    console.log(state.locations.locations);
  });

  const handleMapPress = (event: any) => {
    setSelectedLocation({
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });
  };

  const handleSaveLocation = () => {
    console.log('Konum Kaydedildi:', {locationName, selectedLocation});
    dispatch(addLocation({name: locationName, coordinates: selectedLocation}));
    navigation.navigate('ListLocation');
  };

  const handleZoomIn = () => {
    // Haritayı büyütme
    setMapRegion(prevRegion => ({
      ...prevRegion,
      latitudeDelta: prevRegion.latitudeDelta / 2,
      longitudeDelta: prevRegion.longitudeDelta / 2,
    }));
  };

  const handleZoomOut = () => {
    // Haritayı küçültme
    setMapRegion(prevRegion => ({
      ...prevRegion,
      latitudeDelta: prevRegion.latitudeDelta * 2,
      longitudeDelta: prevRegion.longitudeDelta * 2,
    }));
  };

  return (
    <NativeBaseProvider>
      <MapView
        style={{flex: 1, height: 400}}
        onPress={handleMapPress}
        region={mapRegion}>
        <Marker coordinate={selectedLocation} />
      </MapView>

      <View>
        <Text>Konum Adı:</Text>
        <Input
          value={locationName}
          onChangeText={text => setLocationName(text)}
        />
      </View>

      <Button onPress={handleSaveLocation}>
        <Text>Konumu Kaydet</Text>
      </Button>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button onPress={handleZoomIn}>
          <Text>Büyült</Text>
        </Button>

        <Button onPress={handleZoomOut}>
          <Text>Küçült</Text>
        </Button>
      </View>
    </NativeBaseProvider>
  );
};

export default LocationMapScreen;
