import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button } from 'react-native';


export default function LoginScreen() {
  
    return (
      <View style={styles.container}>
        <Text>This is the Login Screen</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D2FFB7',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });