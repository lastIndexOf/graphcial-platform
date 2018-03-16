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
        <Tablist getTab={this.indexChange.bind(this)}/>
        <div className="gra-content-main-wrapper">
          {tabIndex === 0 ? <Script /> : null}
          {tabIndex === 1 ? <Background /> : null}
          {tabIndex === 2 ? <Voice /> : null}
          {tabIndex === 3 ? <Handsome /> : null}
        </div>
      </section>
    )
  }
}