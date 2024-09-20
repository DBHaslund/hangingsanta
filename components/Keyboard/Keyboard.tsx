import { StyleSheet, View } from 'react-native';
import Key from './Key';

type props = {
  lang: string;
  value: (value: string) => void;
};

export default function Keyboard({ lang, value }: props) {
  return (
    <View style={styles.keyboard}>
      <View style={styles.row}>
        <Key letter='Q' press={value} />
        <Key letter='W' press={value} />
        <Key letter='E' press={value} />
        <Key letter='R' press={value} />
        <Key letter='T' press={value} />
        <Key letter='Y' press={value} />
        <Key letter='U' press={value} />
        <Key letter='I' press={value} />
        <Key letter='O' press={value} />
        <Key letter='P' press={value} />
        {lang === 'da' && <Key letter='Å' press={value} />}
      </View>
      <View style={styles.row}>
        <Key letter='A' press={value} />
        <Key letter='S' press={value} />
        <Key letter='D' press={value} />
        <Key letter='F' press={value} />
        <Key letter='G' press={value} />
        <Key letter='H' press={value} />
        <Key letter='J' press={value} />
        <Key letter='K' press={value} />
        <Key letter='L' press={value} />
        {lang === 'da' && (
          <>
            <Key letter='Æ' press={value} />
            <Key letter='Ø' press={value} />
          </>
        )}
      </View>
      <View style={styles.row}>
        <Key letter='Z' press={value} />
        <Key letter='X' press={value} />
        <Key letter='C' press={value} />
        <Key letter='V' press={value} />
        <Key letter='B' press={value} />
        <Key letter='N' press={value} />
        <Key letter='M' press={value} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    marginHorizontal: 'auto',
    width: '90%',
    marginTop: 64,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
});
