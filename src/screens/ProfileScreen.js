import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  )
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ProfileScreen