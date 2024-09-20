import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Button from '../components/UI/Button';
import Sampler from '../utils/sampler';
import { list } from '../assets/dictionaries/6-letter';
import Keyboard from '../components/Keyboard/Keyboard';

export default function Game() {
  function test() {
    const word = Sampler(list);
    console.log(word);
  }

  function kbtest(value: string) {
    console.log(value);
    
  }

  return (
    <View style={styles.screen}>
      <Text>Game</Text>
      <TextInput style={styles.input} />
      <Button onPress={test}>Test</Button>
      <Keyboard lang='en' value={kbtest} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  input: {
    textAlign: 'center',
  },
});
