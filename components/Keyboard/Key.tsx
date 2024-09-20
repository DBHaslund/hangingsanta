import { Pressable, StyleSheet, Text } from 'react-native';
import { Colors } from '../../constants/colors';

type props = {
  letter: string;
  press: (value: string) => void;
};

export default function Key({ letter, press }: props) {
  function keyPress() {
    press(letter);
  }
  return (
    <Pressable style={styles.key} onPress={keyPress}>
      <Text style={styles.text}>{letter}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  key: {
    width: 32,
    padding: 2,
    backgroundColor: Colors.primary700,
    borderColor: Colors.primary50,
    borderWidth: 1,
  },
  text: {
    fontSize: 28,
    fontFamily: 'IndieFlower',
    color: Colors.primary50,
    textAlign: 'center',
  },
});
