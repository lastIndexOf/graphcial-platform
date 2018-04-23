import React, { Component } from 'react'

import './Nextmenu.scss'

export default class Nextmenu extends Component {
  exportProject () {
    var output = editor.toJSON();
		output.metadata.type = 'App';
		delete output.history;

    for (let key in output.scripts) {
      try {

        output.scripts[key][0].xml = output.scripts[key][0].xml.innerHTML

      } catch (e) {}
    }

    output = JSON.stringify( output )

		saveString( output, 'app.json' )
  }
  
  importProject () {
    this.fileInput.click()
  }

  newProject () {
    if (confirm('未保存的素材和脚本将会丢失， 确定要离开吗？')) {
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