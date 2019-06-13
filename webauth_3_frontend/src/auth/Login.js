import React from 'react';

export default class Login extends React.Component {
    // State //
    state = {
        userName: "",
        password: ""
    }

    // Methods //
    formSubmit_handler = e => {
        e.preventDefault();
        console.log('you clicked the form button!')
    }
    inputChange_handler = e => {
        e.preventDefault();
        console.log('inside input change handler')

        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit_handler} >
                    <input
                        type='text'
                        name="userName"
                        placeholder='userName'
                        onChange={this.inputChange_handler}
                    ></input>
                    <input
                        type='password'
                        name="password"
                        placeholder='password'
                        onChange={this.inputChange_handler}
                    ></input>
                    <button>Click</button>
                </form>
            </div>
        )
    }
}