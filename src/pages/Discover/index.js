import { 
    Text,
    View,
    SafeAreaView,
    StyleSheet, 
    TouchableOpacity, 
    ScrollView 
} from 'react-native';
import Feather from 'react-native-vector-icons/dist/Feather';

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
  
    <ScrollView horizontal={true} style={{marginBottom: 15}} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={style.Item}/>
        <TouchableOpacity style={style.Item}/>
        <TouchableOpacity style={style.Item}/>
        <TouchableOpacity style={style.Item}/>
        <TouchableOpacity style={style.Item}/>
        <TouchableOpacity style={style.Item}/>
    </ScrollView> 
    <ScrollView horizontal={true} style={{marginBottom: 15}} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={style.Item}/>
        <TouchableOpacity style={style.Item}/>
        <TouchableOpacity style={style.Item}/>
        <TouchableOpacity style={style.Item}/>
        <TouchableOpacity style={style.Item}/>
        <TouchableOpacity style={style.Item}/>
    </ScrollView> 
    <ScrollView horizontal={true} style={{marginBottom: 15}} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={style.Item}/>
        <TouchableOpacity style={style.Item}/>
        <TouchableOpacity style={style.Item}/>
        <TouchableOpacity style={style.Item}/>
        <TouchableOpacity style={style.Item}/>
        <TouchableOpacity style={style.Item}/>
    </ScrollView> 
    <ScrollView horizontal={true} style={{marginBottom: 15}} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={style.Item}/>
        <TouchableOpacity style={style.Item}/>
        <TouchableOpacity style={style.Item}/>
        <TouchableOpacity style={style.Item}/>
        <TouchableOpacity style={style.Item}/>
        <TouchableOpacity style={style.Item}/>
    </ScrollView> 
    <ScrollView horizontal={true} style={{marginBottom: 15}} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={style.Item}/>
        <TouchableOpacity style={style.Item}/>
        <TouchableOpacity style={style.Item}/>
        <TouchableOpacity style={style.Item}/>
        <TouchableOpacity style={style.Item}/>
        <TouchableOpacity style={style.Item}/>
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
        borderRadius: 15,
        backgroundColor: '#696969',
        margin: 5
    }
})