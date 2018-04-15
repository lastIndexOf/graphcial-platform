import React, { Component } from 'react'

import './Script.scss'

export default class Script extends Component {
  constructor () {
    super()
  }

  getBlock (index) {
    this.setState({
      blockIndex: index
    })
  }

  componentDidMount () {
    var workspace = Blockly.inject('blocklyDiv',
    {toolbox: document.getElementById('toolbox')})
  }

  render () {
    return (
      <section className="gra-content-script-editor">
        <div id="blocklyDiv" className="gra-content-script-blockly"></div>
      </section>
    )
  }
}