
import { Text, StyleSheet } from 'react-native'

export function Title({ title }: { title: string }){
  return(
    <Text style={styles.text}>
      {title}
    </Text>
  )
}

const styles = StyleSheet.create({
  text:{
    fontSize: 30,
    color: 'red',
    marginBottom: 20,
  }
})

