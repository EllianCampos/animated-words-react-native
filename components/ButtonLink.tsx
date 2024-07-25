import { View, Text, StyleSheet, ViewStyle, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

interface Props {
  text: string
  href: string,
  style: TextStyle
}

const ButtonLink = (props: Props) => {
  return (
    <Link href={props.href} style={[styles.link, props.style]}>
        {props.text}
    </Link>
  )
}

const styles = StyleSheet.create({
  link: {
    color: 'black',
    fontWeight: '400',
    textAlign: 'center',
    margin: 15,
    padding: 10,
    borderRadius: 8
  }
})

export default ButtonLink
