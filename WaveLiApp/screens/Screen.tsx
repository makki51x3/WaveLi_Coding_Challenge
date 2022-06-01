import { SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native';
import background from '../assets/background.png' // relative path to image 

export const LoginScreen = () => {

  return (
    <SafeAreaView style={{flex:1}}>
      <ImageBackground source= {background}  resizeMode="cover" style={styles.container}>
        <View style={styles.container}>
          <Text>makkiiiiiiiiiiiii</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default LoginScreen;