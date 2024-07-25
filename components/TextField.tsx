import { View, Text, TextInput, StyleSheet, TextInputProps, NativeEventEmitter, NativeEventSubscription } from 'react-native'

interface Props {
  value: string
  action: (event:any) => void
}

const TextField = ({ value, action }: Props) => {
  return (
    <TextInput
      style={styles.textField}
      value={value}
      onChangeText={action}
    />
  )
}

const styles = StyleSheet.create({
  textField: {
    marginHorizontal: 15,
    padding: 5,
    borderWidth: 1,
    borderRadius: 8,
  },
})

export default TextField
