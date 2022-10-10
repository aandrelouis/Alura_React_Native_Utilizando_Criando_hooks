import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import  Home  from './src/telas/Home/index';


export default function App() {
  return (
    <SafeAreaView style={estilos.container}>
      <StatusBar style="auto" />
      <Home />
    </SafeAreaView>
  );
}


const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
});
