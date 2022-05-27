import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import{
    View,
    Text,
    StyleSheet,
    FlatList,
    Animated,
    Pressable,
    Image,
    ScrollView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';




export default function Cart() {
    
const navigation = useNavigation();

const [loaded] = useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
});

if (!loaded) {
    return null;
}

  return (
    // <ScrollView style={styles.container}>
        <View style={styles.container}>
            <View style={styles.header}>
                    <View style={styles.settings}>
                        <MaterialCommunityIcons
                        name='backburger'
                        size={20}
                        onPress={() => navigation.navigate(Accueil)}
                        animation="fadeInRight"
                        />
                        <Feather
                            name='settings'
                            size={20}
                        />
                    </View>
                </View>
                <View style={styles.cart_container}>
                    <Text  style={styles.cart_tittle}>My Cart</Text>
                </View>
                <View style={styles.cart_card_container}>
                    
                </View>
        <View  style={ styles.footer}>

        </View>
        </View>
        
  );
}


const styles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor: '#E1E0E0',
    },
    header :{
        marginTop:30,
        paddingHorizontal: 20,
    },
    settings: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cart_container:{
        marginTop:20,
        paddingHorizontal: 30,
    },
    cart_tittle:{
        fontFamily: 'Poppins-Bold',
        fontSize: 40,
    },
    cart_card_container:{
        backgroundColor: '#E8E8E8',
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 30,
        marginTop: 20,
        marginBottom: 20,
        shadowOpacity:  0.10,
        elevation: 1,
        marginBottom:400,
    },
    footer: {
        flex: 1,
        backgroundColor: 'black',
        borderTopLeftRadius:30,
        borderTopRightRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
})