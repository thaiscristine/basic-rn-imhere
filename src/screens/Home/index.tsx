import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Button } from '../../components/Button'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export function Home(){

  function handleParticipantAdd(){
    console.log('yes, yes..')
  }

  function handleParticipantRemove(name: string) {
    console.log(`Participant ${name} was removed.`)
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
        <Button />
      </View>
      <Participant name="Thais" onRemove={() => handleParticipantRemove("Thais")} />
    </View>
  )
}