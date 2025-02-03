import { StyleSheet } from "react-native";

export const layout = StyleSheet.create({
    app: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    searchBar: {
        borderWidth: 1,
        marginHorizontal: 16,
        marginVertical: 8,
    },
    flatListItem: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        margin: 5,
        alignItems: 'center',
    },
  })