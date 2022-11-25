import { useState } from 'react';
import {
  Platform, View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList
} from 'react-native'
import TaskList from '../../components/TaskList';

export interface Task {
  id: string;
  title: string
}

export default function Home() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddNewTask = () => {
    const data = {
      id: String(new Date().getTime()),
      title: newTask != '' ? newTask : 'Task empty'
    }

    setTasks(prev => [...prev, data])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Dev!</Text>
      <TextInput
        onChangeText={setNewTask}
        style={styles.input}
        placeholder={'New Task...'}
        placeholderTextColor={'#555'}
      />
      <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={handleAddNewTask}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      <Text style={styles.titleTasks}>My tasks</Text>
      <TaskList tasks={tasks}/>
    </View>
  )
}

const paddingByPlatform = Platform.OS === 'ios' ? 15 : 12

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    paddingHorizontal: 30,
    paddingVertical: 50
  },
  title: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#29292e',
    color: '#f1f1f1',
    fontSize: 18,
    padding: paddingByPlatform,
    marginTop: 30,
    borderRadius: 7
  },
  button: {
    backgroundColor: '#eba417',
    padding: paddingByPlatform,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#121214',
    fontWeight: 'bold'
  },
  titleTasks: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 40
  },
})