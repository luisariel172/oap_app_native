
import { useState } from 'react';
import {View, TextInput, Button, Text, FlatList, Modal, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { AddItem } from './components/index';


export default function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  //estado para la visualizacion del modal
  const [modalVisible, setModalVisible] = useState (false);
  //estado para el elemento a eliminar
  const [selectedTask, setSelectedTask] = useState (null);

  //fn para el boton Add
  const onHandleTask = () => {
    console.log('asdfasdfadsfasf');
    /*//Forma 1: La mas sencilla, con spread operator hago una copia de la lista y le agrego el valor del estado actual de lo que escribi en el campo
    //asi voy añadiendo elementos a la lista
    setTaskList ([...taskList, task]);*/
    //Forma 2: Agregando al nuevo elemento como objeto, es mas completo porq puedo incorporar id's para identificar mejor a cada valor ingresado
    setTaskList((prevTaskList) => [...prevTaskList, {id: Math.random().toString(), value: task}]);
    //luego se debe vaciar el estado para que quede disponible para ingresar la proxima tarea
    setTask('')
  }
  //fn que genera diferentes tipos de colores para el background
  // const getRandomBackgroundColor = () => {
  //   const colors = ['red', 'blue', 'green'];
  //   return colors[Math.floor(Math.random() * colors.length)]
  // }

  //fn a la que le paso el item que necesito seleccionar
  const onHandleSelected = (item) => {
    setSelectedTask (item)
    setModalVisible (!modalVisible);
  }


  //fn para pasarle los datos al renderItem del FlatList, con TouchableOpacity lo convierto en clickeable
  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.listItemContainer} onPress={() => onHandleSelected (item)}>
          <Text style={styles.listItem}>{item.value}</Text>
        </TouchableOpacity>
  )
  
    //fn p/ cancelar el modal
    const onHandleCancel = () => {
      setModalVisible(!modalVisible)
    }
    //fn p/ eliminar el item
    const onHandleDeleteItem = () => {
      setTaskList ((prevTaskList) => prevTaskList.filter( (item) => item.id !== selectedTask.id) )
      setModalVisible(!modalVisible)
    }

    const onHandleChange = (text) => setTask(text);

  return (
    <View style={styles.container}>
      <AddItem task={task} onHandleTask={onHandleTask} onHandleChange={onHandleChange} />
      
      <View style={styles.listContainer}>
      <Text style={styles.listTitle}>ToDo List</Text>
      
      <FlatList
        style={styles.listContainer}
        data={taskList}
        renderItem= {renderItem}
        keyExtractor={item => item.id}
      />
      <Modal visible={modalVisible} animationType='fade'>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Detalle de la tarea</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailText}> Esta seguro que desea eliminar este elemento?</Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button
              title='Cancelar'
              color= '#9A848F'
              onPress = {onHandleCancel}
            />
            <Button
              title='Eliminar'
              color= 'red'
              onPress={onHandleDeleteItem}
            />
          </View>
        </View>
      </Modal>
        {/*
        map usado originariamente, pero no es optimo para listas grandes, lo reemplazo por FlatList 
        {taskList.map((item) =>(
          <View key={item.id} style={[styles.listItemContainer, {backgroundColor: item.background }]}>
            <Text style={styles.listItem}>{item.value}</Text>
          </View>
        ))} */}
        </View>
    </View>
  );
}