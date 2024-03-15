import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { fonts } from './src/Global/fonts';
import Navigator from './src/Navigation/Navigator';
import { Provider } from 'react-redux';
import { store } from './src/app/store';

export default function App() {

  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null
  }

  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
