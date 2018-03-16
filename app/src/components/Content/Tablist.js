import React, { Component } from 'react'

import './Tablist.scss'
const TAB_LIST = [ '脚本' ,'背景' ,'声音' ,'造型' ]

export default class Tablist extends Component {
  constructor () {
    super()
    this.state = {
      tabIndex: 0,
      tabList: TAB_LIST
    }
  }

  changeIndex (index) {
    this.setState({
      tabIndex: index
    })

    this.props.getTab(index)
  }

  render () {
    let { tabIndex, tabList } = this.state

    return (
      <div className="gra-content-tab-list">
        <ul className="gra-content-list">
          {tabList.map((item, i) => (
            <li 
              className={`gra-content-list-item ${tabIndex === i ? 'active' : ''}`}
              onClick={this.changeIndex.bind(this, i)} 
              key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}