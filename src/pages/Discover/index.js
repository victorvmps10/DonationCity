import { 
    Text,
    View,
    SafeAreaView,
    StyleSheet, 
    TouchableOpacity, 
    ScrollView,
    ImageBackground
} from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import Tobby from '../../components/Discover/AAAPG/Tobby.jpg';
import Marlene from '../../components/Discover/AAAPG/Marlene.jpg';
import Saci from '../../components/Discover/AAAPG/Saci.jpg';
import Jequiti from '../../components/Discover/AAAPG/Jequiti.jpg';
import Abrigo from '../../components/Discover/AAAPG/Abrigo.jpg';
import Gato from '../../components/Discover/Patinhas/Gato.jpg';
import Caes from '../../components/Discover/Patinhas/Caes.gif';
import Gato2 from '../../components/Discover/Patinhas/Gato2.jpg';
import CaesComida from '../../components/Discover/Patinhas/CaesComida.gif';
import MomDog from '../../components/Discover/Patinhas/MomDog.gif';
export default function Discover(){
 return (
   <SafeAreaView>
   <ScrollView showsVerticalScrollIndicator={false}>
    <View style={style.header}>
    <Text style={style.textHeader}>Descobrir</Text>
    <TouchableOpacity>
    <Feather name="search" size={40} color={'#000'} style={{marginTop: 5.5}}/>
    </TouchableOpacity>
    </View>
    <Text style={style.NameOng}>Associação de Amparo aos Animais de Praia Grande: </Text>
    <ScrollView horizontal={true} style={{marginBottom: 15}} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={style.Item}>
        <ImageBackground style={{flex:1}} imageStyle={style.ImgItem} source={Tobby} resizeMode="cover" />
        </TouchableOpacity>
        <TouchableOpacity style={style.Item}>
        <ImageBackground style={{flex:1}} imageStyle={style.ImgItem} source={Marlene} resizeMode="cover" />
        </TouchableOpacity>
        <TouchableOpacity style={style.Item}>
        <ImageBackground style={{flex:1}} imageStyle={style.ImgItem} source={Saci} resizeMode="cover" />
        </TouchableOpacity>
        <TouchableOpacity style={style.Item}>
        <ImageBackground style={{flex:1}} imageStyle={style.ImgItem} source={Jequiti} resizeMode="cover" />
        </TouchableOpacity>
        <TouchableOpacity style={style.Item}>
        <ImageBackground style={{flex:1}} imageStyle={style.ImgItem} source={Abrigo} resizeMode="cover" />
        </TouchableOpacity>
        <TouchableOpacity style={style.MoreItem}>
        <AntDesign name="right" size={40} color={'#000'}/>
        </TouchableOpacity>
    </ScrollView> 
    <Text style={style.NameOng}>PATINHAS QUE BRILHAM: </Text>
    <ScrollView horizontal={true} style={{marginBottom: 15}} showsHorizontalScrollIndicator={false}>
    <TouchableOpacity style={style.Item}>
        <ImageBackground style={{flex:1}} imageStyle={style.ImgItem} source={Gato} resizeMode="cover" />
        </TouchableOpacity>
        <TouchableOpacity style={style.Item}>
        <ImageBackground style={[{flex:1, borderRadius: 25}, style.ImgItem]} source={Caes} resizeMode="cover" />
        </TouchableOpacity>
        <TouchableOpacity style={style.Item}>
        <ImageBackground style={{flex:1}} imageStyle={style.ImgItem} source={Gato2} resizeMode="cover" />
        </TouchableOpacity>
        <TouchableOpacity style={style.Item}>
        <ImageBackground style={[{flex:1, borderRadius: 25}, style.ImgItem]} source={CaesComida} resizeMode="cover" />
        </TouchableOpacity>
        <TouchableOpacity style={style.Item}>
        <ImageBackground  style={[{flex:1, borderRadius: 25}, style.ImgItem]} source={MomDog} resizeMode="cover" />
        </TouchableOpacity>
        <TouchableOpacity style={style.MoreItem}>
        <AntDesign name="right" size={40} color={'#000'}/>
        </TouchableOpacity>
    </ScrollView> 
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
    ScrollRow:{
        flexDirection: 'row'
    },
    Item:{
        width: 150,
        height: 150,
        margin: 5,
    },
    NameOng:{
        fontSize: 14,
        color: '#000',
        margin: 10
    },
    ImgItem:{
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 25,
        overflow: 'hidden' 
    },
    MoreItem:{
        borderWidth: 2, 
        borderColor: '#000',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        margin: 5,
    }
})