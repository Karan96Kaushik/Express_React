import React, { Component } from 'react';
import { Input } from '@progress/kendo-react-inputs'

class ButtonContainer extends React.Component {
    constructor(props) {
        super(props);
        this._onChange = props._onChange ? props._onChange : undefined

        this.state = {
            logs: []
        };
    }

    handleDomEvent = (event) => {
        let logs = this.state.logs.slice();

        logs.unshift(event.type)

        this.setState({ logs: logs })
    }
    render() {
        return ([
            <Input
                onChange={this._onChange}
                style={{
                    width: '350px',
                    color: 'white',
                }}
            />,
        ])
    }
}

export default ButtonContainer