import { 
    Text,
    View,
    SafeAreaView,
    StyleSheet, 
    TouchableOpacity, 
    ScrollView, 
    Image,
    Alert
} from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import IcoNull from '../../components/IconNull.jpg';
import { signOut } from 'firebase/auth';
import { auth } from '../../services/firebaseConnection';
export default function Account(){
    async function handleOut(){
        Alert.alert('Aviso', 'Você está saindo da conta, confirma?',
            [
            {
                text: 'Não',
                onPress: ()=> {}
            },
            {
                text: 'Sim',
                onPress: async ()=> await signOut(auth)
            }
            ]
        )
        
    }
 return (
   <SafeAreaView>
   <ScrollView showsVerticalScrollIndicator={false}>
    <View style={style.header}>
    <Text style={style.textHeader}>Conta</Text>
    <TouchableOpacity>
    <AntDesign name="setting" size={40} color={'#000'} style={{marginTop: 5.5}}/>
    </TouchableOpacity>
    </View>
    <View style={{alignItems: 'center'}}>
    <Image source={IcoNull} style={{width: 200, height: 200}}/>
    </View>
    
    <TouchableOpacity style={style.rankingContainer}>
    <Text style={style.rankingTitle}>PROGRESSO - PRATA II</Text>
    <Text style={style.rankingText}>200 PONTOS</Text>
    </TouchableOpacity>
    <View style={{flexDirection: 'row', width: '100%'}}>
    <TouchableOpacity style={[{width: '47.5%'}, style.containerButton]}>
        <Text style={style.TextButton}>SEGUINDO</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[{width: '47.5%'}, style.containerButton]}>
        <Text style={style.TextButton}>SUPORTE</Text>
    </TouchableOpacity>
    </View>
   <TouchableOpacity style={style.containerButton}>
        <Text style={style.TextButton}>FORMAS DE PAGAMENTO</Text>
    </TouchableOpacity>
   <View style={{alignContent: 'flex-end'}}>
   <TouchableOpacity style={style.containerButton} onPress={handleOut}>
        <Text style={style.TextButton}>ENCERRAR SESSÃO</Text>
    </TouchableOpacity>
   </View>
    </ScrollView>
   </SafeAreaView>
  );
}

const style = StyleSheet.create({
    header:{
        margin: 10,
        marginTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    textHeader:{
        color: 'black',
        fontSize: 40,
    },
    rankingContainer:{
        backgroundColor: '#a9a9a9',
        margin: 10,
        borderRadius: 15,
        height: 100,
    },
    rankingTitle:{
        color: '#FFF',
        margin: 5,
        fontSize: 30,
    },
    rankingText:{
        color: '#FFF',
        margin: 5,
        fontSize: 20,
    },
    containerButton:{
        backgroundColor: '#000',
        margin: 5,
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
      
    },
    TextButton:{
        color: '#FFF',
        fontSize: 25
    }
})