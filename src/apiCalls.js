import axios from "axios"

export default class ApiCalls {
    constructor(){
        this.baseUrl = `http://192.168.1.204:8080/employees`

    }
    getEmployees = async function(){
        try {
          const employees = await axios.get(this.baseUrl)
          return employees.data
        }
        catch(err) {
            console.log(err);
            return err
        }
    }

    deleteEmployee = async function(id, name){
        try{
            await axios.delete(`http://192.168.1.204:8080/employee/${id}`)
            alert(`deleted ${name}`)
        }
        catch(err){
            console.log(err);
            return err
        }
    }

    updateEmployee = async function( id, name, dateOfBirth, position, phoneNumber){    
        // try{
        //     await axios.put(baseUrl ,{ 
        //         id,
        //         name,
        //         dateOfBirth,
        //         position,
        //         phoneNumber
        //     })
        //     navigation.goBack()
        // }
        // catch(err){
        //     return err
        // }
    }
    // return { getEmployees,
    //          deleteEmployee,
    //          updateEmployee 
    // }
}