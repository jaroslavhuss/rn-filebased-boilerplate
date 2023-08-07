import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const main = () => {
  return (
    <View>
     <Link href="/pavel">Přechod na pavla</Link>
    </View>
  )
}

export default main

const styles = StyleSheet.create({})