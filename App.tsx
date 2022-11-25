import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './src/pages/Home';
import TaskProvider, { TaskContext } from './src/store/TaskProvider';


export default function App() {
  return (
    <TaskProvider>
      <SafeAreaView style={styles.safeArea}>
        <Home />
      </SafeAreaView>
    </TaskProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121214'
  }
})