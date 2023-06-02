import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Button } from '../Button'

export function Participant(){

  function handleParticipantDelete(){
    console.log('delete, delete..')
  }
  return(
    <View style={styles.container}>
        <Text style={styles.name}>Thais</Text>
        <TouchableOpacity
            style={styles.button}
            onPress={handleParticipantDelete}
            >
            <Text style={styles.buttonText}> - </Text>
        </TouchableOpacity>
    </View>
  )
}