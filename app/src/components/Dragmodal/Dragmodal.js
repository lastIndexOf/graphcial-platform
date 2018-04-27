import React, { Component } from 'react'

import './Dragmodal.scss'

export default class Dragmodal extends Component {
  constructor () {
    super()
    this.state = {
      showModal: true
    }
  }

  componentDidMount () {
    let material = new Sidebar.Material(editor)
    this.dragModal.appendChild(material.dom)
  }

  render () {
    let { showModal } = this.state

    return (
      <div className={`gra-drag-modal ${showModal ? 'display' : ''}`} ref={dragModal => this.dragModal = dragModal}>
      </div>
    )
  }
}