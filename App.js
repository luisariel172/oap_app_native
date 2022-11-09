import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';
import { styles } from './styles';

export default function App() {
  
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const onHandleTask = () => {
    setTaskList ((prevTaskList) => [...prevTaskList, {id: Math.random().toString(), value: task}]);
    setTask('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          value={task}
          placeholder="Enter task"
          onChangeText={text => setTask(text)}
        />
        <Button disabled={!task} title='Add' color='#9A848F' onPress={onHandleTask} />
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>ToDo List</Text>
        {taskList.map((item) => (
          <View key={item.id} style={styles.listItemContainer}>
            <Text style={styles.listItem}>{item.value}</Text>
        </View>
        ))}
      </View>
      {/* <View style={styles.listItem}>
        <Text style={styles.greeting}>ToDo Item</Text> */}
      </View>
  );
}