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

    window.workspace = Blockly.inject('blocklyDiv', {
      media: '../../../../assets/media/',
      toolbox: document.getElementById('toolbox')
    })

    let debugModal = document.getElementById('debug-modal-textarea')

    function myUpdateFunction(event) {

      let code = Blockly.JavaScript.workspaceToCode(workspace)
      let xml = Blockly.Xml.workspaceToDom(workspace)
      
      debugModal.style.color = '#fff'
      debugModal.value = code

      let object = editor.selected
      let script = object && editor.scripts[object.uuid] && editor.scripts[object.uuid][0]

      if (script) {

        script.source = code
        script.xml = xml

        window.signals.scriptChanged.dispatch()

      }

    }

    workspace.addChangeListener(myUpdateFunction)
    
  }

  render () {
    return (
      <section className="gra-content-script-editor">
        <div id="blocklyDiv" className="gra-content-script-blockly"></div>
      </section>
    )
  }
}