import React, { Component } from 'react'

import Nextmenu from './Nextmenu'

import './Menubar.scss'
import MENU_DATA from '../../common/menuData.json'

export default class Menubar extends Component {
  constructor () {
    super()
    this.state = {
      menuFocus: false,
      data: MENU_DATA
    }
  }

  changeFocus (index, e) {
    this.setState((o, n) => {
      let menuFocus = !o.menuFocus

      let data = o.data.map(item => {
        item.isActive = false
        return item
      })
      if (menuFocus) {
        data[index].isActive = true
      }

      return {
        menuFocus,
        data
      }
    })
  }

  checkFocus (index, e) {
    if (this.state.menuFocus) {
      this.setState((o, n) => {
        let data = o.data.map(item => {
          item.isActive = false
          return item
        })
        data[index].isActive = true

        return {
          data
        }
      })
    }
  }

  render () {
    let { data } = this.state

    return (
      <ul className="gra-menu-bar">
        {data.map((item, i) => (
          <li
            className={`gra-menu-item ${item.isActive ? 'active' : ''}`}
            onMouseEnter={this.checkFocus.bind(this, i)}
            onClick={this.changeFocus.bind(this, i)}
            key={item.title}>
            {item.title} <i className="iconfont icon-xia gra-icon-xia"></i>
            <Nextmenu isActive={item.isActive} children={item.children}/>
          </li>
        ))}
      </ul>
    )
  }
}