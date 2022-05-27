import React, { useEffect, useState } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    Image,
    TextInput,
    Button,
    Pressable,
    SafeAreaView,
    FlatList,
    ScrollView
  } from 'react-native';
import { SearchBar } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useFonts } from 'expo-font';
import categories from '../data/categories.js'
import popularData from '../data/categories.js';
import Profile_user from './profile_user.js';
import { useNavigation } from '@react-navigation/native';
import profile_picture from '../assets/homeScreen/noimage.jpg';
import axios from 'axios';

  export default function Accueil() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])

    // useEffect(() => {
    //     const fetchData = async () =>{
    //       try {
    //         const {data: categories} = await axios.get('http://192.168.137.1:8080/api/categories/AllCategories');
    //         setData(Object.values(categories.data));
    //         console.log(categories.data)
    //       } catch (error) {
    //         console.error(error.message);
    //       }
    //       setLoading(false);
    //     }
    
    //     fetchData();
    //   }, []); 

      useEffect(() => {
        const fetchData = async () =>{
          try {
            const {data: meals} = await axios.get('http://192.168.137.1:8080/api/repas/AllMeals');
            setData(Object.values(meals.data));
            console.log(meals.data)
          } catch (error) {
            console.error(error);
          }
          setLoading(false);
        }
    
        fetchData();
      }, []); 

    const search = '';
    const color = '#FACB57'
    const navigation = useNavigation(); 
    const renderItem = ({item}) => {
        return (
                <View style={[styles.categorieItemWrapper, {
                    backgroundColor: item.selected === true ? '#FACB57' : '#F1F1F1',
                    marginLeft : item.id === 1 ? 20 : 0 
                }
                ]}>
                    <Image source={item.image} style={styles.categorieItemImage} />
                    <Text style={styles.categorieListTittle}>{item.tittle}</Text>
                    <View style={[styles.categoriesSelectWrapper, {
                        backgroundColor: item.selected === true ? '#F1F1F1' :  '#EA938E',
                    }]}>
                        <Feather 
                        size={8}
                        style={[styles.categoriesListeIcon , {
                            color: item.selected === true ? '#000000' :  '#FFFFFF',
                        }]}
                        name= 'chevron-right'
                        
                        />
                    </View>
                </View>
        )
    }

    const [loaded] = useFonts({
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

      return(
        <ScrollView>
          <View style={styles.container}>
              <SafeAreaView> 
              <View style={styles.headerWrapper}>
                  <View>
                        <Image
                        onPress={() => navigation.navigate(Profile_user)}
                        source={require('../assets/homeScreen/noimage.jpg')}
                        style={styles.profileImage}
                        />
                      <Text style={styles.profil} onPress={() => navigation.navigate(Profile_user)} >Profil</Text>
                  </View>
                <Entypo
                size={24}
                name='menu'
                />
              </View>
              </SafeAreaView>

              <View style={styles.titllesWrapper}>
                  <Text style={styles.titllesSubtittle}>Food Lovers</Text>
                  <Text style={styles.titllesTittle}>Delievery</Text>
              </View>
              
            <View style={styles.searchBar}>
            <FontAwesome
                size={16}
                name='search'
                 color='#D1D1D1'
                />
                <View style={styles.searchview}>
                    <Text style={styles.searchtext}>Search</Text>
                </View>
            </View>

            <View style={styles.categoriesWrapper}>
                <Text style={styles.categoriesTittle}>Catégories</Text>

                <View style={styles.categoriesListe}>
                    <FlatList
                    data={categories} 
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator = {false}
                    />
                    
                </View>
                
            </View>

            <View style={styles.popularWrapper}>
            <Text style={styles.popularTittle}>Best meals</Text>
            {data.map((item) => (
                <View style={[styles.populatCradWrapper, {
                    marginTop : item.id == 1 ? 10 : 20  
                }]}>
                    <View>
                        <View>
                            <View style={styles.popularTopWrapper}>
                                <MaterialCommunityIcons
                                name='crown'
                                size= {12}
                                color='#FACB57'
                                />
                                <Text style={styles.popularText}>Top of the week</Text>
                            </View>
                            <View style={styles.popularTittlesWrapper}>
                            <Text style={styles.popularTittlesTittle}>{item.name}</Text>
                            <Text style={styles.popularTittlesDescription}>{item.description}</Text>
                            </View>
                        </View>
                        <View style={styles.popularCardBottom}>
                            <View style={styles.addItemToCardBtn}>
                                <Feather
                                 name='plus'
                                 size={10}
                                  />
                            </View>
                            <View style={styles.ratingWrapper}> 
                            <Text style={styles.rating}>{item.prix}</Text>
                                <MaterialIcons
                                name='attach-money'
                                size={13}
                                color='black'
                                />
                            </View>
                        </View>
                    </View>
                </View>
            ))}
            </View>
          
          </View>
          </ScrollView>
      )
  }

  const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      searchBar:{
        flexDirection: 'row',
        marginTop:30,
        paddingHorizontal: 20,
        alignItems: 'center',
      },
      headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 25,
        alignItems: 'center'
      },
      profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
        marginTop: 12,
    },
    titllesWrapper:{
        marginTop: 30,
        paddingHorizontal: 20
    },
    titllesSubtittle:{
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
    },
    titllesTittle:{
        fontFamily: 'Poppins-Bold',
        fontSize: 32,
        marginTop: 5,
    },
    searchview:{
        flex : 1, 
        marginLeft : 10,
        borderBottomColor: '#D1D1D1',
        borderBottomWidth:2,
    },
    searchtext:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        marginBottom: 5,
        color: '#D1D1D1',

    },
    categoriesWrapper:{
        marginTop: 30,
        paddingBottom: 30,
    },
    categoriesListe:{
        paddingTop: 15,
        paddingBottom: 15,
    },
   
    categoriesTittle:{
        fontFamily: ''  ,
        fontSize: 16,
        paddingHorizontal: 20,
        fontFamily: 'Poppins-Medium'

    },
    categorieItemImage:{
        width: 70,
        height: 70,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,  
    },
    categorieItemWrapper: {
    //    backgroundColor: '#FACB57',
       marginRight: 20, 
       borderRadius: 20, 
       marginLeft: 20, 
    //    paddingBottom: 20,
       marginBottom: 5,
       shadowOpacity:  0.17,
       elevation: 2
    },
    categorieListTittle:{
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center',
        fontSize: 14,
        marginTop: 10,
    },
    categoriesSelectWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 26,
        height: 26,
        borderRadius: 26,
        backgroundColor: '#F1F1F1',
        marginLeft: 45,
        marginBottom : 10,  
    },
    categoriesListeIcon:{
        alignSelf: 'center',
        justifyContent: 'center',
    },
    popularTittle:{
        fontFamily: ''  ,
        fontSize: 16,
        paddingHorizontal: 20,
        fontFamily: 'Poppins-Medium'
    },
    popularWrapper: {
        paddingHorizontal: 20,

    },
    popularTittle: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        

    },
    populatCradWrapper: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20
    },
    popularTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    popularText: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        flexDirection: 'row',
        marginLeft: 5
    },

    popularTittlesWrapper:{
        marginTop: 20,
    },
    popularCardBottom:{
        flexDirection: 'row',
        paddingLeft: -20        
    },

    popularTittlesTittle:{
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        color: "black"
    },
    popularTittlesDescription:{
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        color: "#C2C2C2",
        marginTop: 5,

    },
    addItemToCardBtn:{
        backgroundColor: '#FFB500',
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopRightRadius:25,
        borderBottomLeftRadius:20,
        marginLeft: -20,
        marginTop: 10
    },
    ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,

    },
    rating: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: 'black',
        marginLeft: 5,
        marginTop: 3,
    },
    profil:{
        marginTop:5,
        fontFamily: 'Poppins-Medium',
        fontSize: 13,
        marginLeft: 7,
        color: '#B7B7B8',

    }

  })