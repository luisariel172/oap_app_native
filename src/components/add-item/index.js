import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from './styles';

const AddItem = ( { task, onHandleTask, onHandleChange }) => { 
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input}
                value={task}
                //seteo al state task el elemento que escribo dentro del campo
                placeholder="Ingrese una tarea"
                onChangeText={onHandleChange}
            />
            <Button  disabled={!task} title='Add' color='#9A848F' onPress={onHandleTask} />
        </View>
    )
}

export default AddItem;