import * as React from 'react';
import  ApiCalls from '../apiCalls'
import {useState, useCallback} from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { Card, Divider,Icon } from "react-native-elements"
import { useFocusEffect, StackActions } from '@react-navigation/native';
import styles from './styles';
import { firebase } from '../../firebase/config'


const apiCalls = new ApiCalls()

function HomeScreen({navigation}) {
  const [employees, setEmployees] = useState([])
  
  useFocusEffect(
    useCallback(() => {  
      fetchEmployees();
    }, [])
  );

  const fetchEmployees = async () => {
    const employeesData = await apiCalls.getEmployees()
    setEmployees(employeesData)
  };


  const deleteEmployee = async (id, name) =>{
    await apiCalls.deleteEmployee(id,name)
    fetchEmployees()
  }

  const signOut = async () =>{
    firebase
      .auth()
      .signOut()
      .then(() =>{
        console.log("Sign-out successful")
      })
      .catch(function(err) {
        console.log(err)
      });
  }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width:'100%' }}>
        <TouchableOpacity
          style={styles.signOutButton}
          onPress={()=> signOut()}>
          <Text style={styles.buttonTitle}> Sign Out </Text>
        </TouchableOpacity>

        <ScrollView style={styles.scroll} >
          {employees.length > 0 ? (employees.map((employee, i) => (
            <Card key={i} id={employee.id} style={styles.card}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate('UpdateEmployeeScreen',{...employee})}> 
                <View>
                  <View>
                    <Text style={styles.name} >{employee.name} </Text>
                  </View>
                <Divider />
                <View>
                  <Text>
                    <Text style={styles.cardTitle}> Date Of Birth </Text> 
                    <Text style={styles.cardData}> {"\n"} {employee.dateOfBirth} </Text>
                  </Text>
                  <Text>
                    <Text style={styles.cardTitle}> Position </Text> 
                    <Text style={styles.cardData}> {"\n"}{employee.position} </Text>
                  </Text>
                  <Text>
                    <Text style={styles.cardTitle}> Phone Number </Text> 
                    <Text style={styles.cardData}> {"\n"}{employee.phoneNumber} </Text>
                  </Text>
                </View>
                  <TouchableOpacity 
                    style={styles.deleteButton}
                    onPress={()=> deleteEmployee(employee.id , employee.name)}
                  >
                    <Text style={styles.deleteButtonText}>x</Text>
                  </TouchableOpacity>
                </View>
              </TouchableWithoutFeedback>
            </Card>
            ))):(
              <View>
                <Text style={styles.noEmployees}>
                  The are no Employees
                </Text>
              </View>
            )}
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AddEmployeeScreen')}>
          <Text style={styles.buttonTitle}> New Employee </Text>
        </TouchableOpacity>

      </View>
    );
  }

  export default HomeScreen;