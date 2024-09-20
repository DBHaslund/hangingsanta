import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';

export type StackParamList = {
  Home: undefined;
  Game: undefined;
  Settings: undefined;
};

export type HomeProps = NativeStackScreenProps<StackParamList, 'Home'>;
export type GameProps = NativeStackScreenProps<StackParamList, 'Game'>;
export type SettingsProps = NativeStackScreenProps<StackParamList, 'Settings'>;

export type ButtonProps = {
  children: string;
  onPress: () => void;
  width?: number;
};

export type IconItemProps = {
  icon: any;
  color: string;
  description: string,
}

export interface IconButtonProps {
  icon: any, 
  size: number, 
  color: string | undefined,
  onPress: () => void,
}