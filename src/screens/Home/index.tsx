import { Text, View } from 'react-native'
import { styles } from './styles'
export default function Home(){
  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>
        React Native Event
      </Text>
      <Text style={styles.eventDate}>Friday, May 26th</Text>
    </View>
  )
}