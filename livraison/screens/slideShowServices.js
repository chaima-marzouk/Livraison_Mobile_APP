import React, {useState, useRef} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Animated,
    Pressable
} from 'react-native';
import slides from '../data/slides';
import OnBoardingItem from '../components/OnBoardingItem';
import Paginator from '../components/paginator';
import Skip from '../assets/button.svg';
import { useNavigation } from '@react-navigation/native';
import Signin from '../screens/signin';


export default function Services(){

    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollX = useRef(new Animated.Value(0)).current;

    const viewableItemsChanged = useRef(({ viewableItems }) => {
      setCurrentIndex( viewableItems[0].index )
    }).current;

     const config = useRef({ viewAreaCoverageThreshold: 50}).current
     const navigation = useNavigation(); 
    return (
        <View style={styles.Services_Slide_Container}>
            <View style={{ flex: 3}}>
                <FlatList 
                data={slides} 
                renderItem={({ item }) => <OnBoardingItem item = {item}/>}
                horizontal
                showsVerticalScrollIndicator
                pagingEnabled
                bounces={false}
                keyExtractor={(item => item.id)}
                onScroll={Animated.event([{nativeEvent : {contentOffset: {x: scrollX} }}],
                { useNativeDriver: false,}
                )}
                onViewableItemsChanged={viewableItemsChanged}
                // viewabilityConfig={config}
                scrollEventThrottle={32}
                pagingEnabled
                showsHorizontalScrollIndicator = {false}
                
                ></FlatList>
            </View>

            <View style={styles.btnWrapper}>
            <Pressable
                activeOpacity={0.20}
                style={[styles.btn ,styles.NextBtn]}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: '#46200A'
                  }}
                  onPress={() => navigation.navigate(Accueil)}>
                  Next 
                </Text>
              </Pressable>
              <Pressable
                activeOpacity={0.20}
                style={[styles.btn ,styles.SkipBtn]}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: '#46200A'
                  }}
                  onPress={() => navigation.navigate(Signin)}>
                  Skip 
                </Text>
              </Pressable>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    Services_Slide_Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        width: 190,
        height: 40,
        borderRadius: 10,
        // backgroundColor: '#FFB500',
        justifyContent: 'center',
        alignItems: 'center',
         shadowOpacity:  0.17,
        //  shadowRadius: 2.54,
         elevation: 2
      },
      btnWrapper: {
          flexDirection: 'row',
          marginBottom: 15

      },
      SkipBtn: {
        marginLeft: 12
    },
      NextBtn: {
       backgroundColor: '#FFB500',
       color : '#F1F1F1'
    }
})
