import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export function Button(){

  function handleParticipantAdd(){
    console.log('yes, yes..')
  }
  return(
    <TouchableOpacity
      style={styles.button}
      onPress={handleParticipantAdd}
    >
      <Text style={styles.buttonText}> + </Text>
    </TouchableOpacity>
  )
}