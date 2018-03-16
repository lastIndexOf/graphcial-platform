import React, { Component } from 'react'

import './Editor.scss'

export default class Editor extends Component {
  constructor () {
    super()
    this.state = {
      bgImgTitle: '',
      bgImgUrl: '',
      bgImgIsActived: false
    }
  }

  bgImgFocus () {
    this.setState({
      bgImgIsActived: true
    })
  }

  render () {
    let { bgImgUrl, bgImgTitle, bgImgIsActived } = this.state

    return (
      <section className="gra-editor-wrapper">
        <div className="gra-editor-header">
          <div className="gra-editor-header-block"></div>
          <div className="gra-editor-header-role">
            <span className="gra-editor-role-title">角色</span>
            <span className="gra-editor-role-operate">
              新建角色: 
              <i className="iconfont icon-addrole gra-icon-addrole"></i>
              <i className="iconfont icon-huabi gra-icon-draw"></i>
              <i className="iconfont icon-shangchuan1 gra-icon-upload"></i>
              <i className="iconfont icon-xiangji gra-icon-camera"></i>
            </span>
          </div>
        </div>
        <div className="gra-editor-main">
          <div className="gra-editor-main-bgeditor">
            <div
              className={`gra-editor-main-bgimg-wrapper ${bgImgIsActived ? 'active' : ''}`}
              onClick={this.bgImgFocus.bind(this)}> 
              <img src={bgImgUrl} className="gra-editor-main-bgimg"/>
              <p className="gra-editor-main-bgimg-title">舞台</p>
              <p className="gra-editor-main-bgimg-title">{bgImgTitle ? bgImgTitle : '新建背景'}</p>
            </div>
            <div className="gra-editor-main-bgimg-edit-wrapper">
              <h4 className="gra-editor-main-bgimg-edit-title">新建背景</h4>
              <span className="gra-editor-main-bgimg-edit-operate">
                <i className="iconfont icon-zhaopianphotos11 gra-icon-addbgimg"></i>
                <i className="iconfont icon-huabi gra-icon-draw"></i>
                <i className="iconfont icon-shangchuan1 gra-icon-upload"></i>
                <i className="iconfont icon-xiangji gra-icon-camera"></i>
              </span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}