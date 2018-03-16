import React, { Component } from 'react'

import './Nextmenu.scss'

export default class Nextmenu extends Component {
  fileOpen () {
    console.log(arguments)
  }

  render () {
    return (
      <ul className={`gra-next-menu ${this.props.isActive ? 'active' : ''}`}>
        {this.props.children.map(item => (
          <li
            className="gra-next-menu-item"
            onClick={item.func ? this[item.func].bind(this) : null}
            key={item.title}>
            {item.title}
          </li>
        ))}
      </ul>
    )
  }
}