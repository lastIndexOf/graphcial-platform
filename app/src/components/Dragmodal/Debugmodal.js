import React, { Component } from 'react'

import './Debugmodal.scss'

export default class Debugmodal extends Component {
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
  
        self.debugModal.style.top = self.top + 'px'
        self.debugModal.style.left = self.left + 'px'
      }
    }
    this.state = {
      showModal: false
    }
  }

  componentDidMount () {

    document.body.addEventListener('keydown', e => {
      
      if (e.keyCode === 73 && e.ctrlKey && e.shiftKey) {
        e.preventDefault()
        e.stopPropagation()
        this.setState((o, n) => ({
          showModal: !o.showModal
        }))
      }
    })
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
        className={`gra-debug-modal ${showModal ? 'display' : ''}`}
        ref={debugModal => this.debugModal = debugModal}>
        <header
          className="gra-debug-modal-header" 
          onMouseDown={this.dragOptionModal.bind(this)}
          onMouseUp={this.closeMoveOptionModal.bind(this)}>
          图像代码化界面(ctrl + shift + I唤出)
          <i className="iconfont icon-iconfontguanbi" onClick={this.closeModal.bind(this)}></i>  
        </header>
        <section className="gra-debug-modal-content" ref={debugContent => this.debugContent = debugContent}>
          <textarea id="debug-modal-textarea" readOnly></textarea>
        </section>
      </div>
    )
  }
}