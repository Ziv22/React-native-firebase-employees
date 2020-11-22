import * as React from 'react';
import {useState} from 'react';
import { View, Text, Button, TextInput,TouchableOpacity } from 'react-native';
import { Card, Divider,Icon } from "react-native-elements"
import styles from './styles'
import axios from "axios"

function addEmployeeScreen({ navigation }) {
  const [name, setName]               = useState(''),
        [dateOfBirth, setDateOfBirth] = useState(''),
        [position, setPosition]       = useState(''),
        [phoneNumber, setPhoneNumber] = useState(''),
        addEmployeesUrl = `http://192.168.1.204:8080/employee`

  const addEmployee = async () =>{
    const employee = {
      name,
      dateOfBirth,
      position,
      phoneNumber
    }
    await axios.post(addEmployeesUrl ,employee)
    navigation.goBack()
  }
    return (
      <Card style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
          <Text style={styles.inputTitle}>Name</Text>
          <TextInput
            autoCapitalize
            style={styles.input}
            placeholder={name}
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setName(text)}
            value={name}
          />
        </View>
        <View>
          <Text style={styles.inputTitle}>Date Of Birth</Text>
          <TextInput
          style={styles.input}
          placeholder={dateOfBirth}
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setDateOfBirth(text)}
          value={dateOfBirth}
        />
        </View>

        <View>
          <Text style={styles.inputTitle}>Position</Text>
          <TextInput
          style={styles.input}
          placeholder={position}
          placeholderTextColor="#aaaaaa"
          type=""
          onChangeText={(text) => setPosition(text)}
          value={position}
        />
        </View>
        <View>
          <Text style={styles.inputTitle}>Phone Number</Text>
          <TextInput
          style={styles.input}
          autoCompleteType="tel"
          placeholder={phoneNumber}
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
        />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={addEmployee}>
          <Text style={styles.buttonTitle}>Add Employee</Text>
        </TouchableOpacity>
      </Card>
    );
  }

  export default addEmployeeScreen;