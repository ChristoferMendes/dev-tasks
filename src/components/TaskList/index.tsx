import { Alert, FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Task } from "../../pages/Home";
import { useTaskContext } from "../../store/TaskProvider";

export default function TaskList () {
  const { tasks, removeTask } = useTaskContext();

  const handleRemove = (item: Task) => {
    Alert.alert('Are you sure?', `You will delete the task: ${item.title}`, [
      {
        text: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => removeTask(item.id),
      }
    ])
  }
  
  return (
    <>
      <FlatList data={tasks} keyExtractor={(item) => item.id} renderItem={({ item }) => (
        <TouchableOpacity style={styles.buttonTask} onPress={() => handleRemove(item)}>
          <Text style={styles.titleTask}>{item.title}</Text>
        </TouchableOpacity>
      )} />
    </>
  )
}

const styles = StyleSheet.create({
  titleTasks: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 40
  },
  buttonTask: {
    backgroundColor: '#29292e',
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  titleTask: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold'
  }
})