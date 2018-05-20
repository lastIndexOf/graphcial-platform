import React, { Component } from 'react'

import './Nextmenu.scss'

export default class Nextmenu extends Component {
  exportProject () {

    var output = editor.toJSON()
		output.metadata.type = 'App'
    output = JSON.stringify( output )

    this.saveString( output, 'app.json' )
    
  }
  
  importProject () {
    this.fileInput.click()
  }

  newProject () {
    if (confirm('未保存的素材和脚本将会丢失， 确定要离开吗？')) {

      window.workspace.clear()
      editor.signals.stopPlayer.dispatch()
      editor.signals.clearVoices.dispatch()
      
      editor.clear()

		}
  }

  componentDidMount () {
    var form = document.createElement( 'form' )
    form.style.display = 'none'
    document.body.appendChild( form )

    this.fileInput = document.createElement( 'input' )
    this.fileInput.type = 'file'
    this.fileInput.addEventListener( 'change',  event => {

      editor.loader.loadFile( this.fileInput.files[ 0 ] )
      form.reset()

    })

    var link = document.createElement( 'a' )
    link.style.display = 'none'
    document.body.appendChild( link )

    this.save = ( blob, filename ) => {

      link.href = URL.createObjectURL( blob )
      link.download = filename || 'data.json'
      link.click()

    }

    this.saveString = ( text, filename ) => {
	
      this.save( new Blob( [ text ], { type: 'text/plain' } ), filename )
  
    }
  }

  render () {
    return (
      <ul className={`gra-next-menu ${this.props.isActive ? 'active' : ''}`}>
        {this.props.children.map(item => (
          <li
            className="gra-next-menu-item"
            onClick={item.func ? this[item.func].bind(this) : null}
            key={item.title}>
            {item.title}
          </li>
        ))}
      </ul>
    )
  }
}