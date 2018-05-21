/**
 * @author mrdoob / http://mrdoob.com/
 */

var Player = function ( editor ) {

	var signals = editor.signals;

	var container = new UI.Panel();
	container.setId( 'player' );
	container.setPosition( 'absolute' );
	container.setDisplay( 'none' );

	//

	container.setSize = function () {

		player.setSize( container.dom.clientWidth, container.dom.clientHeight );

	};

	//

	var player = new APP.Player();
	container.dom.appendChild( player.dom );

	window.addEventListener( 'resize', function () {

		player.setSize( container.dom.clientWidth, container.dom.clientHeight );

	} );

	signals.startPlayer.add( function () {

		if (player.state === 'playing') return;
		player.state = 'playing';

		container.setDisplay( '' );

		player.load( editor.toJSON() );
		player.setSize( container.dom.clientWidth, container.dom.clientHeight );
		player.play();

	} );

	signals.stopPlayer.add( function () {

		if (player.state === 'stop') return;
		player.state = 'stop';

		container.setDisplay( 'none' );

		player.stop();
		player.dispose();

	} );

	return container;

};
