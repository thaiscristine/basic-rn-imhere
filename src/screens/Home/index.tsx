import React, { useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import { Button } from '../../components/Button'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export function Home(){

  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd(){
    if(participants.includes(participantName)){
      return Alert.alert('Participant exists', `Participant already in the list.`)
    }   
    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    
    Alert.alert('Remove participant', `Do you want to remove ${name}?`, [
      {
        text: 'No',
        style: 'cancel'
      },
      {
        text: 'Yes',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
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
          placeholder='Name'
          placeholderTextColor={'#6b6b6b'}
          keyboardType='email-address'
          // onChangeText={(text) => setParticipantName(text)} // This is a explict form to send the text to the function
          onChangeText={setParticipantName}
          value={participantName}
        />
        <Button 
          onPress={() => handleParticipantAdd()}
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