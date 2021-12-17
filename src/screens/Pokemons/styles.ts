
import { StyleSheet } from "react-native";
import { theme } from '../../styles/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 12,
    backgroundColor: theme.colors.background,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: theme.colors.text,
  },
  card: {
    flex: 1,
    padding: 14,
    borderRadius: 20,
    marginBottom: 12,
    marginRight: 12,
  },
  order: {
    fontSize: 14,
    fontWeight: "bold",
    color: theme.colors.text,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: theme.colors.background,
  },
  thumbnail: {
    width: 110,
    height: 110,
    marginTop: 12,
    alignSelf: "flex-end",
  },
  loading: {
    paddingVertical: 20,
  }
})