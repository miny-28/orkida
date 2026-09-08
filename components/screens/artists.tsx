import { StyleSheet, Text, View } from 'react-native';
import { lightColors } from '@/components/theme/colors';

type ArtistsProps = {
  colors: typeof lightColors;
};

function Artists({ colors }: ArtistsProps) {
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Artists</Text>
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

export default Artists;