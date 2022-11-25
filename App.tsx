import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './src/pages/Home';


export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121214'
  }
})