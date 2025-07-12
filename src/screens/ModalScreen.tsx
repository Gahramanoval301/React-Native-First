import { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ModalScreen: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Section list component</Text>
      <TouchableOpacity onPress={() => setShowModal(!showModal)} style={styles.btn}>
        <Text style={styles.text}>Show Modal</Text>
      </TouchableOpacity>

      <Modal
        animationType='slide'
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
        transparent={true}>
        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <Text>Modal Component</Text>
            <TouchableOpacity onPress={() => setShowModal(false)} style={styles.btn}>
              <Text style={styles.text}>Close</Text>
            </TouchableOpacity>

          </View>

        </View>

      </Modal>
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
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeee',
  },
  sectionHeader: {
    backgroundColor: '#f0f0f0',
    padding: 5,
  },
  sectionHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn: {
    padding: 10,
    backgroundColor: "green",
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 20,
    minWidth: 250,
    alignItems: "center"
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white"
  },
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
});

export default ModalScreen;
