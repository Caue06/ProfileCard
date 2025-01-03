import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function ProfileCard() {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2354/2354282.png' }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Caue Moreira Santos</Text>
      <Text style={styles.description}>
        Desenvolvedor de software apaixonado por tecnologia e inovação.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },

})
