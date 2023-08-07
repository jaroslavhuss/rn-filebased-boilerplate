import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const Pavel = () => {
  return (
    <View>
        <Link href="/">
      <Text style={{
        fontSize: 30,
      }}>Pavel</Text>
      </Link>
    </View>
  )
}

export default Pavel

const styles = StyleSheet.create({})