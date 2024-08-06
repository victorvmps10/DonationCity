import { useState } from 'react';
import { 
    SafeAreaView,
    View, 
    TextInput, 
    StyleSheet, 
    TouchableOpacity, 
    Text 
   } from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../services/firebaseConnection';
import { useNavigation } from '@react-navigation/native';

export default function SignUp(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name, setName] = useState('');
    const navigation = useNavigation();
   async function handleCrateUser(){
    if(email != '' || password != ''){
        const user = await createUserWithEmailAndPassword(auth, email, password)
        .then((user)=>{
            navigation.navigate('InApp')
        })
        .catch(err =>{
                Alert.alert("Erro generico");
        })
    }
   }
return(
  <SafeAreaView style={style.container}>
 
    <View style={style.header}>
     <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
   <AntDesign name="back" size={40} color={'#000'} style={{marginTop: 5.5}}/>
   </TouchableOpacity>
   <Text style={style.textHeader}>Registrar</Text>
   
   </View>
   <Text style={style.text}>NOME:</Text>
   <TextInput 
   style={style.input}
   placeholder="Digite seu nome..."
   value={name}
   onChangeText={(text)=>setName(text)}
   />
   <Text style={style.text}>EMAIL:</Text>
   <TextInput 
   style={style.input}
   placeholder="Digite sua email..."
   value={email}
   onChangeText={(text)=>setEmail(text)}
   />
   <Text style={style.text}>SENHA:</Text>
   <TextInput 
   style={style.input}
   placeholder="Digite sua senha..."
   value={password}
   onChangeText={(text)=>setPassword(text)}
   secureTextEntry={true}
   />
   <TouchableOpacity style={style.containerButton} onPress={handleCrateUser}>
       <Text style={style.textButton}>REGISTRAR</Text>
   </TouchableOpacity>
   <TouchableOpacity 
    onPress={()=> {navigation.navigate('SignIn')}} 
    style={[style.containerButton, {backgroundColor: '#0000ff'}]}>
        <Text style={style.textButton}>PREFIRO ENTRAR</Text>
    </TouchableOpacity>
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
   input:{
       margin: 10,
       borderWidth: 2,
       borderRadius: 9,
       paddingLeft: 10,
       paddingRight: 10,
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
})