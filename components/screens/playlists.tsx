import { StyleSheet, Text, View } from 'react-native';
import { lightColors } from '@/components/theme/colors';

type PlaylistsProps = {
  colors: typeof lightColors;
};

function Playlists({ colors }: PlaylistsProps) {
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>my playlists</Text>
    </View>
  );
}

const createStyles = (colors: typeof lightColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    text: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.primary,
    },
  });

export default Playlists;