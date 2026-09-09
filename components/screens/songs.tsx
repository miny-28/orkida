import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';

import { lightColors } from '@/components/theme/colors';

import {
  useSongsLogic,
} from './songsLogic';

type SongsProps = {
  colors: typeof lightColors;
};

function Songs({ colors }: SongsProps) {
  const styles = createStyles(colors);

  const {
    playingSongId,
    handlePlayPress,
    selectedSong,
    songSelect,
    otherSongs,
  } = useSongsLogic();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.smallLabel}>ORKIDA</Text>
          <Text style={styles.title}>Your songs</Text>
        </View>
        <Text style={styles.musicSymbol}>♫</Text>
      </View>

      {/* FEATURED SONG */}
      <View style={styles.featuredCard}>
        {/* ALBUM ART */}
        <View style={styles.mainAlbum}>
          <Text style={styles.mainAlbumSymbol}>♫</Text>
          <Text style={[styles.star, styles.albumStarOne]}>
            ✦
          </Text>
          <Text style={[styles.star, styles.albumStarTwo]}>
            ✦
          </Text>
        </View>

        {/* SONG INFO */}
        <View style={styles.mainInfo}>
          <Text style={styles.featuredLabel}>
            FEATURED SONG
          </Text>

          <Text style={styles.mainTitle}>
            {selectedSong?.title}
          </Text>

          <Text style={styles.mainArtist}>
            {selectedSong?.artist}
          </Text>

          <Text style={styles.mainAlbumName}>
            {selectedSong?.album}
          </Text>
        </View>

        {/* PLAY BUTTON */}
        <Pressable
          style={styles.mainPlayButton}
          onPress={() => {
            if (selectedSong) {
              handlePlayPress(selectedSong.id);
            }
          }}
        >
          <Text style={styles.mainPlay}>
            {selectedSong && playingSongId === selectedSong.id
              ? '❚❚'
              : '▶'}
          </Text>
        </Pressable>
      </View>

      {/* MORE FOR YOU */}
      <View style={styles.listHeader}>
        <Text style={styles.listTitle}>
          MORE FOR YOU
        </Text>

        <Text style={styles.listDecoration}>
          ✦ ✦ ✦
        </Text>
      </View>

      {/* SONG LIST */}
      <View style={styles.list}>
        {otherSongs.map((song, index) => (
          <View
            key={song.id}
            style={styles.songCard}
          >
            {/* NUMBER */}
            <Text style={styles.songNumber}>
              {String(index + 1).padStart(2, '0')}
            </Text>

            {/* SMALL ALBUM */}
            <View style={styles.smallAlbum}>
              <Text style={styles.smallAlbumSymbol}>
                ♫
              </Text>
            </View>

            {/* SONG INFO */}
            <View style={styles.songInfo}>
              <Text style={styles.songTitle}>
                {song.title}
              </Text>

              <Text style={styles.songArtist}>
                {song.artist} • {song.album}
              </Text>
            </View>

            {/* PLAY BUTTON */}
            <Pressable
              onPress={() => {
                songSelect(song.id);
                handlePlayPress(song.id);
              }}
              hitSlop={8}
            >
              <Text style={styles.playIcon}>
                ▶
              </Text>
            </Pressable>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

function createStyles(colors: typeof lightColors) {
  return StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
    },

    content: {
      paddingHorizontal: 4,
      paddingTop: 2,
      paddingBottom: 10,
    },

    /* HEADER */
    header: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 7,
    },

    smallLabel: {
      fontSize: 6,
      color: colors.secondary,
      fontWeight: 'bold',
      letterSpacing: 2,
    },

    title: {
      fontSize: 13,
      color: colors.primary,
      fontWeight: 'bold',
      letterSpacing: 1,
    },

    musicSymbol: {
      fontSize: 20,
      color: colors.primary,
      fontWeight: 'bold',
    },

    /* FEATURED CARD */
    featuredCard: {
      width: '100%',
      height: 82,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 7,
      backgroundColor: colors.background,
      borderWidth: 2,
      borderColor: colors.primary,
      borderRadius: 10,
    },

    mainAlbum: {
      width: 65,
      height: 65,
      borderRadius: 7,
      backgroundColor: colors.selected,
      borderWidth: 1,
      borderColor: colors.secondary,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },

    mainAlbumSymbol: {
      fontSize: 28,
      color: colors.primary,
      fontWeight: 'bold',
    },

    albumStarOne: {
      position: 'absolute',
      top: 4,
      left: 5,
    },

    albumStarTwo: {
      position: 'absolute',
      bottom: 4,
      right: 5,
    },

    star: {
      color: colors.primary,
      fontSize: 8,
    },

    mainInfo: {
      flex: 1,
      marginLeft: 8,
      justifyContent: 'center',
    },

    featuredLabel: {
      fontSize: 6,
      color: colors.secondary,
      fontWeight: 'bold',
      letterSpacing: 1,
      marginBottom: 3,
    },

    mainTitle: {
      fontSize: 11,
      color: colors.primary,
      fontWeight: 'bold',
    },

    mainArtist: {
      fontSize: 8,
      color: colors.secondary,
      marginTop: 3,
      fontWeight: 'bold',
    },

    mainAlbumName: {
      fontSize: 7,
      color: colors.secondary,
      marginTop: 2,
    },

    /* MAIN PLAY BUTTON */
    mainPlayButton: {
      width: 27,
      height: 27,
      borderRadius: 7,
      backgroundColor: colors.selected,
      borderWidth: 1,
      borderColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },

    mainPlay: {
      color: colors.primary,
      fontSize: 10,
      marginLeft: 1,
    },

    /* LIST HEADER */
    listHeader: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 8,
      marginBottom: 5,
    },

    listTitle: {
      fontSize: 8,
      color: colors.primary,
      fontWeight: 'bold',
      letterSpacing: 1,
    },

    listDecoration: {
      fontSize: 6,
      color: colors.secondary,
    },

    /* SONG LIST */
    list: {
      gap: 5,
      paddingBottom: 4,
    },

    songCard: {
      width: '100%',
      height: 47,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 5,
      backgroundColor: colors.background,
      borderWidth: 1,
      borderColor: colors.secondary,
      borderRadius: 8,
    },

    songNumber: {
      width: 20,
      fontSize: 7,
      color: colors.secondary,
      fontWeight: 'bold',
      textAlign: 'center',
    },

    smallAlbum: {
      width: 34,
      height: 34,
      borderRadius: 5,
      backgroundColor: colors.selected,
      borderWidth: 1,
      borderColor: colors.secondary,
      alignItems: 'center',
      justifyContent: 'center',
    },

    smallAlbumSymbol: {
      color: colors.primary,
      fontSize: 17,
      fontWeight: 'bold',
    },

    songInfo: {
      flex: 1,
      marginLeft: 7,
    },

    songTitle: {
      fontSize: 9,
      color: colors.primary,
      fontWeight: 'bold',
    },

    songArtist: {
      fontSize: 7,
      color: colors.secondary,
      marginTop: 3,
    },

    /* PLAY ICON */
    playIcon: {
      color: colors.primary,
      fontSize: 10,
      marginHorizontal: 6,
    },
  });
}

export default Songs;