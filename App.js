import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [placeList, setPlaceList] = useState([]);

  const addPlace = () => {
    if (item.trim() === '') return;
    setPlaceList([...placeList, item]);
    setItem('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Places To Visit</Text>
      <Text style={styles.desc}>Add locations you want to travel to.</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Place"
        value={item}
        onChangeText={setItem}
        placeholderTextColor="#888"
      />

      <View style={styles.buttonContainer}>
        <Button title="ADD" onPress={addPlace} color="#1E90FF" />
      </View>

      <FlatList
        data={placeList}
        renderItem={({ item, index }) => (
          <View style={[styles.listItem, { backgroundColor: index % 2 === 0 ? '#B3E5FC' : '#81D4FA' }]}>
            <Text style={styles.listText}>• {item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1F5FE',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#0288D1',
  },
  desc: {
    fontSize: 16,
    marginBottom: 20,
    color: '#0277BD',
  },
  input: {
    borderWidth: 2,
    borderColor: '#03A9F4',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#B3E5FC',
    fontSize: 16,
  },
  buttonContainer: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  listItem: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  listText: {
    fontSize: 18,
    color: '#01579B',
  },
});
