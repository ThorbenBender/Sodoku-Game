import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  grid = [
    { 0: 1, 1: 30, 2: 30, 3: 40, 4: 38, 5: 23, 6: 37, 7: 45, 8: 27 },
    { 0: 1, 1: 30, 2: 30, 3: 40, 4: 38, 5: 23, 6: 37, 7: 45, 8: 27 },
    { 0: 1, 1: 30, 2: 30, 3: 40, 4: 38, 5: 23, 6: 37, 7: 45, 8: 27 },
    { 0: 1, 1: 30, 2: 30, 3: 40, 4: 38, 5: 23, 6: 37, 7: 45, 8: 27 },
    { 0: 1, 1: 30, 2: 30, 3: 40, 4: 38, 5: 23, 6: 37, 7: 45, 8: 27 },
    { 0: 1, 1: 30, 2: 30, 3: 40, 4: 38, 5: 23, 6: 37, 7: 45, 8: 27 },
    { 0: 1, 1: 30, 2: 30, 3: 40, 4: 38, 5: 23, 6: 37, 7: 45, 8: 27 },
    { 0: 1, 1: 30, 2: 30, 3: 40, 4: 38, 5: 23, 6: 37, 7: 45, 8: 27 },
    { 0: 1, 1: 30, 2: 30, 3: 40, 4: 38, 5: 23, 6: 37, 7: 45, 8: 27 },
  ];
  return (
    <View style={styles.container}>
      <Text>Sodok</Text>
      <View style={styles.grid}>
        {grid.map((cube, key) => {
          return (
            <View style={styles.box} key={key}>
              <Text>{cube['0']}</Text>
              <Text>{cube['0']}</Text>
              <Text>{cube['0']}</Text>
              <Text>{cube['0']}</Text>
              <Text>{cube['0']}</Text>
              <Text>{cube['0']}</Text>
              <Text>{cube['0']}</Text>
              <Text>{cube['0']}</Text>
              <Text>{cube['0']}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    width: 80,
    flexWrap: 'wrap',
  },
  box: {
    flex: 1,
    width: 80,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 10,
  },
});
