/*!
 *
 * Welcome to grunt-nautilus
 * https://github.com/kitajchuk/grunt-nautilus
 *
 * Copyright (c) 2013 Brandon Kitajchuk
 * Licensed under the MIT license.
 *
 *
 */
import "node_modules/hammerjs/hammer";
import "node_modules/jquery/dist/jquery";
import "lib/proper";
import "app/util";


var $_window = $( window ),
    $_document = $( document ),
    $_jsSlides = $( ".js-slides" ),
    $_jsItems = $_jsSlides.children(),
    $_jsNavi = $( ".js-navi" ),

    debounce = require( "debounce" ),

    _position = 0,
    _current = 0,
    _length = $_jsItems.length,

    _keys = {
        // Devance 1 slide
        UP: 38,

        // Advance 1 slide
        DOWN: 40
    };


function advanceSlides( i ) {
    if ( _current === (_length - 1) && i > 0 ) {
        // THE END
        return;

    } else if ( _current === 0 && i < 0 ) {
        // THE BEGINNING
        return;
    }

    _current = (_current + i);
    _position = (_position + (window.innerHeight * i));

    $_jsItems.removeClass( "is-active" ).eq( _current ).addClass( "is-active" );

    util.translate3d( $_jsSlides, 0, (-_position + "px"), 0 );

    if ( _current > 0 ) {
        $_jsNavi.addClass( "is-inactive" );
    }
}


$_window.on( "resize", debounce(function () {
    _position = (window.innerHeight * _current);

    util.translate3d( $_jsSlides, 0, (-_position + "px"), 0 );
}));


$_window.on( "load", function () {
    $_jsItems.eq( _current ).addClass( "is-active" );

    $_document.on( "keyup", function ( e ) {
        e.preventDefault();

        switch ( e.keyCode ) {
            case _keys.UP:
                advanceSlides( -1 );
            break;

            case _keys.DOWN:
                advanceSlides( 1 );
            break;
        }
    });

    util.hammered.on( "tap", ".js-tap-top", function () {
        advanceSlides( -1 );
    });

    util.hammered.on( "tap", ".js-tap-bot", function () {
        advanceSlides( 1 );
    });
});