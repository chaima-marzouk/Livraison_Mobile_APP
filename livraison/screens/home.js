import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Dimensions,
  StyleSheet,
  Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import LetsStart from '../assets/button.svg';
import { useNavigation } from '@react-navigation/native';
import Services from './slideShowServices';


export default function App() {

  const { colors } = useTheme();
  const navigation = useNavigation();
  
  return (
    
    <View>
      <View style={{height: '100%' , position: 'relative'}} >
        <Image
        style={{position: "absolute", height: '100%'}}
          source={require('../assets/background.png')}
        />
        <StatusBar backgroundColor='' barStyle="light-content"/>
      <View style={styles.header}> 
      
          <Animatable.Image 
              animation="bounceIn"
              duraton="1500"
              source={require('../assets/Good-food-logo-design-on-transparent-background-PNG.png')}
              style={styles.logo}
              resizeMode="stretch"
          />
      </View>
        <Animatable.View style={[styles.footer, {backgroundColor: '#F1F1F1'}]}animation="fadeInUpBig">
            <Text style={[styles.hungry, {color: '#FFB500'}]}>Hungry?</Text>
            <Text style={[styles.title, {color: '#46200A' }]}>Get the fatest food delievery </Text>
            <Text style={styles.text}>Sign in with account</Text>
            <View style={styles.button}>
                <TouchableOpacity>
                    <View>
                        <LetsStart style={styles.letsStartBtn} size={10}  onPress={() => navigation.navigate(Services)}></LetsStart> 
                    </View>
                </TouchableOpacity>
            </View>    
        </Animatable.View>
      </View>
    </View>
  );
};

    const {height} = Dimensions.get("screen");
    const height_logo = height * 0.21;

    const styles = StyleSheet.create({
        container: {
        flex: 1, 
        backgroundColor: '#DAD9D9',
        },
        header: {
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center'
        },
        footer: {
            flex: 1,
            backgroundColor: '#FFB500',
            borderTopLeftRadius:30,
            borderTopRightRadius: 30,
            paddingVertical: 50,
            paddingHorizontal: 30,
        },
        logo: {
            width: height_logo,
            height: height_logo
        },
        title: {
            color: '#05375a',
            fontSize: 28,
            textDecorationStyle: "solid",
            // textAlign: "center",
            marginTop:3,
        },
        hungry: {
            color: '#05375a',
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: "center",
            textDecorationLine: "underline",
            textDecorationStyle: "solid",
            textDecorationColor: "#000"
        },
        text: {
            color: 'grey',
            marginTop:5,
            alignItems: 'center'
        },
        button: {
            alignItems: 'flex-end',
            marginTop: 30
        },
        signIn: {
            width: 150,
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            flexDirection: 'row'
        },
        textSign: {
            color: 'white',
            fontWeight: 'bold'
        },
        letsStartBtn: {
        alignItems: 'center',
        marginRight: '40%',
        width: '8s0px'
        }
    });