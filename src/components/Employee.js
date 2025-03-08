import React, { Component } from 'react'

export class Employee extends Component {
 
    employee=this.props.employee;
    render() {
    return (
            <tr>
                <td>{this.employee.name}</td>
                <td>{this.employee.age}</td>
                <td>{this.employee.salary}</td>
                </tr>
    )
  }
}

export default Employee
