import { FlatList, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import { Button } from '../../components/Button'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export function Home(){

  const participants = ['Thais', 'Lucas', 'Rafael', 'Thiago', 'Jonna', 'Lasrissa', 'Rafasela', 'Thiasgo', 'Jsonna', 'Ladrissa', 'Rafaerla'];

  function handleParticipantAdd(name: string){
    if(participants.includes(name)){
      return Alert.alert('Participant exists', `Participant already in the list.`)
    }
    console.log('1 yes, yes..')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remove participant', `Do you want to remove ${name}?`, [
      {
        text: 'No',
        style: 'cancel'
      },
      {
        text: 'Yes',
        onPress: () => Alert.alert(`Participant ${name} was removed.`) // removeParticipant(name)
      }
    ])
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
        <Button 
          onPress={() => handleParticipantAdd('Thais')}
        />        
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Participant 
            key={index} 
            name={item} 
            onRemove={() => handleParticipantRemove(item)} 
          /> 
        )} 
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>No participants yet</Text>
        )}

      />
    </View>
  )
}