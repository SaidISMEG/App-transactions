import { View ,Text ,StyleSheet} from "react-native"

export default function DetailsScreen(){
    return(
        <View style = {styles.container}>
        <Text>settings</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        margin:40,
    }
})

