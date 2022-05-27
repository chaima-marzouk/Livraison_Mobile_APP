import React, { useEffect, useState }  from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Dimensions,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Pressable
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import LetsStart from '../assets/button.svg';
import { useNavigation } from '@react-navigation/native';
import Services from './slideShowServices';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Signin from './signin';
import axios from 'axios';

export default function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm  , setcomfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");


  const OnSigNup = () => {
    console.warn("signup")
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.warn(email)
    const user = await axios.post("http://192.168.137.1:8080/api/users/register", {name: name, email: email, password: password, passwordConfirm: passwordConfirm, phone_number:  phoneNumber})
                    
      .then((res)=>{
        console.log('done')
    })

  console.log(user)
  }; 

  const { colors } = useTheme();
  const navigation = useNavigation();
  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };
  
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
              duraton="2000"
              source={require('../assets/Good-food-logo-design-on-transparent-background-PNG.png')}
              style={styles.logo}
              resizeMode="stretch"
          />
           <View style={styles.title_container}>
                <Text style={styles.welcome}>Welcome to</Text>
                <Text style={styles.Marhaba}> Marahaba !</Text>
           </View>
           <Text style={styles.delieveryApp}>Delievery APP</Text>
      </View>
        <Animatable.View style={[styles.footer, {backgroundColor: '#F1F1F1'}]}animation="fadeInUpBig">
        <Text style={styles.create}>Create account :</Text>
            <View style={styles.container}>
               <FontAwesome 
               name="user-o"
               size={15}
               />
               <TextInput
               placeholder="Your name"
               style={styles.textinput}
               value={name}
               onChangeText={(e) => setName(e)}
               />
               <Feather 
               name="check-circle"
               color="green"
               size={15}
               style={styles.feather}
               />
            </View>    
            <View style={styles.container}>
              <Entypo
               size={15}
               name='email'
               />
               <TextInput
               placeholder="Your email"
               style={styles.textinput}
               value={email}
               onChangeText={(e) => setEmail(e)}
               />
               <Feather 
               name="mail"
               color="green"
               size={15}
               style={styles.feather}
               />
            </View>    
            <View style={styles.container}>
               <FontAwesome 
               name="lock"
               size={15}
               />
               <TextInput
               placeholder="Your password"
               style={styles.textinput}
               value={password}
               onChangeText={(e) => setPassword(e)}
               />
               <Feather 
               name="eye-off"
               color="green"
               size={15}
               style={styles.feather}
               />
            </View>    
            <View style={styles.container}>
               <FontAwesome 
               name="lock"
               size={15}
               />
               <TextInput
               placeholder="Confirm your password"
               style={styles.textinput}
               value={passwordConfirm}
               onChangeText={(e) => setcomfirmPassword(e)}
               />
               <Feather 
               name="eye-off"
               color="green"
               size={15}
               style={styles.feather}
               />
            </View> 
            <View style={styles.container}>
               <FontAwesome 
               name="phone"
               size={15}
               />
               <TextInput
               placeholder="Confirm your phone number "
               style={styles.textinput}
               value={phoneNumber}
               onChangeText={(e) => setPhoneNumber(e)}
               />
               <Feather 
               name="eye-off"
               color="green"
               size={15}
               style={styles.feather}
               />
            </View> 
            <View style={styles.container_btn} onPress={handleSubmit}>
            <Pressable
                activeOpacity={0.20}
                style={styles.btn}>
                <Text
                 onPress={handleSubmit}
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: '#46200A'
                  }}>
                  Signup
                </Text>
              </Pressable>
    </View>
        <View style={styles.title_container}>
            <Text style={styles.already}>Already have an account ? </Text>
            <Text style={styles.signin} onPress={handleSubmit} >Signin now</Text>
        </View>
        </Animatable.View>
      </View>
    </View>
  );
};

    const {height} = Dimensions.get("screen");
    const height_logo = height * 0.13;

    const styles = StyleSheet.create({
        container: {
       
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
        },
        header: {
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center'
        },
        footer: {
            flex: 4,
            backgroundColor: '#F1F1F1',
            borderTopLeftRadius:30,
            borderTopRightRadius: 30,
            paddingVertical: 20,
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
        create: {
            color: '#05375a',
            fontSize: 20,
            fontWeight: 'bold',
            justifyContent: "center",
            textDecorationColor: "#000",
            marginTop: 30,
            marginBottom : 20
        },
        title_container: {
            flexDirection: 'row',
            justifyContent: "center",
            

        },
        welcome: {
            color: '#46200A',
            fontSize: 20,
            fontWeight: 'bold',
            justifyContent: "center",
            textDecorationColor: "#000"
        },
        Marhaba: {
            color: '#FFB500',
            fontSize: 20,
            fontWeight: 'bold',
            justifyContent: "center",
            textDecorationColor: "#000",
            textDecorationStyle: "solid",

        },
        already:{
            color: '#8C8C8C',
            fontSize: 12,
            alignItems: 'center',
            marginTop: 20
        },
        signin:{
            color: '#46200A',
            fontSize: 12,
            alignItems: 'center',
            textDecorationColor: "#000",
            textDecorationLine: "underline",
            textDecorationStyle: "solid",
            marginTop: 20
        },

        sign_button:{
            borderRadius: 30,
            backgroundColor: "black"
        },

        delieveryApp:{
            color: '#46200A',
            fontSize: 12,
            alignItems: 'center',
            textDecorationColor: "#000",
            textDecorationLine: "underline",
            textDecorationStyle: "solid",
            marginTop: 4
        },
      
        btn: {
            width: 150,
            height: 40,
            borderRadius: 80,
            backgroundColor: '#FFB500',
            justifyContent: 'center',
            alignItems: 'center',
             shadowOpacity:  0.17,
            //  shadowRadius: 2.54,
             elevation: 2
          },

        container_btn: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 70
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
       
        textinput: {
            flex: 2,
            marginTop: Platform.OS === 'ios' ? 0 : -12,
            paddingLeft: 10,
            height: 40,
            margin: 12,
            padding: 10,
            borderRadius: 30,
        //     shadowColor: "#a1a0a0",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity:  0.17,
        // shadowRadius: 2.54,
        // elevation: 2
        },
        
    });