import React, { Component } from 'react'

import Menubar from './Menubar'
import { logo, language } from '../../common/images'

import './Header.scss'

export default class Header extends Component {
  render () {
    return (
      <header className="gra-header">
        <div className="gra-avatar-wrapper">
          <img src={logo} className="gra-logo"/>
          <a className="gra-logo-title" href="javascript:;">3D图形编程</a>
        </div>
        <div className="gra-language-selector">
          <i className="iconfont icon-diqiu gra-icon-language"></i>
        </div>
        <Menubar/>
      </header>
    )
  }
}