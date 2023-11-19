import React from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  Icon,
  Pressable,
  NativeBaseProvider,
} from 'native-base';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const LocationListScreen: React.FC = () => {
  const locations = useSelector((state: any) => state.locations.locations);
  const navigation = useNavigation();

  const handleLocationPress = (location: any) => {
    // Marker'a tıklanınca yapılacak işlemleri buraya ekleyebilirsiniz
    console.log('Konum Detayları:', location);
  };

  const handleEditLocation = (location: any) => {
    // Konumu düzenleme sayfasına gitmek için navigasyonu kullan
    // navigation.navigate('EditLocation', {location});
  };

  const handleShowRoute = () => {
    // Rota göster butonuna tıklandığında yapılacak işlemleri buraya ekleyebilirsiniz
    console.log('Rota Göster');
  };

  return (
    <NativeBaseProvider>
      <Text>Kaydedilmiş Konumlar</Text>
      <FlatList
        data={locations}
        keyExtractor={(item: any) => item.name}
        renderItem={({item}) => (
          <View style={{height: 30, backgroundColor: 'red'}}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
      <Button onPress={handleShowRoute}>
        <Text>Rota Göster</Text>
      </Button>
    </NativeBaseProvider>
  );
};

export default LocationListScreen;
