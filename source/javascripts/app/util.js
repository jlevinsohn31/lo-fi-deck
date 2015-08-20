/*!
 *
 * App Module: /util
 *
 * @namespace util
 * @memberof app
 *
 *
 */
var Hammered = require( "Hammered" ),
    Controller = require( "Controller" ),
    ScrollController = require( "ScrollController" ),
    ResizeController = require( "ResizeController" ),


/**
 *
 * Single app instanceof Hammer
 * @member hammered
 * @memberof util
 *
 */
hammered = new Hammered( document.body, {
    cssProps: {
        contentZoomingString: false,
        tapHighlightColorString: false,
        touchCalloutString: false,
        touchSelectString: false,
        userDragString: false,
        userSelectString: false
    }
}),

/**
 *
 * Single app instanceof Controller for arbitrary event emitting
 * @member emitter
 * @memberof util
 *
 */
emitter = new Controller(),

/**
 *
 * Single app instanceof Scroller
 * @member scroller
 * @memberof util
 *
 */
scroller = new ScrollController(),

/**
 *
 * Single app instanceof Resizer
 * @member resizer
 * @memberof util
 *
 */
resizer = new ResizeController(),

/**
 *
 * Apply a translate3d transform
 * @method translate3d
 * @param {object} el The element to transform
 * @param {string|number} x The x value
 * @param {string|number} y The y value
 * @param {string|number} z The z value
 * @memberof util
 *
 */
translate3d = function ( el, x, y, z ) {
    el.css( Hammer.prefixed( el[ 0 ].style, "transform" ), "translate3d(" + x + "," + y + "," + z + ")" );
};

/******************************************************************************
 * Export
*******************************************************************************/
export { hammered, emitter, scroller, resizer, translate3d };