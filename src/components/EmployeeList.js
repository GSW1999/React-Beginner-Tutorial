import React, { Component } from 'react'
import Employee from './Employee'

export class EmployeeList extends Component {
    empList=[
        {id:1,name:'Ram',age:24,salary:50000},
        {id:2, name:'Sham',age:25,salary:55000},
        {id:3,name:'Yash',age:26,salary:60000},
    ]
  
    render() {
        
    return (
        <table>
            <tbody>
            {this.empList.map(emp=><Employee key={emp.id} employee={emp} />)}
            </tbody>
        </table>
    )
  }
}

export default EmployeeList
