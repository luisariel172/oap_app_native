import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  //estilos contenedor principal
  container: {
        flex: 1,
        backgroundColor: '#F6F4F5',
      },
      
      //contenedor del input y boton add
      inputContainer: {
        marginHorizontal: 20,
        marginVertical: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      //estilos del input
      input: {
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: '#9A848F',
      },

      //contenedor de la lista
      listContainer: {
        marginHorizontal: 20,
      },
      //estilos del titulo
      listTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#212121',
      },
      
      //estilos para cada item
      listItemContainer: {
        paddingVertical: 20,
        backgroundColor: '#9A8484',
        borderRadius: 5,
        marginVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      justifyContent: 'center',
      },
      listItem: {
        fontSize: 14,
        color: '#ffffff',
        paddingHorizontal: 10,
      },
});