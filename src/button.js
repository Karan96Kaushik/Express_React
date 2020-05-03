import React, { Component } from 'react';
import { Button, ButtonGroup, SplitButton, SplitButtonItem, ToolbarSpacer, DropDownButton, DropDownButtonItem, Toolbar, ToolbarItem, ToolbarSeparator } from '@progress/kendo-react-buttons'

class ButtonContainer extends React.Component {
    constructor(props) {
        super(props);

        this._icon = props._icon ? props._icon : undefined

        if(props._onClick){
            this.handleDomEvent = props._onClick
        }

        if(props._text){
            this._text = props._text
        }

        this.state = {
            logs: []
        };
    }

    handleDomEvent = (event) => {
        let logs = this.state.logs.slice();

        logs.unshift(event.type)

        this.setState({logs: logs})
    }
    render() {
        return ([
            <Button
                onClick={this.handleDomEvent}
                onMouseDown={this.handleDomEvent}
                onMouseUp={this.handleDomEvent}
                onFocus={this.handleDomEvent}
                onBlur={this.handleDomEvent}
                onKeyPress={this.handleDomEvent}
                icon={this._icon}
            >
                {this._text}
            </Button>,
            
        ])
    }
}

export default ButtonContainer