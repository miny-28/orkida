import { StyleSheet, Text, View } from 'react-native';
import { lightColors } from '@/components/theme/colors';

type SongsProps = {
  colors: typeof lightColors;
};

function Songs({colors}:SongsProps) {
      const styles = createStyles(colors);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Songs</Text>
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

export default Songs;