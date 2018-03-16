import React, { Component } from 'react'

import Screen from './Screen/Screen'
import Editor from './Editor/Editor'
import Content from './Content/Content'

import './Container.scss'

export default class Container extends Component {
  render () {
    return (
      <section className="gra-main-container">
        <div className="gra-left-wrapper">
          <div className="gra-left-top-wrapper">
            <Screen />
          </div>  
          <div className="gra-left-bottom-wrapper">
            <Editor />
          </div>  
        </div>
        <div className="gra-right-wrapper">
          <Content />
        </div>
      </section>
    )
  }
}