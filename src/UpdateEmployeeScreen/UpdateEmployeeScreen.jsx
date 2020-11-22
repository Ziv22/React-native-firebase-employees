import * as React from 'react';
import {useState} from 'react';
import { View, Text, Button, TextInput,TouchableOpacity } from 'react-native';
import { Card, Divider,Icon } from "react-native-elements"
import styles from './styles';
import axios from "axios"

function updateEmployeeScreen({route,navigation}) {
  const [name, setName]               = useState(route.params.name),
        [dateOfBirth, setDateOfBirth] = useState(route.params.dateOfBirth),
        [position, setPosition]       = useState(route.params.position),
        [phoneNumber, setPhoneNumber] = useState(route.params.phoneNumber),
        {id} = route.params
        url = `http://192.168.1.204:8080/employee`

  const updateEmployee = async () =>{
    const employee = {
      id,
      name,
      dateOfBirth,
      position,
      phoneNumber
    }
    console.log(route.params);

    await axios.put(url ,employee)
    navigation.goBack()
  }
    return (
      <Card style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
          <Text style={styles.inputTitle}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder={name}
            placeholderTextColor='#788eec'
            onChangeText={(text) => setName(text)}
            value={name}
          />
        </View>
        <View>
          <Text style={styles.inputTitle}>Date Of Birth</Text>
          <TextInput
          style={styles.input}
          placeholder={dateOfBirth}
          placeholderTextColor='#788eec'
          onChangeText={(text) => setDateOfBirth(text)}
          value={dateOfBirth}
        />
        </View>

        <View>
          <Text style={styles.inputTitle}>Position</Text>
          <TextInput
          style={styles.input}
          placeholder={position}
          placeholderTextColor='#788eec'
          onChangeText={(text) => setPosition(text)}
          value={position}
        />
        </View>
        <View>
          <Text style={styles.inputTitle}>Phone Number</Text>
          <TextInput
          style={styles.input}
          placeholder={phoneNumber}
          placeholderTextColor='#788eec'
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
        />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={updateEmployee}>
          <Text style={styles.buttonTitle}>Save</Text>
        </TouchableOpacity>
      </Card>
    );
  }

  export default updateEmployeeScreen;