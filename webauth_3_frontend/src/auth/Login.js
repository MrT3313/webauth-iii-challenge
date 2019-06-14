import React from 'react';

import api from '../helpers/baseURL_axios.js'

export default class Login extends React.Component {
    // -- STATE -- //
    state = {
        userName: "",
        password: ""
    }

    // -- RENDER -- //
    render() {
        return (
            <div>
                <div className='title'>
                    Welcome Back Friend! I CANT WAIT FOR YOU TO LOG IN!!!
                </div>
                <form onSubmit={this.formSubmit_handler} >
                    <input
                        type='text'
                        name="userName"
                        placeholder='userName'
                        onChange={this.inputChange_handler}
                        value={this.state.userName}
                    ></input>
                    <input
                        type='password'
                        name="password"
                        placeholder='password'
                        onChange={this.inputChange_handler}
                        value={this.state.password}
                    ></input>
                    <button>Click</button>
                </form>
            </div>
        )
    }

    // -- METHODS -- //
        inputChange_handler = e => {
            e.preventDefault();
            console.log('inside input change handler')

            this.setState({ [e.target.name]: e.target.value });
        }
        formSubmit_handler = async e => {
            e.preventDefault();
            console.log('you clicked the form button!')
            
            try {                
                const result = await api.post('/login', {
                    userName: this.state.userName,
                    password: this.state.password 
                })

                console.log('result', result)

                document.cookie = `token=${result.data.token}`
                localStorage.setItem('token', result.data.token)
                localStorage.setItem('userID', result.data.user)

            } catch {
                console.log( { error: 'Unable to do your request'} )
            }
        }
}