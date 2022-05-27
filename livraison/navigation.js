import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import Services from './screens/slideShowServices';
import Signin from './screens/signin';
import Signup from './screens/signup';
import Accueil from './screens/home_screen'
import Profile_user from './screens/profile_user';
// import Paginator from './components/paginator';
import Order_history from './screens/historique_order';
import Cart from './screens/cart';
import{
  View, 
  StyleSheet,
} from 'react-native';

const Stack = createNativeStackNavigator();

export default function navigation(){
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
    <Stack.Screen name="Services" component={Services} options={{headerShown: false}} />
    <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}} />
    <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
    <Stack.Screen name="Accueil" component={Accueil} options={{headerShown: false}} />
    <Stack.Screen name="Profile_user" component={Profile_user} options={{headerShown: false}} />
    <Stack.Screen name="Order_history" component={Order_history} options={{headerShown: false}} />
    <Stack.Screen name="Cart" component={Cart} options={{headerShown: false}} />
  </Stack.Navigator>
  
}