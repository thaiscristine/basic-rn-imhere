import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Button } from '../Button'

type Props = {
  name: string;
}

export function Participant({ name }: Props){

  function handleParticipantDelete(){
    console.log('delete, delete..')
  }
  return(
    <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity
            style={styles.button}
            onPress={handleParticipantDelete}
            >
            <Text style={styles.buttonText}> - </Text>
        </TouchableOpacity>
    </View>
  )
}