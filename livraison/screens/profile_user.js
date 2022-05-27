import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Animated,
    Pressable,
    Image
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { useFonts } from 'expo-font';
import Accueil from './home_screen';
import Order_history from './historique_order';
import Cart from './cart';
import Styl from '../assets/homeScreen/Ellipse 5.svg'


export default function Profile_user(){

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
                <Animatable.View style={styles.profile_tittle_image_container}>
                    <View style={styles.profile_image_container}>
                        <View style={styles.profil_pic_border}>
                            <Image
                            source={require('../assets/homeScreen/noimage.jpg')}
                            style={styles.profileImage}
                            />
                        </View>
                    </View>
                    <View style={styles.profile_tittle_container}>
                        <Text style={styles.user_name}>Chaima MARZOUK</Text>
                        <Text style={styles.user_role}>User</Text>
                    </View>
                </Animatable.View>
                <View style={styles.user_infos}>
                    <View style={styles.user_infos_phone}>
                        <FontAwesome
                        name='phone'
                        size={16}
                        color={ '#B1B1B1'}
                        />
                        <Text style={styles.user_infos_phone_text}>+212 618-13 29 12</Text>
                    </View>
                    <View style={styles.user_infos_email}>
                        <Fontisto
                        name='email'
                        size={16}
                        color={ '#B1B1B1'}
                        />
                        <Text style={styles.user_infos_email_text}>Marzouk.chaima.892@gmail.com</Text>
                    </View>
                </View>
            </View>
            <Animatable.View style={[styles.footer, {backgroundColor: '#F1F1F1'}]}animation="fadeInUpBig">
                <View style={styles.row_container}>
                    <View style={styles.row_container_container}>
                        <Ionicons 
                        name="fast-food-outline"
                        color="#000000"
                        size={30}
                        style={styles.feather}
                        onPress={() => navigation.navigate(Order_history)}
                        />
                        <Text style={styles.row_container_text}
                        onPress={() => navigation.navigate(Order_history)}>My orders</Text>
                    </View>
                    <View>
                        <MaterialIcons 
                        name='arrow-forward-ios'
                        size={17}
                        onPress={() => navigation.navigate(Order_history)}
                        />
                    </View>
                </View>
                <View style={styles.row_container}>
                    <View style={styles.row_container_container}>
                        <Ionicons 
                        name="cart-outline"
                        color="#000000"
                        size={30}
                        style={styles.feather}
                        onPress={() => navigation.navigate(Cart)}
                        />
                        <Text style={styles.row_container_text}>My Cart</Text>
                    </View>
                    <View>
                        <MaterialIcons 
                        name='arrow-forward-ios'
                        size={17}
                        />
                    </View>
                </View>
                <View style={styles.row_container}>
                    <View style={styles.row_container_container}>
                        <Ionicons 
                        name="md-help-circle-outline"
                        color="#000000"
                        size={30}
                        style={styles.feather}
                        />
                        <Text style={styles.row_container_text}>Help </Text>
                    </View>
                    <View>
                        <MaterialIcons 
                        name='arrow-forward-ios'
                        size={17}
                        />
                    </View>
                </View>
                <View
                    style={{
                        borderBottomColor: '#B1B1B1',
                        borderBottomWidth: 1,
                        marginTop: 40,
                        marginBottom: 10,
                    }}
                    />
                <View style={styles.row_container}>
                    <View style={styles.row_container_container}>
                        <MaterialIcons 
                        name="logout"
                        color="#CB2D2D"
                        size={25}
                        style={styles.feather}
                        />
                        <Text style={styles.row_container_text_logout}>LOGOUT</Text>
                    </View>
                </View>
                
            </Animatable.View>
        </View>
    )
};

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
    profile_tittle_image_container : {
        paddingHorizontal: 10,
        // flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',

    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop:10, 
        marginLeft:10, 
        shadowOpacity:  0.17,
        // elevation: 2
    },
    profile_tittle_container:{
        marginTop:20,
        alignItems: 'center'
        
    },
   user_name:{
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    color: '#46200A',
    },
   user_role:{
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    alignItems: 'center',
    color: '#000000',
    },
    user_infos:{
        paddingHorizontal: 10,
        marginTop:30,
    },
    user_infos_phone:{
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    user_infos_email:{
        paddingHorizontal: 10,
        flexDirection: 'row',
        marginTop: 1,
    },
    user_infos_phone_text:{
        marginLeft: 10,
        color: '#999999',
        fontFamily: 'Poppins-Regular',
    },
    user_infos_email_text: {
        marginLeft: 10,
        color: '#999999',
        fontFamily: 'Poppins-Regular',
        marginBottom: 20
    },
    footer: {
        flex: 1,
        backgroundColor: '#D4D1D1',
        borderTopLeftRadius:30,
        borderTopRightRadius: 30,
        paddingVertical: 35,
        paddingHorizontal: 30,
    },
    row_container: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    row_container_container: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        alignItems: 'center',
    },
    row_container_text:{
        marginLeft: 30,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 13,
    },
    row_container_text_logout:{
        marginLeft: 30,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 13,
        color: '#CB2D2D',
    },
    profil_pic_border:{
        width:130,
        height:130,
        borderRadius:100,
        borderWidth: 5,
        height:130,
        borderColor:'#FFB500',
        // marginTop:20, 

    }

})