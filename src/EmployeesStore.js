import React from "react"
import { action, makeAutoObservable, observable } from "mobx"
import  ApiCalls from './apiCalls'

export default class EmployeesStore{
    constructor(apiCalls){
        this.apiCalls = apiCalls
        this.employees = []
        makeAutoObservable(this,{
            employees: observable,
            setEmployees: action
        })
    }
    setEmployees(arr){
        this.employees = [...arr]
    } 
}