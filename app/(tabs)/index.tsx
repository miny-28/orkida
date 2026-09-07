import { StyleSheet, Text, View } from 'react-native';
 

function myApp(){
    return (

        <View style={styles.container}>
            <View style={styles.device}>
            <View style={styles.screen}>
                <Text>welcome to my music player</Text>
         </View>

         <View style={styles.decorations}>
          <Text>✦</Text>
          <Text>✧</Text>
          <Text>✦</Text>
        </View>

 <View style={styles.controls}>
        </View>

      </View>
    </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        
    },
    device:{
width:300,
height:600,
borderRadius:20,
backgroundColor:"#f2bdcd",
 alignItems:'center',
        justifyContent:'flex-start',
paddingTop:40,
    },

    screen:{
        width:250,
        height:250,
        backgroundColor:"#ffffff",
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
    },

    controls:{
    },

    decorations:{ 
        flexDirection:'row',
        paddingTop:10,
    },
});
export default myApp;