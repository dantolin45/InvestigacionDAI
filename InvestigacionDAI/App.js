import { StatusBar } from 'expo-status-bar';
import { View, Button, StyleSheet, TextInput, Text } from 'react-native';
import { Linking } from 'react-native';
import { useState } from 'react';


export default function App() {

  const [number, setNumber] = useState(0);
  const [msj, setMsj] = useState("");

  const handleChangueMsj = (e) => {

    setMsj(e.target.value)
    
  }

  const handleChangueNumber = (e) => {
    setNumber(e.target.value)
  }

  const handleCallPress = async () => {
    await Linking.openURL(`tel:+549${number}`)
  }
  const handleSMSPress = async () => {
    await Linking.openURL(`sms:number=+549${number}?body='${msj}'`)
  }
  const handleEmailPress = async () => {
    await Linking.openURL(`mailto:dantolin45@gmail.com?subject=Jessik&body=${msj}`)
  }

  const handleWPPress = async () => {
    await Linking.openURL(`https://wa.me/+549${number}?text=${msj}`)
  }


  return (
    <View style={styles.container}   >

      <TextInput placeholder='Ingresa tu numero de telefono' onChange={handleChangueNumber}></TextInput>
      <TextInput placeholder='Ingresa tu mensaje' onChangeText={handleChangueMsj}></TextInput>

      <Button title='Llamar' onPress={handleCallPress} />
      <Button title='WhatsApp' onPress={handleWPPress} />
      <Button title='SMS' onPress={handleSMSPress} />
      <Button title='Email' onPress={handleEmailPress} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  }
});