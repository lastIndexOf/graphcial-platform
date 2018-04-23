import React, { Component } from 'react'

import './Background.scss'

export default class Background extends Component {
  constructor () {
    super()
  }
  
  componentDidMount () {
    window.URL = window.URL || window.webkitURL;
    window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;

    Number.prototype.format = function (){
      return this.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    };

    //

    window.editor = new Editor();

    window.viewport = new Viewport( editor );
    document.body.appendChild( viewport.dom )
    this._container.appendChild( viewport.dom );

    window.script = new Script( editor );
    this._container.appendChild( script.dom );
    
    window.player = new Player( editor );
    document.querySelector('#gra-screen-main-player').appendChild(player.dom)
    
    window.toolbar = new Toolbar( editor );
    this._container.appendChild( toolbar.dom );
    
    window.menubar = new Menubar( editor );
    this._container.appendChild( menubar.dom );
    menubar.dom.style.visibility = 'hidden';
    
    window.sidebar = new Sidebar( editor );
    document.querySelector('#gra-role-wrapper').appendChild(sidebar.dom)
    // sidebar.dom.style.visibility = 'hidden';

    window.modal = new UI.Modal();
    this._container.appendChild( modal.dom );

    // new Viewport.Info( editor )
    //

    window.editor.setTheme( editor.config.getKey( 'theme' ) );

    window.editor.storage.init( function () {

      window.editor.storage.get( function ( state ) {

        if ( isLoadingFromHash ) return;

        if ( state !== undefined ) {

          window.editor.fromJSON( state );

        }

        var selected = editor.config.getKey( 'selected' );

        if ( selected !== undefined ) {

          window.editor.selectByUuid( selected );

        }

      } );

      //

      window.timeout;

      function saveState( scene ) {

        if ( window.editor.config.getKey( 'autosave' ) === false ) {

          return;

        }

        clearTimeout( window.timeout );

        window.timeout = setTimeout( function () {

          window.editor.signals.savingStarted.dispatch();

          window.timeout = setTimeout( function () {

            window.editor.storage.set( editor.toJSON() );

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

      window.signals.showModal.add( function ( content ) {

        window.modal.show( content );

      } );

    } );

    //

    document.addEventListener( 'dragover', function ( event ) {

      event.preventDefault();
      event.dataTransfer.dropEffect = 'copy';

    }, false );

    document.addEventListener( 'drop', function ( event ) {

      event.preventDefault();

      if ( event.dataTransfer.files.length > 0 ) {

        editor.loader.loadFile( event.dataTransfer.files[ 0 ] );

      }

    }, false );

    function onWindowResize( event ) {

      window.editor.signals.windowResize.dispatch();

    }

    // window.addEventListener( 'resize', onWindowResize, false );
    //

    var isLoadingFromHash = false;
    var hash = window.location.hash;

    if ( hash.substr( 1, 5 ) === 'file=' ) {

      var file = hash.substr( 6 );

      if ( confirm( 'Any unsaved data will be lost. Are you sure?' ) ) {

        var loader = new THREE.FileLoader();
        loader.crossOrigin = '';
        loader.load( file, function ( text ) {

          editor.clear();
          editor.fromJSON( JSON.parse( text ) );

        } );

        isLoadingFromHash = true;

      }

    }
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