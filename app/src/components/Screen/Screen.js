import React, { Component } from 'react'

import './Screen.scss'

const THREE = require('three')

export default class Screen extends Component {
  constructor () {
    super()
    this.state = {
      isStarted: false,
      isEnded: false,
      _x: 0,
      _y: 0,
      _z: 0
    }
  }

  changeState (state) {
    let signals = editor.signals
    if (state === 'isStarted') {
      signals.startPlayer.dispatch()
      this.setState({
        [state]: true,
        isEnded: false
      })
    } else {
      signals.stopPlayer.dispatch()
      this.setState({
        [state]: true,
        isStarted: false
      })
    }
  }

  render () {
    let { _x, _y, _z } = this.state

    return (
      <section className="gra-screen-wrapper">
        <div className="gra-screen-header">
          <i className="iconfont icon-quanping gra-icon-full-screen" title="全屏"></i>
          <i onClick={this.changeState.bind(this, 'isEnded')} className={`iconfont icon-circle gra-icon-end ${this.state.isEnded ? 'active' : ''}`}></i>
          <i onClick={this.changeState.bind(this, 'isStarted')} className={`iconfont icon-qizi gra-icon-start ${this.state.isStarted ? 'active' : ''}`}></i>
        </div>
        <div className="gra-screen-main">
          <div className="gra-screen-main-container" id="gra-screen-main-player">
            <img src={require('../../../assets/image/guide.png')} />
          </div>
        </div>
        <div className="gra-screen-footer">
          <span className="gra-screen-x">x: {_x}</span>
          <span className="gra-screen-y">y: {_y}</span>
          <span className="gra-screen-z">z: {_z}</span>
        </div>
      </section>
    )
  }
}