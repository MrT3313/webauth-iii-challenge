import React from 'react';
import api from './helpers/baseURL_axios'

export default class Register extends React.Component {
    // -- STATE -- //
    state = {
        userName: "",
        password: "",
        department: "",
    }

    // -- RENDER -- //
    render() {
        return (
            <div>
                <div className='title'>
                    Complete form to complete registration!
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
                    <input
                        type='test'
                        name="department"
                        placeholder='department'
                        onChange={this.inputChange_handler}
                        value={this.state.department}
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
            console.log('YOU CLICKED FOR REGISTER FORM BUTTON')

            try {
                const result = await api.post('/register', this.state)
                console.log('result', result)
            } catch {
                console.log({ error: 'unable to Register'})
            }
        }
}