
import { StyleSheet } from "react-native";
import { theme } from '../../styles/theme';

export default StyleSheet.create({
  container: {
    padding: 60,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  thumbnail: {
    width: 100,
    height: 100,
  }
})