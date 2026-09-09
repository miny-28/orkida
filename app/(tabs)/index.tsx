import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';

import { lightColors, darkColors } from '@/components/theme/colors';

import Songs from '@/components/screens/songs';
import Artists from '@/components/screens/artists';
import Playlists from '@/components/screens/playlists';
import Favorites from '@/components/screens/favorites';

function myApp() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [showAbout, setShowAbout] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const colors = isDark ? darkColors : lightColors;
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>

      {/* DEVICE */}
      <View style={styles.device}>

        {/* APP SCREEN */}
        <View style={styles.screen}>

          {/* APP NAME */}
          <Text style={styles.appName}>✦ ORKIDA ✦</Text>

          {/* ABOUT BUTTON */}
          <Pressable
            style={styles.aboutButton}
            onPress={() => setShowAbout(true)}
          >
            <Text style={styles.aboutText}>?</Text>
          </Pressable>

          {/* THEME BUTTON */}
          <Pressable
            style={styles.themeButton}
            onPress={() => setIsDark(!isDark)}
          >
            <Text style={styles.themeText}>
              {isDark ? '☀' : '☾'}
            </Text>
          </Pressable>

          {/* MAIN CONTENT */}
          <View style={styles.content}>

            {/* SIDE MENU */}
            <View style={styles.menu}>

              {/* SONGS */}
              <Pressable
                style={[
                  styles.pressable,
                  selectedTab === 0 && styles.selectedTab,
                ]}
                onPress={() => setSelectedTab(0)}
              >
                <Text style={styles.tabs}>
                  {selectedTab === 0 ? '▶ S ♪' : 'S ♪'}
                </Text>
              </Pressable>

              {/* ARTISTS */}
              <Pressable
                style={[
                  styles.pressable,
                  selectedTab === 1 && styles.selectedTab,
                ]}
                onPress={() => setSelectedTab(1)}
              >
                <Text style={styles.tabs}>
                  {selectedTab === 1 ? '▶ A ♙' : 'A ♙'}
                </Text>
              </Pressable>

              {/* PLAYLISTS */}
              <Pressable
                style={[
                  styles.pressable,
                  selectedTab === 2 && styles.selectedTab,
                ]}
                onPress={() => setSelectedTab(2)}
              >
                <Text style={styles.tabs}>
                  {selectedTab === 2 ? '▶ P ☰' : 'P ☰'}
                </Text>
              </Pressable>

              {/* FAVORITES */}
              <Pressable
                style={[
                  styles.pressable,
                  selectedTab === 3 && styles.selectedTab,
                ]}
                onPress={() => setSelectedTab(3)}
              >
                <Text style={styles.tabs}>
                  {selectedTab === 3 ? '▶ F ♡' : 'F ♡'}
                </Text>
              </Pressable>

            </View>

            {/* MAIN SCREEN AREA */}
            <View style={styles.contentArea}>

              {selectedTab === 0 && <Songs colors={colors} />}

              {selectedTab === 1 && <Artists colors={colors} />}

              {selectedTab === 2 && <Playlists colors={colors} />}

              {selectedTab === 3 && <Favorites colors={colors} />}

            </View>

          </View>

          {/* ABOUT CARD */}
          {showAbout && (
            <View style={styles.aboutcard}>

              <View style={styles.aboutscreen}>

                <Text style={styles.abouttitle}>
                  About ORKIDA
                </Text>

                <View style={styles.aboutInfo}>

                  <Text style={styles.aboutdetails}>
                    • S for choosing your songs
                  </Text>

                  <Text style={styles.aboutdetails}>
                    • A for artist information
                  </Text>

                  <Text style={styles.aboutdetails}>
                    • P for your playlists
                  </Text>

                  <Text style={styles.aboutdetails}>
                    • F for your favorite songs
                  </Text>

                </View>

              </View>

              {/* CLOSE BUTTON */}
              <Pressable
                style={styles.closeButton}
                onPress={() => setShowAbout(false)}
              >
                <Text style={styles.closeText}>×</Text>
              </Pressable>

            </View>
          )}

        </View>

        {/* DECORATIONS */}
        <View style={styles.decorations}>
          <Text style={styles.decoration}>✦</Text>
          <Text style={styles.decoration}>✧</Text>
          <Text style={styles.decoration}>✦</Text>
        </View>

        {/* PLAYER CONTROLS */}
        <View style={styles.controls}>

          <Pressable style={styles.controlButton}>
            <Text style={styles.controlText}>◀</Text>
          </Pressable>

          <Pressable style={styles.playButton}>
            <Text style={styles.playText}>▶</Text>
          </Pressable>

          <Pressable style={styles.controlButton}>
            <Text style={styles.controlText}>▶</Text>
          </Pressable>

        </View>

      </View>

    </View>
  );
}

