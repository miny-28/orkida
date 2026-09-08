import { StyleSheet, Text, View , Pressable} from 'react-native';
import { useState  } from 'react';
import { lightColors, darkColors } from '@/components/theme/colors';
import Songs from '@/components/screens/songs';
import Artists from '@/components/screens/artists';
import Playlists from '@/components/screens/playlists';
import Favorites from '@/components/screens/Favorites';


function myApp(){

    const [selectedTab, setSelectedTab] = useState(0);
    const [showAbout, setShowAbout] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const colors = isDark ? darkColors : lightColors;
    const styles = createStyles(colors);

    return (
        <View style={styles.container}>
            <View style={styles.device}>
            <View style={styles.screen}>
              
              <Text style={styles.appName}>✦orkida✦</Text>

       <Pressable
       style={styles.aboutButton}
      onPress={() => setShowAbout(true)}>
      <Text style={styles.aboutText}>?</Text>
     </Pressable>

              <View style={styles.content}>

                {/* THE MENU */} 
<View style={styles.menu}>
                 <Pressable style={[styles.pressable,selectedTab === 0 && styles.selectedTab ]} 
                 onPress={()=>setSelectedTab(0)}>
              <Text style={[styles.tabs ]}>
                  {selectedTab===0 ?"▶ S ♪" :"S ♪"} 
                 </Text> 
                 </Pressable>

                  <Pressable style={[styles.pressable,selectedTab === 1 && styles.selectedTab ]} 
                  onPress={()=>setSelectedTab(1)}>
                    <Text style={[styles.tabs]}> 
                         {selectedTab===1 ?"▶ A ♙" :"A ♙"} </Text> 
                  </Pressable>
      
       <Pressable style={[styles.pressable,selectedTab === 2 && styles.selectedTab ]}  
       onPress={()=>setSelectedTab(2)}>
       <Text style={[styles.tabs ]}>
        {selectedTab===2 ?"▶ P ☰" :"P ☰"}
        </Text> 
        </Pressable>

        <Pressable style={[styles.pressable,selectedTab === 3 && styles.selectedTab ]} 
        onPress={()=>setSelectedTab(3)}>
       <Text style={[styles.tabs ]}> 
         {selectedTab===3 ?"▶ F ♡" :"F ♡"}
         </Text> 
       </Pressable>
       </View>
       {/* THE MAIN SCREEN */}
       <View style={styles.contentArea}>
{selectedTab === 0 && <Songs colors={colors} />}
{selectedTab === 1 && <Artists colors={colors} />}
{selectedTab === 2 && <Playlists colors={colors} />}
{selectedTab === 3 && <Favorites colors={colors} />}
       </View>

       {/* card for about app*/}
    {showAbout && (
  <View style={styles.aboutcard}>
    <View style={styles.aboutscreen}>
      <Text style={styles.abouttitle}>About orkida</Text>

   <View>
  <Text style={styles.aboutdetails}>. S for choose song u needed</Text>
  <Text style={styles.aboutdetails}>. A for more information about the artist</Text>
  <Text style={styles.aboutdetails}>. P for show your playlist</Text>
  <Text style={styles.aboutdetails}>. F for show your Fav songs</Text>
</View>

    </View>

    <Pressable  style={styles.closeButton}onPress={() => setShowAbout(false)}>
      <Text style={styles.closeText}>X</Text>
    </Pressable>
  </View>
)}
    
              </View>
              <Pressable style={styles.themeButton}
  onPress={() => setIsDark(!isDark)}
>
  <Text style={styles.themeText}>
    {isDark ? "☀" : "☾"}
  </Text>
</Pressable>
              
         </View>
         <View style={styles.decorations}>
          <Text>✦</Text>
          <Text>✧</Text>
          <Text>✦</Text>
        </View>

 <View style={styles.controls}>
    {/* this controls for app */}

        </View>
      </View>
    </View>

    );
}

const createStyles = (colors: typeof lightColors) =>
  StyleSheet.create({
 
          container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center', },
   
    device:{
width:300,
height:600,
borderRadius:20,
backgroundColor:colors.background,
 alignItems:'center',
        justifyContent:'flex-start',
paddingTop:40,
    },

    screen:{
        width:290,
        height:270,
        backgroundColor: colors.screen,
        borderRadius:10,
        alignItems:'center',
        justifyContent: 'center'
    },

    controls:{
    },

    decorations:{ 
        flexDirection:'row',
        paddingTop:10,
        
    },
    appName:{
 fontSize:13,
 color:colors.primary,
alignSelf:'center',
position:'absolute',
top:10,
fontWeight:'bold',
 
    },
    tabs:{
color:colors.secondary,
alignSelf:'flex-start',
fontSize:10,
marginLeft:10,
fontWeight:'bold',
height:35,

    },
    
    menu:{
       
       width:55,
        height:140,
        borderRadius:10,
       
        backgroundColor:colors.screen,
        justifyContent:'flex-start',

    },
    selectedTab:{
       backgroundColor:colors.selected,
       borderRadius:10,
    },
    
    pressable:{
        width:55,
        height:35,
        justifyContent: 'center',
        alignSelf: 'flex-start',
    },

    content:{
        flexDirection:'row',
        alignItems: 'center',
        width: 270,
  height: 140,
  
        
    },

    contentArea:{
       flex:1,
       backgroundColor:"#ffffff",
    height:140,
    width:190,
    borderRadius:6,
    },

    aboutButton:{

  position: "absolute",
  top: 10,
  right: 10,
  width: 30,
  height: 30,
  borderRadius: 11,
  backgroundColor: "#ffdae9",
  alignItems: 'center',
  justifyContent: 'center',
    },

    aboutText:{
 color: "#811d60",
  fontSize: 12,
  fontWeight: 'bold',
    },

    aboutcard:{
position: 'absolute',
  top: 35,
  left: 10,
  right: 10,
  bottom: 10,
  alignItems: 'center',
  justifyContent: 'center',

    },
 aboutscreen:{
width: 220,
  minHeight: 150,
  backgroundColor: "#fff5f7",
  borderRadius: 12,
  padding: 15,
  alignItems: 'center',
  borderWidth: 1,
  borderColor: "#9a4a7f",

 },
 aboutdetails:{
fontSize: 10,
  color: "#9a4a7f",
  lineHeight: 16,
  textAlign: 'center',
  fontWeight:"bold"
 },
 abouttitle:{
 fontSize: 19,
  color: "#811d60",
  fontWeight: 'bold',
  marginBottom: 12,
 },
 closeButton:{
 position: "absolute",
  top: 10,
  right: 10,
  width: 30,
  height: 30,
  borderRadius: 11,
  backgroundColor: "#ffdae9",
  alignItems: 'center',
  justifyContent: 'center',
 },
 closeText:{
 fontSize: 10,
  color: "#811d60",
  fontWeight: 'bold',
 },
 themeButton:{
position: "absolute",
  top: 10,
  right: 45,
  width: 30,
  height: 30,
  borderRadius: 11,
  backgroundColor: "#ffdae9",
  alignItems: "center",
  justifyContent: "center", 
},

themeText:{
 color: "#811d60",
  fontSize: 12,
  fontWeight: "bold",
},
});
export default myApp;