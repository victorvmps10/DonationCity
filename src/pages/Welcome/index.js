import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../services/firebaseConnection';
import { useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WelcomeImg from '../../components/Welcome.jpg';

export default function Welcome(){
    const navigation = useNavigation();
    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, (user)=>{
            if(user){
            navigation.navigate('InApp')
            } 
        })
    })
 return(
   <SafeAreaView style={{flex: 1}}>
   
    <View style={style.containerRowButton}>
    <TouchableOpacity 
    onPress={()=> {navigation.navigate('SignIn')}} 
    style={[{width: '47.5%'}, style.containerButton]}>
        <Text style={style.textButton}>ENTRAR</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={()=> {navigation.navigate('SignUp')}}
    style={[{width: '47.5%'}, style.containerButton]}>
        <Text style={style.textButton}>REGISTRAR</Text>
    </TouchableOpacity>
    </View>
    
   </SafeAreaView>
  );
}

const style = StyleSheet.create({
    containerRowButton:{
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 10,
    },
    containerButton:{
        backgroundColor: '#000',
        margin: 5,
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
      
    },
    textButton:{
        color: '#FFF',
        fontSize: 25
    },
    Img:{
        marginLeft: -550,
        width: 1500,
        height: 900,
        resizeMode: 'contain'
    }
})