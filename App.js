import {View, TextInput, Button, Text } from 'react-native';
import { styles } from './styles';


export default function App() {
  return (
    <View style={styles.container}>
      {/* contenedor de input y boton ADD */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}/>
        <Button title='Add' color='#9A848F' onPress={() => null} />
      </View>
      {/* contenedor de titulo y demas items */}
      <View style={styles.listContainer}>
        {/* titulo */}
        <Text style={styles.listTitle}>ToDo List</Text>
        {/* Items x 6 */}
        <View style={styles.listItemContainer}>
          <Text style={styles.listItem}>ToDo Item</Text>
        </View>

        <View style={styles.listItemContainer}>
          <Text style={styles.listItem}>ToDo Item</Text>
        </View>

        <View style={styles.listItemContainer}>
          <Text style={styles.listItem}>ToDo Item</Text>
        </View>

        <View style={styles.listItemContainer}>
          <Text style={styles.listItem}>ToDo Item</Text>
        </View>

        <View style={styles.listItemContainer}>
          <Text style={styles.listItem}>ToDo Item</Text>
        </View>
        
        <View style={styles.listItemContainer}>
          <Text style={styles.listItem}>ToDo Item</Text>
        </View>
      </View>
    </View>
  );
}