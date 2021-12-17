import { StyleSheet } from "react-native";
import { theme } from './../../styles/theme/index';

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingBottom: 20,
    backgroundColor: theme.colors.background,
  }
})