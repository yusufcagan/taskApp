import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddLocation from '../screens/AddLocation';
import ListLocation from '../screens/ListLocation';
import FixLocation from '../screens/FixLocation';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AddLocation" component={AddLocation} />
      <Stack.Screen name="ListLocation" component={ListLocation} />
      <Stack.Screen name="FixLocation" component={FixLocation} />
    </Stack.Navigator>
  );
}

export default MyStack;
