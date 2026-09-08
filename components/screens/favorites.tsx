import { StyleSheet, Text, View } from 'react-native';
import { lightColors } from '@/components/theme/colors';

type FavoritesProps = {
  colors: typeof lightColors;
};

function Favorites({ colors }: FavoritesProps) {
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>favorites</Text>
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

export default Favorites;