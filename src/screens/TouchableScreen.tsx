import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewBase,
} from 'react-native';

const TouchableScreen: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Touchable Demo</Text>

      <TouchableWithoutFeedback onPress={() => setCount(count + 1)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Touchable Without Feedback</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Touchable Without Feedback</Text>
        </View>
      </TouchableOpacity>
      <TouchableHighlight onPress={() => setCount(count + 1)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Touchable Without Feedback</Text>
        </View>
      </TouchableHighlight>
      <Pressable
        onPress={() => setCount(count + 1)}
        style={({ pressed }) => [
          styles.btn,
          {
            backgroundColor: pressed ? '#dddddd' : 'red',
          },
        ]}
      >
        {({ pressed }) => (
          <Text style={[styles.btnText, { color: pressed ? 'red' : 'white' }]}>
            {pressed ? 'Pressed Now' : 'Pressable'}
          </Text>
        )}
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
    marginBottom: 10,
    minWidth: 250,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default TouchableScreen;
