import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F4F5',
      },
      greeting:{
        margin: 20,
      },
      inputContainer: {
        marginHorizontal: 20,
        marginVertical: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      input: {
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: '#9A848F',
      },

      listContainer: {
        marginHorizontal: 20,
      },

      listTitle: {
        fontSize: 18,
      },
});