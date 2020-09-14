import React, {Component} from 'react'

export default class Square extends Component {
    render() {
        return (
            <div>
                <button
                    className={'square ' + this.props.className}
                    onClick={() => this.props.onClick()}>{this.props.value}</button>
            </div>
        )
    }
}
