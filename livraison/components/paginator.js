// import React from 'react';
// import {
//     View, 
//     StyleSheet,
//     Text
//   } from 'react-native';

// export default Paginator = ({ data }) => {

//     return (

//         <View style={styles.container}>
//            {data.map((_, i)=> {
//                return <View style={[styles.dot, {width: 10}]} key= {i.toString()} />
//            })}
//             <Text style={styles.text}>Skip</Text>
//         </View>
//     )
// }


// const styles = StyleSheet.create({

//     container: {
//         flex: 1,
//         flexDirection: 'row',
//         height : 64
//     },

//     dot: {
//         height: 10,
//         bordergroundColor: "black",
//         borderRadius: 5,
//         marginHorzontal: 8
//     },
//     text: {
//         color: 'red',
//     }
// })