import React, { Component } from 'react'

import './Editor.scss'

import sweetalert from 'sweetalert2'

export default class Editor extends Component {
  constructor () {
    super()
    this.state = {
      bgImgTitle: '',
      bgImgUrl: ''
    }
  }

  addBackground (role) {
    this.props.showModal(role)
  }

  bgImgFocus () {
    this.props.checkToBackground()
  }

  changeBackgroundColor () {
    this.colorPicker.click()
  }
  
  makeNewRole () {

    console.log(sweetalert('暂不支持角色建模，请从素材库中选择素材'))
    
  }

  componentDidMount () {

    this.colorPicker = document.createElement('input')
    this.colorPicker.type = 'color'
    this.colorPicker.onchange = e => {

      editor.signals.sceneBackgroundChanged.dispatch(parseInt(this.colorPicker.value.substr( 1 ), 16 ))
      
    }

  }

  render () {
    let { bgImgUrl, bgImgTitle, bgImgIsActived } = this.state
    let { role } = this.props

    return (
      <section className="gra-editor-wrapper">
        <div className="gra-editor-header">
          <div className="gra-editor-header-block"></div>
          <div className="gra-editor-header-role">
            <span className="gra-editor-role-title">素材</span>
            <span className="gra-editor-role-operate">
              新建素材: 
              <i className="iconfont icon-addrole gra-icon-addrole" onClick={this.addBackground.bind(this, 'role')}></i>
              <i className="iconfont icon-huabi gra-icon-draw" onClick={this.makeNewRole.bind(this)}></i>
              <i className="iconfont icon-shangchuan1 gra-icon-upload"></i>
              <i className="iconfont icon-xiangji gra-icon-camera"></i>
            </span>
          </div>
        </div>
        <div className="gra-editor-main">
          <div className="gra-editor-main-bgeditor">
            <div
              className={`gra-editor-main-bgimg-wrapper ${role === 'background' ? 'active' : ''}`}
              onClick={this.bgImgFocus.bind(this)}> 
              <img src={bgImgUrl} className="gra-editor-main-bgimg"/>
              <p className="gra-editor-main-bgimg-title">舞台</p>
              <p className="gra-editor-main-bgimg-title">{bgImgTitle ? bgImgTitle : '新建背景'}</p>
            </div>
            <div className="gra-editor-main-bgimg-edit-wrapper">
              <h4 className="gra-editor-main-bgimg-edit-title">新建背景</h4>
              <span className="gra-editor-main-bgimg-edit-operate">
                <i className="iconfont icon-zhaopianphotos11 gra-icon-addbgimg" onClick={this.addBackground.bind(this, 'background')}></i>
                <i className="iconfont icon-huabi gra-icon-draw" title="修改背景颜色" onClick={this.changeBackgroundColor.bind(this)}></i>
                <i className="iconfont icon-shangchuan1 gra-icon-upload"></i>
                <i className="iconfont icon-xiangji gra-icon-camera"></i>
              </span>
            </div>
          </div>
          <div className="gra-editor-main-role-wrapper" id="gra-role-wrapper">
            
          </div>
        </div>
      </section>
    )
  }
}