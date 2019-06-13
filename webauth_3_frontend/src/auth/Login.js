import React from 'react';

export default class Login extends React.Component {
    // State //

    // Methods //
    formSubmit_handler = e => {
        e.preventDefault();
        console.log('you clicked the form button!')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit_handler} >
                    <input
                        type='text'
                        placeholder='userName'
                    ></input>
                    <input
                        type='password'
                        placeholder='password'
                    ></input>
                    <button>Click</button>
                </form>
            </div>
        )
    }
}