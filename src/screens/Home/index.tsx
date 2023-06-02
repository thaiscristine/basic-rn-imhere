import { Button, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export function Home(){

  function handleParticipantAdd(){
    console.log('yes, yes..')
  }
  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>
        React Native Event
      </Text>
      <Text style={styles.eventDate}>Friday, May 26th</Text>
      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder='Testing'
          placeholderTextColor={'#6b6b6b'}
          keyboardType='email-address'
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}