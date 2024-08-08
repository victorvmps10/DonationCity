import { 
    Text,
    View,
    SafeAreaView,
    StyleSheet, 
    TouchableOpacity, 
    ScrollView, 
    ImageBackground
} from 'react-native';
import Entypo from "react-native-vector-icons/dist/Entypo";
export default function Home(){
 return (
   <SafeAreaView>
   <ScrollView showsVerticalScrollIndicator={false}>
    <View style={style.header}>
    <Text style={style.textHeader}>Home</Text>
    <TouchableOpacity>
    <Entypo name="chat" size={40} color={'#000'} style={{marginTop: 5.5}}/>
    </TouchableOpacity>
    
    </View>
    
    <TouchableOpacity style={style.rankingContainer}>
    <Text style={style.rankingTitle}>RANKING DAS CIDADES</Text>
    <Text style={style.rankingText}>SANTOS LIDERANDO EM 1 LUGAR</Text>
    <Text style={style.rankingText}>SÃO VICENTE DOAÇÕES AUMENTAM</Text>
    </TouchableOpacity>
    <Text style={style.TitleOfScroll}> INSTITUTOS QUE VOCÊ SEGUE </Text>
    
    <TouchableOpacity style={style.ItemContainer}>
        
    </TouchableOpacity>
    <TouchableOpacity style={style.ItemContainer}></TouchableOpacity>
    <TouchableOpacity style={style.ItemContainer}></TouchableOpacity>
    <TouchableOpacity style={style.ItemContainer}></TouchableOpacity>
    <TouchableOpacity style={style.ItemContainer}></TouchableOpacity>
    <TouchableOpacity style={style.ItemContainer}></TouchableOpacity>
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
        backgroundColor: '#696969',
        margin: 10,
        borderRadius: 15,
        height: 100,
    },
    rankingTitle:{
        color: '#FFF',
        margin: 5,
        fontSize: 25,
    },
    rankingText:{
        color: '#FFF',
        margin: 5,
        fontSize: 12,
    },
    TitleOfScroll:{
        color: 'black',
        fontSize: 20,
        margin: 10,
    },
    ItemContainer:{
        backgroundColor: '#000',
        margin: 10,
        borderRadius: 15,
        height: 90,
    }
})