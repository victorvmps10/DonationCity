import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../services/firebaseConnection';
import { useEffect, useState } from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Text, ActivityIndicator, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WelcomeImg from '../../components/Welcome.jpg';
import { useNetInfo } from '@react-native-community/netinfo';

export default function Welcome(){
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const [conection, setConection] = useState(false);
    const NetInfo = useNetInfo();
    useEffect(()=>{
        if (NetInfo.isConnected) {
            setConection(true);
          } else {
            setConection(false);
          }
        const unsub = onAuthStateChanged(auth, (user)=>{
            if(user){
            navigation.navigate('InApp');
            setLoading(false);
            return;
            } 
        setLoading(false);
        })
        console.log(conection);
    }, [NetInfo])
 return(
   <SafeAreaView style={{flex: 1}}>
     <ImageBackground source={WelcomeImg} style={style.img}>
        {conection ? 
    <View style={{flex:1}}>
        {loading ? 
            <View style={{flex:1}}>
            <View style={style.containerLoading}>
            <Text style={style.textLoading}>Carregando</Text>
            <ActivityIndicator size={80} color="#fff" />
            </View>
            <View style={style.containerAlert}>
            <Text style={{color: '#fff'}}>Estamos verificando se está logado aguarde</Text>
            </View>
            </View>
        :
        
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
        
     }
    </View> 
    :
            <View style={{flex:1}}>
            <View style={style.containerLoading}>
            <Text style={[style.textLoading, {fontSize: 30}]}>Aguardando conexão</Text>
            <ActivityIndicator size={80} color="#fff" />
            </View>
            <View style={style.containerAlert}>
            <Text style={{color: '#fff'}}>Reinicie o aplicativo se demorar muito</Text>
            </View>
            </View>
        }
     
     </ImageBackground>
   </SafeAreaView>
  );
}

const style = StyleSheet.create({
    containerRowButton:{
        flex:1,
        flexDirection: 'row',
        width: '100%',
        marginBottom: 10,
        alignItems: 'flex-end',
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
    img:{
        flex: 1
    },
    containerLoading:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLoading:{
        fontSize: 50,
        color: '#fff',
        margin: 15
    },
    containerAlert:{
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
})
