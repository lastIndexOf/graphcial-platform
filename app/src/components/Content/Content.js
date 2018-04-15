import React, { Component } from 'react'
import Tablist from './Tablist'

import './Content.scss'

import {
  Script,
  Background,
  Voice,
  Handsome
} from './editors'

export default class Content extends Component {
  constructor () {
    super()
    this.state = {
      tabIndex: 0
    }
  }
  
  indexChange (index) {
    this.setState({
      tabIndex: index
    })
  }

  render () {
    let { tabIndex } = this.state

    return (
      <section className="gra-content-wrapper">
        <Tablist getTab={this.indexChange.bind(this)} role={this.props.role}/>
        <div className="gra-content-main-wrapper">
          <div className={`gra-content-main-container ${tabIndex === 0 ? '' : 'hidden'}`}>
            <Script />
          </div>
          <div className={`gra-content-main-container ${tabIndex === 1 ? '' : 'hidden'}`}>
            <Background />
          </div>
          <div className={`gra-content-main-container ${tabIndex === 2 ? '' : 'hidden'}`}>
            <Voice />
          </div>
          <div className={`gra-content-main-container ${tabIndex === 3 ? '' : 'hidden'}`}>
            <Handsome />
          </div>
        </div>
      </section>
    )
  }
}