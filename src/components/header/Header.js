import React from 'react'
import '../styles.scss'
import logo from '../../assets/pngegg.png'

function Header() {
    return (
        <div className="wrap" data-test="headerComponent">
            <div className="logo">
                <img className="logo-img" src={logo} data-test="logo-img" />
                <p className="heading">Simple test Program (JEST and Enzyme)</p>
            </div>
        </div>
    )
}

export default Header
