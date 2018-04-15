import React, { Component } from 'react'

import './Checkmodal.scss'

export default class Checkmodal extends Component {
  constructor () {
    super()
    this.state = {
      showModal: false,
      data: {
        background: {
          title: '背景库',
          data: [
            {
              part: '分类',
              children: [
                {
                  name: '全部',
                  isActive: true,
                  data: []
                },
                {
                  name: '测试',
                  isActive: false,
                  data: []
                }
              ]
            },
            {
              part: '主题',
              children: [
                {
                  name: '测试',
                  isActive: false,
                  data: []
                }
              ]
            }
          ]
        },
        role: {
          title: '角色库',
          data: [
            {
              part: '分类',
              children: [
                {
                  name: '全部',
                  isActive: false,
                  data: []
                },
                {
                  name: '测试',
                  isActive: false,
                  data: []
                }
              ]
            },
            {
              part: '主题',
              children: [
                {
                  name: '测试',
                  isActive: true,
                  data: []
                }
              ]
            }
          ]
        },
      }
    }
  }

  closeModal () {
    this.setState({
      showModal: false
    })
  }

  showModal () {
    this.setState({
      showModal: true
    })
  }

  typeChange (i, index) {
    let { role } = this.props

    this.setState((o, n) => {
      let { data } = o
      data[role].data = data[role].data.map(item => {
        item.children = item.children.map(child => {
          child.isActive = false
          return child
        })
        return item
      })
      data[role].data[i].children[index].isActive = true
      
      return {
        data
      }
    })
  }

  render () {
    let { showModal, data } = this.state
    let { role } = this.props

    return showModal
      ? (
        <section className="gra-modal">
          <div className="gra-modal-main">
            <i className="iconfont icon-iconfontguanbi gra-icon-close" onClick={this.closeModal.bind(this, 'role')}></i>

            <div className="gra-modal-left-wrapper">
              <h3 className="gra-modal-title">{data[role].title}</h3>
              {data[role].data.map((item, i) => (
                <div className="gra-modal-list-wrpper" key={item.part}>
                  <h4 className="gra-modal-type-title">{item.part}</h4>
                  <ul className="gra-modal-type-list">
                    {item.children.map((child, index) => (
                      <li
                        className={`gra-modal-type-item ${child.isActive ? 'active' : ''}`}
                        onClick={this.typeChange.bind(this, i, index)}
                        key={child.name}>
                        {child.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="gra-modal-right-wrapper">
              <div className="gra-modal-content-wrapper">

              </div>
              <div className="gra-modal-content-operate-wrapper">
                <a href="javascript:;" className="btn btn-primary">确定</a>
                <a href="javascript:;" className="btn btn-default" onClick={this.closeModal.bind(this, 'role')}>取消</a>
              </div>
            </div>
          </div>
        </section>
      )
      : null
  }
}