const createStyles = (colors: typeof lightColors) =>
  StyleSheet.create({

    /* =========================
       MAIN CONTAINER
    ========================= */

    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background,
    },

    /* =========================
       DEVICE
    ========================= */

    device: {
      width: 330,
      height: 520,
      borderRadius: 28,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'flex-start',

      paddingTop: 42,

      borderWidth: 3,
      borderColor: colors.primary,

      shadowOpacity: 0.2,
      shadowRadius: 10,
      shadowOffset: {
        width: 0,
        height: 5,
      },

      elevation: 8,
    },

    /* =========================
       SCREEN
    ========================= */

    screen: {
      width: 300,
      height: 350,

      backgroundColor: colors.screen,

      borderRadius: 14,

      alignItems: 'center',
      justifyContent: 'center',

      borderWidth: 2,
      borderColor: colors.secondary,

      overflow: 'hidden',
    },

    /* =========================
       APP NAME
    ========================= */

    appName: {
      position: 'absolute',

      top: 11,

      alignSelf: 'center',

      fontSize: 17,

      color: colors.primary,

      fontWeight: 'bold',

      letterSpacing: 2,
    },

    /* =========================
       CONTENT
    ========================= */

    content: {
      flexDirection: 'row',

      alignItems: 'stretch',

      width: 285,
      height: 220,

      marginTop: 25,
    },

    /* =========================
       SIDE MENU
    ========================= */

    menu: {
      width: 65,
      height: 220,

      borderRadius: 12,

      backgroundColor: colors.background,

      justifyContent: 'flex-start',

      paddingTop: 8,
      paddingHorizontal: 5,

      borderWidth: 1,
      borderColor: colors.secondary,
    },

    /* =========================
       MENU BUTTON
    ========================= */

    pressable: {
      width: 55,
      height: 42,

      justifyContent: 'center',
      alignItems: 'center',

      borderRadius: 8,

      marginBottom: 4,
    },

    /* =========================
       SELECTED TAB
    ========================= */

    selectedTab: {
      backgroundColor: colors.selected,

      borderRadius: 8,

      transform: [
        {
          scale: 1.03,
        },
      ],
    },

    /* =========================
       TAB TEXT
    ========================= */

    tabs: {
      color: colors.secondary,

      fontSize: 10,

      fontWeight: 'bold',

      textAlign: 'center',
    },

    /* =========================
       MAIN CONTENT AREA
    ========================= */

    contentArea: {
      flex: 1,

      height: 220,

      marginLeft: 7,

      padding: 8,

      backgroundColor: colors.screen,

      borderRadius: 10,

      borderWidth: 1,
      borderColor: colors.secondary,

      overflow: 'hidden',
    },

    /* =========================
       ABOUT BUTTON
    ========================= */

    aboutButton: {
      position: 'absolute',

      top: 10,
      right: 10,

      width: 28,
      height: 28,

      borderRadius: 8,

      backgroundColor: colors.selected,

      borderWidth: 1,
      borderColor: colors.primary,

      alignItems: 'center',
      justifyContent: 'center',

      zIndex: 20,
    },

    aboutText: {
      color: colors.primary,

      fontSize: 13,

      fontWeight: 'bold',
    },

    /* =========================
       THEME BUTTON
    ========================= */

    themeButton: {
      position: 'absolute',

      top: 10,
      right: 45,

      width: 28,
      height: 28,

      borderRadius: 8,

      backgroundColor: colors.selected,

      borderWidth: 1,
      borderColor: colors.primary,

      alignItems: 'center',
      justifyContent: 'center',

      zIndex: 20,
    },

    themeText: {
      color: colors.primary,

      fontSize: 13,

      fontWeight: 'bold',
    },

    /* =========================
       ABOUT CARD
    ========================= */

    aboutcard: {
      position: 'absolute',

      top: 35,
      left: 0,
      right: 0,
      bottom: 0,

      alignItems: 'center',
      justifyContent: 'center',

      backgroundColor: 'rgba(0,0,0,0.15)',

      zIndex: 50,
    },

    /* =========================
       ABOUT SCREEN
    ========================= */

    aboutscreen: {
      width: 235,

      minHeight: 170,

      backgroundColor: colors.screen,

      borderRadius: 14,

      padding: 18,

      alignItems: 'center',

      borderWidth: 2,
      borderColor: colors.primary,

      shadowOpacity: 0.2,
      shadowRadius: 8,
      shadowOffset: {
        width: 0,
        height: 4,
      },

      elevation: 6,
    },

    /* =========================
       ABOUT TITLE
    ========================= */

    abouttitle: {
      fontSize: 18,

      color: colors.primary,

      fontWeight: 'bold',

      letterSpacing: 1,

      marginBottom: 15,
    },

    /* =========================
       ABOUT INFORMATION
    ========================= */

    aboutInfo: {
      width: '100%',

      alignItems: 'flex-start',
    },

    aboutdetails: {
      fontSize: 10,

      color: colors.secondary,

      lineHeight: 20,

      textAlign: 'left',

      fontWeight: 'bold',

      marginBottom: 2,
    },

    /* =========================
       CLOSE BUTTON
    ========================= */

    closeButton: {
      position: 'absolute',

      top: 48,
      right: 25,

      width: 28,
      height: 28,

      borderRadius: 8,

      backgroundColor: colors.selected,

      borderWidth: 1,
      borderColor: colors.primary,

      alignItems: 'center',
      justifyContent: 'center',

      zIndex: 60,
    },

    closeText: {
      fontSize: 17,

      color: colors.primary,

      fontWeight: 'bold',

      lineHeight: 18,
    },

    /* =========================
       DECORATIONS
    ========================= */

    decorations: {
      flexDirection: 'row',

      alignItems: 'center',
      justifyContent: 'center',

      gap: 18,

      marginTop: 12,
    },

    decoration: {
      color: colors.primary,

      fontSize: 15,

      fontWeight: 'bold',
    },

    /* =========================
       PLAYER CONTROLS
    ========================= */

    controls: {
      flexDirection: 'row',

      alignItems: 'center',
      justifyContent: 'center',

      gap: 15,

      marginTop: 12,
    },

    controlButton: {
      width: 38,
      height: 38,

      borderRadius: 19,

      backgroundColor: colors.screen,

      borderWidth: 2,
      borderColor: colors.primary,

      alignItems: 'center',
      justifyContent: 'center',
    },

    controlText: {
      color: colors.primary,

      fontSize: 13,

      fontWeight: 'bold',
    },

    playButton: {
      width: 48,
      height: 48,

      borderRadius: 24,

      backgroundColor: colors.selected,

      borderWidth: 2,
      borderColor: colors.primary,

      alignItems: 'center',
      justifyContent: 'center',
    },

    playText: {
      color: colors.primary,

      fontSize: 16,

      fontWeight: 'bold',

      marginLeft: 2,
    },

  });

export default myApp;