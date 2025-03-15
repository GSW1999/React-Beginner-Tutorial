import React, { Component } from 'react'
import { UserConsumer } from './userContext'

export class ComponentC extends Component {
    render() {
        return (
            <UserConsumer>
                {value => <h2>Name : {value}</h2>
                }
            </UserConsumer>
        )
    }
}

export default ComponentC
