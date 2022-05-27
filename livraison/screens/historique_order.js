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
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';




export default function Order_history() {
    
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
       <View style={styles.row_container_container}>
            <Ionicons 
            name="fast-food-outline"
            color="#000000"
            size={30}
            style={styles.feather}
            />
            <Text style={styles.row_container_text}
           >My orders</Text>
        </View>
       </View>
       <Animatable.View style={[styles.footer, {backgroundColor: '#F1F1F1'}]} 
       animation="fadeInUpBig">
           <View style={styles.card_containerr}>
               <View style={styles.card_container}>
                   <View>
                        <View style={styles.date}>
                            <View>
                                <Text style={styles.tittle}>3 Mai 2022</Text>
                            </View>
                                <View>
                                    <Feather name='more-vertical'/>
                                </View>
                        </View>
                        <View style={styles.price}>
                                <Text style={styles.tittle}>Total :</Text>
                                <Text > 250 dh</Text>
                        </View>
                        <View style={styles.price}>
                                <Text style={styles.tittle}>Status :</Text>
                                <Text style={styles.Delivred} > Delivred</Text>
                        </View> 
                   </View>
                  
                  
               </View>
               
           </View>
           <View style={styles.card_container}>
           <View>
                        <View style={styles.date}>
                            <View>
                                <Text style={styles.tittle}>21 Mai 2022</Text>
                                <Text> </Text>
                            </View>
                                <View>
                                    <Feather name='more-vertical'/>
                                </View>
                        </View>
                        <View style={styles.price}>
                                <Text style={styles.tittle}>Total :</Text>
                                <Text > 100 dh</Text>
                        </View>
                   <View style={styles.price}>
                        <Text style={styles.tittle}>Status :</Text>
                        <Text style={styles.Delivred} > Delivred</Text>
                   </View> 
               </View>
           </View>
           <View style={styles.card_container}>
           <View>
                        <View style={styles.date}>
                            <View style={styles.text}>
                                <Text style={styles.tittle}>23 Mai 2022</Text>
                                <Text> </Text>
                            </View>
                                <View>
                                    <Feather name='more-vertical'/>
                                </View>
                        </View>
                        <View style={styles.price}>
                                <Text style={styles.tittle}>Total :</Text>
                                <Text > 200 dh</Text>
                        </View>
                   <View style={styles.price}>
                        <Text style={styles.tittle}>Status :</Text>
                        <Text style={styles.Ready} > Ready</Text>
                   </View> 
               </View>
           </View>
       </Animatable.View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: '#FFC63C',
    },
    footer: {
        flex: 1,
        backgroundColor: '#D4D1D1',
        borderTopLeftRadius:30,
        borderTopRightRadius: 30,
        paddingVertical: 35,
        paddingHorizontal: 30,
    },
    header:{
        alignItems: 'center',
        marginTop:30,
        paddingHorizontal: 20,
    },
    row_container_container: {
        flexDirection: 'row',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 20,
        alignItems: 'center',
    },
   
    row_container_text:{
        marginLeft: 20,
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
    },
    card_container:{
  
        backgroundColor: '#E1E0E0',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 20,
        shadowOpacity:  0.17,
        elevation: 2

    },
    text:{
        flexDirection: 'row',
        justifyContent: 'space-between',
       

    },
    date:{
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    price:{
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    tittle:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        marginRight: 20
    },
    Delivred :{
        backgroundColor: '#CB2D2D',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        color: 'white'
    },
    Ready :{
        backgroundColor: '#09CEB4',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        color: 'white'
    }
});