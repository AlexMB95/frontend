import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <button>
                    
                </button>
            </div>
        )
    }
}

export default Button;