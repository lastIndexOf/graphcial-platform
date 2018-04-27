import React, { Component } from 'react'

import './Screen.scss'

const THREE = require('three')

export default class Screen extends Component {
  constructor () {
    super()
    this.state = {
      isStarted: false,
      isEnded: false,
      _px: 0,
      _py: 0,
      _pz: 0,
      _rx: 0,
      _ry: 0,
      _rz: 0,
      _sx: 0,
      _sy: 0,
      _sz: 0
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

  componentDidMount () {

    setTimeout(() => {
      window.editor.signals.positionInfo.add(({ position, rotation, scale }) => {
        this.setState({
          _px: (position && position.x.toFixed(2)) || '0',
          _py: (position && position.y.toFixed(2)) || '0',
          _pz: (position && position.z.toFixed(2)) || '0',
          _rx: (rotation && rotation.x.toFixed(2)) || '0',
          _ry: (rotation && rotation.y.toFixed(2)) || '0',
          _rz: (rotation && rotation.z.toFixed(2)) || '0',
          _sx: (scale && scale.x.toFixed(2)) || '0',
          _sy: (scale && scale.y.toFixed(2)) || '0',
          _sz: (scale && scale.z.toFixed(2)) || '0'
        })
      })
    }, 0)
  }

  render () {
    let { _px, _py, _pz, _rx, _ry, _rz, _sx, _sy, _sz } = this.state

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
          <span className="gra-screen-x">位置: </span>
          <span className="gra-screen-x">{_px}</span>
          <span className="gra-screen-x">{_py}</span>
          <span className="gra-screen-x">{_pz}</span>
          <span className="gra-screen-x">旋转: </span>
          <span className="gra-screen-x">{_rx}</span>
          <span className="gra-screen-x">{_ry}</span>
          <span className="gra-screen-x">{_rz}</span>
          <span className="gra-screen-y">缩放: </span>
          <span className="gra-screen-z">{_sx}</span>
          <span className="gra-screen-z">{_sy}</span>
          <span className="gra-screen-z">{_sz}</span>
        </div>
      </section>
    )
  }
}