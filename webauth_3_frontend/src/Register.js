import React from 'react';
import axios from 'axios';

export default class Register extends React.Component {
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
        formSubmit_handler = e => {
            e.preventDefault();
            console.log('YOU CLICKED FOR REGISTER FORM BUTTON')

            const PORT = 9000
            const endpoint = `http://localhost:${PORT}/api/Register`

            axios
                .post(endpoint, this.state)
                .then( res => {
                    console.log('res', res )
                    
                })
                .catch( err => {
                
                })

        }
}