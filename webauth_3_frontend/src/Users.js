import React from 'react';

import api from './helpers/baseURL_axios.js'

export default class Users extends React.Component {
    // -- STATE -- //
    state = {
        users: []
    }
    
    // -- METHODS -- //
    async componentDidMount() {
        try {
            const result = await api.get('/users');
            console.log('result', result)
            
            this.setState({
                users: result.data
            })

        } catch {
            console.log({ error: 'Unable to get users'})
        }
    }

    render() {
        console.log('this.state.users', this.state.users.data)


        const usersOnState = this.state.users.data
        console.log('usersOnState', usersOnState)


        return (
            <div>
                <h3>Users</h3> 
                {this.state.users.length === 0 && console.log('HELLO')}
                {this.state.users.length !== 0 && console.log('FUCK')}

                {this.state.users.map(user => {
                    return ( 
                        <div className='user'>
                            {user.userName}
                        </div>
                    )
                })} 

            </div>
            
        )
    }
}