import React, { Component } from 'react'

import Screen from './Screen/Screen'
import Editor from './Editor/Editor'
import Content from './Content/Content'

import Checkmodal from './Checkmodal/Checkmodal'

import './Container.scss'

export default class Container extends Component {
  constructor () {
    super()
    this.state = {
      role: 'background'
    }
  }

  checkToBackground () {
    this.setState({
      role: 'background'
    })
  }

  showModal (role) {
    if (role) {
      this.setState({
        role
      })
    } 
    this.checkModal.showModal()
  }

  render () {
    let { role } = this.state

    return (
      <section className="gra-main-container">
        <div className="gra-left-wrapper">
          <div className="gra-left-top-wrapper">
            <Screen />
          </div>  
          <div className="gra-left-bottom-wrapper">
            <Editor role={role} checkToBackground={this.checkToBackground.bind(this)} showModal={this.showModal.bind(this)}/>
          </div>  
        </div>
        <div className="gra-right-wrapper">
          <Content role={role}/>
        </div>
        <Checkmodal role={role} ref={checkModal => this.checkModal = checkModal}/>
      </section>
    )
  }
}