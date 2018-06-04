import React, { Component } from 'react'

import './Dragmodal.scss'

export default class Dragmodal extends Component {
  constructor () {

    super()

    const self = this

    this.key = false
    this.preTop = 0
    this.preLeft = 0
    this.top = 120
    this.left = 640
    
    this.mouseMoveFunction = function (e) {

      if (self.key) {

        let _x = e.clientX - self.preLeft
        let _y = e.clientY - self.preTop
  
        self.preTop = e.clientY
        self.preLeft = e.clientX
        self.top = self.top + _y
        self.left = self.left + _x
  
        self.dragModal.style.top = self.top + 'px'
        self.dragModal.style.left = self.left + 'px'

      }

    }

    this.state = {
      showModal: false
    }

  }

  componentDidMount () {

    const self = this

    window.editor.signals.dragAction.add(function () {

      self.setState((o, n) => ({
        showModal: !o.showModal
      }))

    })
    let material = new Sidebar.Material(editor)
    this.dragContent.appendChild(objectNameRow.dom)
    this.dragContent.appendChild(material.dom)
    this.dragContent.appendChild(window.objectColorRow.dom)

  }

  closeModal () {

    this.setState({
      showModal: false
    })

  }

  dragOptionModal (e) {

    this.preTop = e.clientY
    this.preLeft = e.clientX
    this.key = true
    document.body.addEventListener('mousemove', this.mouseMoveFunction)

  }

  closeMoveOptionModal (e) {

    this.key = false
    document.body.removeEventListener('mousemove', this.mouseMoveFunction)

  }

  render () {
    let { showModal } = this.state

    return (
      <div 
        className={`gra-drag-modal ${showModal ? 'display' : ''}`}
        ref={dragModal => this.dragModal = dragModal}>
        <header
          className="gra-drag-modal-header" 
          onMouseDown={this.dragOptionModal.bind(this)}
          onMouseUp={this.closeMoveOptionModal.bind(this)}>
          按O显示/隐藏
          <i className="iconfont icon-iconfontguanbi" onClick={this.closeModal.bind(this)}></i>  
        </header>
        <section className="gra-drag-modal-content" ref={dragContent => this.dragContent = dragContent}>

        </section>
      </div>
    )
  }
}