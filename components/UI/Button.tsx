import { Pressable, StyleSheet, Text } from 'react-native';

import { ButtonProps } from '../../constants/types';
import { Colors } from '../../constants/colors';

export default function Button({ children, onPress, width }: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        width ? { width: width } : {},
        pressed ? styles.pressed : {},
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary500,
    margin: 4,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 16,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
  },
  text: {
    fontFamily: 'IndieFlower',
    color: Colors.primary50,
    textAlign: 'center',
    fontSize: 18,
  },
  pressed: {
    opacity: 0.75,
  },
});
