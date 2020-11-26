import axios from "axios"

export default class ApiCalls {
    constructor(){
        this.baseUrl = `http://192.168.1.204:8080/employee`
    }
    getEmployees = async function(){
        try {
          const employees = await axios.get(`${this.baseUrl}s`)
          return employees.data
        }
        catch(err) {
            console.log(err)
            return err
        }
    }

    deleteEmployee = async function(id, name){
        try{
            await axios.delete(`${this.baseUrl}/${id}`)
            alert(`deleted ${name}`)
        }
        catch(err){
            console.log(err)
            return err
        }
    }

    updateEmployee = async function(employee, navigation){    
        try{
            await axios.put(this.baseUrl , employee)
            alert(`${employee.name} Updated Successfully`)
            navigation.goBack()
        }
        catch(err){
            console.log(err)
            return err
        }
    }
    addEmployee = async (employee , navigation) =>{
        try{
            await axios.post(this.baseUrl,employee)
            alert(`${employee.name} was added Successfully`)
            navigation.goBack()
        }
        catch(err){
            console.log(err)
            return err
        }
    }
}