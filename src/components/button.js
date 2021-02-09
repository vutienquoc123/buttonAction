import React, { useState } from 'react'
import {View,Text,Animated,TouchableWithoutFeedback,StyleSheet} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
export default function button () {
    const animation = new Animated.Value(0)
    let [open,setOpen] = useState(true) 
    const toggleMenu =()=>{
        const toValue = open?0:1;
        Animated.spring(animation,{
            toValue,
            friction:5,
            useNativeDriver:false
        }).start();
        open = !open;
    }
        const pinStyle = {
            transform:[
                { scale: animation},
                {
                    translateY: animation.interpolate({
                        inputRange: [0,1],
                        outputRange: [0,-10],
                    })
                }
            ]
        }
        const thumStyle = {
            transform:[
                { scale: animation},
                {
                    translateY: animation.interpolate({
                        inputRange: [0,1],
                        outputRange: [0,-20],
                    })
                }
            ]
        }
        const thirStyle = {
            transform:[
                { scale: animation},
                {
                    translateY: animation.interpolate({
                        inputRange: [0,1],
                        outputRange: [0,-30],
                    })
                }
            ]
        }
        const rotation = {
            transform:[
                {
                    rotate: animation.interpolate({
                        inputRange: [0,1],
                        outputRange: ["0deg","45deg"],
                    })
                }
            ]
        }
        const opacity = animation.interpolate({
            inputRange:[0,0.5,1],
            outputRange:[0,0,1]
        })
        return (
            <View style={{alignItems:'center',position:'absolute' ,bottom:100}}>
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button,styles.secon,thirStyle,opacity]}>
                        <AntDesign name='hearto' size={24} color='#F02A4B'/>
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button,styles.secon,thumStyle,opacity]}>
                        <AntDesign name='apple1' size={24} color='#F02A4B'/>
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button,styles.secon,pinStyle,opacity]}>
                        <AntDesign name='windows' size={24} color='#F02A4B'/>
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={toggleMenu}>
                    <Animated.View style={[styles.button,styles.menu,rotation]}>
                        <AntDesign name='plus' size={24} color='#fff'/>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    
}
const styles = StyleSheet.create({
    button:{
       
        height:60,
        width:60,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        shadowRadius:10,
        shadowColor:'#F02A4B',
        shadowOpacity:0.3,
        shadowOffset:{height:10},
    },
    menu:{
        backgroundColor:'#F02A4B',
    },
    secon:{
        width:48,
        height:48,
        borderRadius:24,
        backgroundColor:'#fff'
    }
});
