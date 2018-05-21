import React, { Component } from 'react'

import './Background.scss'

export default class Background extends Component {
  constructor () {
    super()
  }
  
  componentDidMount () {
    Number.prototype.format = function (){
      return this.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    };

    //

    window.editor = new Editor();

    window.viewport = new Viewport( editor );
    this._container.appendChild( viewport.dom );

    window.script = new Script( editor );
    this._container.appendChild( script.dom );
    
    window.player = new Player( editor );
    document.querySelector('#gra-screen-main-player').appendChild(player.dom)
    
    window.toolbar = new Toolbar( editor );
    this._container.appendChild( toolbar.dom );
    
    window.sidebar = new Sidebar( editor );
    document.querySelector('#gra-role-wrapper').appendChild(sidebar.dom)

    window.editor.storage.init( function () {

      window.editor.storage.get( function ( state ) {

        if ( state !== undefined ) {

          for (let key in state.scripts) {

            state.scripts[key][0].xml = 
              (function () {
  
                let xml = document.createElement('xml')
                
                xml.innerHTML = state.scripts[key][0].xml
  
                return xml
  
              })() 
              || ''
  
          }
  
          for (let key in state.voices) {
  
            let buffer = fs.readFileSync(state.voices[key].path)
            let blob = new Blob([buffer])
            let url = URL.createObjectURL(blob)
  
            state.voices[key].url = url
  
          }
  
          editor.signals.initVoices.dispatch(state.voices);

          window.editor.fromJSON( state );

        }

        var selected = editor.config.getKey( 'selected' );

        if ( selected !== undefined ) {

          window.editor.selectByUuid( selected );

        }

      } );

      window.timeout;

      function saveState( scene ) {

        clearTimeout( window.timeout );

        window.timeout = setTimeout( function () {

          window.editor.signals.savingStarted.dispatch();

          window.timeout = setTimeout( function () {

            let data = editor.toJSON();

            window.editor.storage.set( data );

            window.editor.signals.savingFinished.dispatch();

          }, 100 );

        }, 1000 );

      };
      
      window.signals = editor.signals;

      window.signals.geometryChanged.add( saveState );
      window.signals.objectAdded.add( saveState );
      window.signals.objectChanged.add( saveState );
      window.signals.objectRemoved.add( saveState );
      window.signals.materialChanged.add( saveState );
      window.signals.sceneBackgroundChanged.add( saveState );
      window.signals.sceneFogChanged.add( saveState );
      window.signals.sceneGraphChanged.add( saveState );
      window.signals.scriptChanged.add( saveState );
      window.signals.historyChanged.add( saveState );

    } );

  }

  getCanvasView () {
    window.editor.signals.windowResize.dispatch();
  }

  render () {
    return (
      <section className="gra-content-background-editor">
        <div className="gra-content-background-editor-container" ref={container => this._container = container}>

        </div>
      </section>
    )
  }
}