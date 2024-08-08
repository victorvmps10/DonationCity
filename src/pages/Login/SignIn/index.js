import { useState } from 'react';
import { 
    SafeAreaView,
    View, 
    TextInput, 
    StyleSheet, 
    TouchableOpacity, 
    Text,
    Alert,
    ActivityIndicator
   } from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../services/firebaseConnection';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
export default function SignIn(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [hidePass, setHidePass] = useState(true);
    const navigation = useNavigation();
    function handleLogin(){
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then(()=>{
            navigation.navigate('InApp')
        })
        .catch(err =>{
            if(err.code === "auth/missing-password"){
                Alert.alert("A senha obrigatória");
                setLoading(false)
                return;
            } else if(err.code === "auth/invalid-credential"){
                Alert.alert("A senha está incorreta");
                setLoading(false)
                return;
            } else{
                Alert.alert("Erro generico");
                setLoading(false)
                return;
            }
        })
   }
return(
  <SafeAreaView style={style.container}>
  {loading ? 
     <View style={{flex:1}}>
        <View style={style.containerLoading}>
        <Text style={style.textLoading}>Carregando</Text>
        <ActivityIndicator size={80} color="#000" />
        </View>
        <View style={style.containerAlert}>
            <Text style={{color: '#000'}}>Conectando ao banco de dados</Text>
        </View>
     </View>
     :
     <View>
 <View style={style.header}>
     <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
   <AntDesign name="back" size={40} color={'#000'} style={{marginTop: 5.5}}/>
   </TouchableOpacity>
   <Text style={style.textHeader}>Entrar</Text>
   
   </View>
   <Text style={style.text}>EMAIL:</Text>
   <TextInput 
   style={style.inputEmail}
   placeholder="Digite seu email..."
   value={email}
   onChangeText={(text)=>setEmail(text)}
   placeholderTextColor="#000" 
   />
   <Text style={style.text}>SENHA:</Text>
   <View style={style.containerPass}>
   <TextInput 
   style={style.inputPass}
   placeholder="Digite sua senha..."
   value={password}
   onChangeText={(text)=>setPassword(text)}
   secureTextEntry={hidePass}
   placeholderTextColor="#000" 
   />
   <TouchableOpacity onPress={()=> setHidePass(!hidePass)} style={style.containerHide}>
    {hidePass ?
    <View>
        <Ionicons name="eye" color="#000" size={25}/> 
    </View>
     :
    <View>
        <Ionicons name="eye-off" color="#000" size={25}/> 
    </View> 
     }
    
   </TouchableOpacity>
   </View>
   <TouchableOpacity style={style.containerButton} onPress={handleLogin}>
       <Text style={style.textButton}>ENTRAR</Text>
   </TouchableOpacity>
   <TouchableOpacity 
    onPress={()=> {navigation.navigate('SignUp')}} 
    style={[style.containerButton, {backgroundColor: '#0000ff'}]}>
        <Text style={style.textButton}>É NOVO, SE REGISTRE</Text>
    </TouchableOpacity>
     </View>
  }
  </SafeAreaView>
 );
}

const style = StyleSheet.create({
   container:{
        flex:1,
        paddingTop: 40
   },
   text:{
        color: '#000',
        margin: 10,
        fontSize: 25,
    },
   inputEmail:{
        margin: 10,
        color: "#000",
        borderWidth: 2,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 9,
   },
   inputPass:{
        color: "#000",
        borderWidth: 0,
        width: '92%'
   },
   header:{
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
   },
   textHeader:{
        color: 'black',
        marginLeft: 10,
        fontSize: 40,
   },
   containerButton:{
        backgroundColor: '#000',
        margin: 10,
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center'
   },
   textButton:{
        color: '#FFF',
        margin: 5,
        fontSize: 25,
   },
   containerLoading:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLoading:{
        fontSize: 50,
        color: '#000',
        margin: 15
    },
    containerAlert:{
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    containerPass:{
        borderWidth: 2,
        borderRadius: 9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 5,
        margin: 10,
    },
    containerHide:{
        alignItems: 'flex-end'   
    }
})