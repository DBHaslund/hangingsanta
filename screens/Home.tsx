import { StyleSheet, View } from 'react-native';
import Button from '../components/UI/Button';
import { Colors } from '../constants/colors';
import { HomeProps } from '../constants/types';

export default function Home({ navigation }: HomeProps) {
  return (
    <View style={styles.container}>
      <Button width={256} onPress={() => {navigation.navigate('Game')}}>
        Start Game
      </Button>
      <Button width={256} onPress={() => {navigation.navigate('Settings')}}>
        Settings
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
