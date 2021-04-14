import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Navbar extends Component {
    static defaultProps = { //default props takesover if prop is not passed in from parent component
        title: "Github Finder",
        icon: "fab fa-github"
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }
    
    render() {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={this.props.icon}/>{this.props.title}
                </h1>
            </nav>
        )
    }
}

export default Navbar
