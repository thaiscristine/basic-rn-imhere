import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Button } from '../../components/Button'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export function Home(){

  const participants = ['Thais', 'Lucas', 'Rafael', 'Thiago', 'Jonna', 'Lasrissa', 'Rafasela', 'Thiasgo', 'Jsonna', 'Ladrissa', 'Rafaerla'];

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
      />
    </View>
  )
}