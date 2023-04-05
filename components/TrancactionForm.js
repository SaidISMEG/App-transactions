// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native';

// export default function TransactionForm(props) {
//   const [date, setDate] = useState('');
//   const [amount, setAmount] = useState('');
//   const [type, setType] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = () => {
//     //
//   };

//   return (
//     <Modal visible={props.visible} animationType={'slide'}>
//       <View style={styles.container}>
//         <Text>Date:</Text>
//         <TextInput
//           style={styles.input}
//           value={date}
//           onChangeText={setDate}
//           keyboardType="numeric"
//         />
//         <Text>Amount:</Text>
//         <TextInput
//           style={styles.input}
//           value={amount}
//           onChangeText={setAmount}
//         />
//         <Text>Type Transaction:</Text>
//         <TextInput style={styles.input} value={type} onChangeText={setType} />
//         <Text>Description:</Text>
//         <TextInput
//           style={styles.input}
//           value={description}
//           onChangeText={setDescription}
//         />
//         <View style={styles.btnContainer}>
//           <View style={styles.btn}>
//             <Button title="Submit" onPress={''} />
//           </View>
//           <View style={styles.btn}>
//             <Button title="Cancel" onPress={props.OncancelTransaction} />
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent:'center',
//     alignItems:'center',
//     padding: 20,

//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginTop: 10,
//     marginBottom: 20,
//     paddingHorizontal: 160,
//     borderRadius: 8,
//   },
//   btnContainer: {
//     flexDirection: 'row',
//     marginBottom: 110,
//   },
//   btn: {
//     width: '25%',
//     marginTop: 10,
//     marginHorizontal: 8,
//   },
// });

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Modal,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function TransactionForm(props) {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = () => {
    // handle form submission here
    const handleSubmit = () => {
      const formData = {
        date: date,
        amount: amount,
        type: type,
        description: description,
        image: image,
      };
      props.onSubmit(formData);
    };
  };

  const handleChoosePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <Modal visible={props.visible} animationType={"slide"}>
      <View style={styles.container}>
        <ScrollView>
          <Text>Date:</Text>
          <TextInput
            style={styles.input}
            value={date}
            onChangeText={setDate}
            keyboardType="numeric"
          />
          <Text>Amount:</Text>
          <TextInput
            style={styles.input}
            value={amount}
            onChangeText={setAmount}
          />
          <Text>Type Transaction:</Text>
          <TextInput style={styles.input} value={type} onChangeText={setType} />
          <Text>Description:</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={setDescription}
          />

          <TouchableOpacity style={styles.photoBtn} onPress={handleChoosePhoto}>
            <Text style={styles.photoText}>Take a photo of the product</Text>
          </TouchableOpacity>
          {image && <Image source={{ uri: image }} style={styles.image} />}
        </ScrollView>
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button title="Submit" onPress={handleSubmit} />
          </View>
          <View style={styles.btn}>
            <Button title="Cancel" onPress={props.OncancelTransaction} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 160,
    borderRadius: 8,
  },
  photoBtn: {
    backgroundColor: "#2196F3",
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
  },
  photoText: {
    color: "#fff",
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
  btnContainer: {
    flexDirection: "row",
    marginBottom: 110,
  },
  btn: {
    width: "25%",
    marginTop: 10,
    marginHorizontal: 8,
  },
});
