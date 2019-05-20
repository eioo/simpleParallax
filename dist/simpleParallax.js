/*!
 * simpleParallax - simpleParallax is a simple and lightweight JS plugin that gives your website parallax animations on images, 
 * @date: 20-05-2019 11:43:7, 
 * @version: 5.0.0alpha,
 * @link: https://simpleparallax.com/
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("simpleParallax", [], factory);
	else if(typeof exports === 'object')
		exports["simpleParallax"] = factory();
	else
		root["simpleParallax"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/helpers/viewport.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Viewport =
/*#__PURE__*/
function () {
  function Viewport() {
    _classCallCheck(this, Viewport);

    this.positions = {
      top: 0,
      bottom: 0,
      height: 0
    };
  }

  _createClass(Viewport, [{
    key: "setViewportTop",
    value: function setViewportTop() {
      this.positions.top = window.pageYOffset;
      return this.positions;
    }
  }, {
    key: "setViewportBottom",
    value: function setViewportBottom() {
      this.positions.bottom = this.positions.top + this.positions.height;
      return this.positions;
    }
  }, {
    key: "setViewportHeight",
    value: function setViewportHeight() {
      this.positions.height = document.documentElement.clientHeight;
      return this.positions;
    }
  }, {
    key: "setViewportAll",
    value: function setViewportAll() {
      this.positions.top = window.pageYOffset;
      this.positions.bottom = this.positions.top + this.positions.height;
      this.positions.height = document.documentElement.clientHeight;
      return this.positions;
    }
  }]);

  return Viewport;
}();

/* harmony default export */ var viewport = (Viewport);
// CONCATENATED MODULE: ./src/helpers/cssTransform.js
// Detect css transform
var cssTransform = function cssTransform() {
  var prefixes = 'transform webkitTransform mozTransform oTransform msTransform'.split(' '),
      cssTransform,
      i = 0;

  while (cssTransform === undefined) {
    cssTransform = document.createElement('div').style[prefixes[i]] !== undefined ? prefixes[i] : undefined;
    i++;
  }

  return cssTransform;
};

/* harmony default export */ var helpers_cssTransform = (cssTransform());
// CONCATENATED MODULE: ./src/helpers/isImageLoaded.js
//check if image is fully loaded
var isImageLoaded = function isImageLoaded(image) {
  //check if image is set as the parameter
  if (!image) {
    return false;
  } //check if image has been 100% loaded


  if (!image.complete) {
    return false;
  } //check if the image is displayed


  if (typeof image.naturalWidth !== 'undefined' && image.naturalWidth === 0) {
    return false;
  }

  return true;
};

/* harmony default export */ var helpers_isImageLoaded = (isImageLoaded);
// CONCATENATED MODULE: ./src/instances/parallax.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function parallax_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function parallax_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function parallax_createClass(Constructor, protoProps, staticProps) { if (protoProps) parallax_defineProperties(Constructor.prototype, protoProps); if (staticProps) parallax_defineProperties(Constructor, staticProps); return Constructor; }





var parallax_ParallaxInstance =
/*#__PURE__*/
function () {
  function ParallaxInstance(element, options) {
    parallax_classCallCheck(this, ParallaxInstance);

    //set the element & settings
    this.element = element;
    this.elementContainer = element;
    this.settings = options;
    this.isVisible = true;
    this.oldTranslateValue = -1;
    this.init = this.init.bind(this); //check if images has not been loaded yet

    if (helpers_isImageLoaded(element)) {
      this.init();
    } else {
      this.element.addEventListener('load', this.init);
    }
  }

  parallax_createClass(ParallaxInstance, [{
    key: "init",
    value: function init() {
      if (this.settings.overflow === false) {
        //if overflow option is set to false
        //wrap the element into a div to apply overflow
        this.wrapElement(this.element);
      } //apply the default style on the image


      this.setStyle(); //get the current element offset

      this.getElementOffset(); //init the Intesection Observer

      this.intersectionObserver(); //get its translated value

      this.getTranslateValue(); //apply its translation even if not visible for the first init

      this.animate();
    } // if overflow option is set to false
    // wrap the element into a .simpleParallax div and apply overflow hidden to hide the image excedant (result of the scale)

  }, {
    key: "wrapElement",
    value: function wrapElement() {
      //check is current image is in a <picture> tag
      var elementToWrap = this.element.closest('picture') || this.element; // create a .simpleParallax wrapper container

      var wrapper = document.createElement('div');
      wrapper.classList.add('simpleParallax');
      wrapper.style.overflow = 'hidden'; //append the image inside the new wrapper

      elementToWrap.parentNode.insertBefore(wrapper, elementToWrap);
      wrapper.appendChild(elementToWrap);
      this.elementContainer = wrapper;
    } //unwrap the element from .simpleParallax wrapper container

  }, {
    key: "unWrapElement",
    value: function unWrapElement() {
      var wrapper = this.elementContainer;
      wrapper.replaceWith.apply(wrapper, _toConsumableArray(wrapper.childNodes));
    } //apply default style on element

  }, {
    key: "setStyle",
    value: function setStyle() {
      if (this.settings.overflow === false) {
        //if overflow option is set to false
        //add scale style so the image can be translated without getting out of its container
        this.element.style[helpers_cssTransform] = 'scale(' + this.settings.scale + ')';
      }

      if (this.settings.delay > 0) {
        //if delay option is set to true
        //add transition option
        this.element.style.transition = 'transform ' + this.settings.delay + 's ' + this.settings.transition;
      } //add will-change CSS property to improve perfomance


      this.element.style.willChange = 'transform';
    } //remove style of the element

  }, {
    key: "unSetStyle",
    value: function unSetStyle() {
      //remove will change inline style
      this.element.style.willChange = '';
      this.element.style[helpers_cssTransform] = '';
      this.element.style.transition = '';
    } //get the current element offset

  }, {
    key: "getElementOffset",
    value: function getElementOffset() {
      //get position of the element
      var positions = this.elementContainer.getBoundingClientRect(); //get height

      this.elementHeight = positions.height; //get offset top

      this.elementTop = positions.top + simpleParallax_viewport.positions.top;
    } //build the Threshold array to cater change for every pixel scrolled

  }, {
    key: "buildThresholdList",
    value: function buildThresholdList() {
      var thresholds = [];

      for (var i = 1.0; i <= this.elementHeight; i++) {
        var ratio = i / this.elementHeight;
        thresholds.push(ratio);
      }

      return thresholds;
    } //create the Intersection Observer

  }, {
    key: "intersectionObserver",
    value: function intersectionObserver() {
      var options = {
        root: null,
        threshold: this.buildThresholdList()
      };
      this.observer = new IntersectionObserver(this.intersectionObserverCallback.bind(this), options);
      this.observer.observe(this.element);
    } //Intersection Observer Callback to set the element at visible state or not

  }, {
    key: "intersectionObserverCallback",
    value: function intersectionObserverCallback(entries) {
      for (var i = entries.length - 1; i >= 0; i--) {
        if (entries[i].isIntersecting) {
          this.isVisible = true;
        } else {
          this.isVisible = false;
        }
      }
    } //calculate the range between image will be translated

  }, {
    key: "getRangeMax",
    value: function getRangeMax() {
      //get the real height of the image without scale
      var elementImageHeight = this.element.clientHeight; //range is calculate with the image height by the scale

      this.rangeMax = elementImageHeight * this.settings.scale - elementImageHeight; // let test = this.elementHeight * this.settings.scale - this.elementHeight;
      //if orientation option is down or right
      //inverse the range max to translate in the other way

      if (this.settings.orientation === 'down' || this.settings.orientation === 'right') {
        this.rangeMax *= -1;
      }
    } //get the percentage and the translate value to apply on the element

  }, {
    key: "getTranslateValue",
    value: function getTranslateValue() {
      //calculate the % position of the element comparing to the viewport
      //rounding percentage to a 1 number float to avoid unn unnecessary calculation
      var percentage = ((simpleParallax_viewport.positions.bottom - this.elementTop) / ((simpleParallax_viewport.positions.height + this.elementHeight) / 100)).toFixed(1); //sometime the percentage exceeds 100 or goes below 0

      percentage = Math.min(100, Math.max(0, percentage)); //sometime the same percentage is returned
      //if so we don't do aything

      if (this.oldPercentage === percentage) {
        return false;
      } //if not range max is set, recalculate it


      if (!this.rangeMax) {
        this.getRangeMax();
      } //transform this % into the max range of the element
      //rounding translateValue to a non float int - as minimum pixel for browser to render is 1 (no 0.5)


      this.translateValue = (percentage / 100 * this.rangeMax - this.rangeMax / 2).toFixed(0); //sometime the same translate value is returned
      //if so we don't do aything

      if (this.oldTranslateValue === this.translateValue) {
        return false;
      } //store the current percentage


      this.oldPercentage = percentage;
      this.oldTranslateValue = this.translateValue;
      return true;
    } //animate the image

  }, {
    key: "animate",
    value: function animate() {
      var translateValueY = 0,
          translateValueX = 0,
          inlineCss;

      if (this.settings.orientation === 'left' || this.settings.orientation === 'right') {
        //if orientation option is left or right
        //use horizontal axe - X axe
        translateValueX = this.translateValue + 'px';
      } else {
        //if orientation option is left or right
        //use vertical axe - Y axe
        translateValueY = this.translateValue + 'px';
      } //set style to apply to the element


      if (this.settings.overflow === false) {
        //if overflow option is set to false
        //add the scale style
        inlineCss = 'translate3d(' + translateValueX + ', ' + translateValueY + ', 0) scale(' + this.settings.scale + ')';
      } else {
        inlineCss = 'translate3d(' + translateValueX + ', ' + translateValueY + ', 0)';
      } //add style on the element using the adequate CSS transform


      this.element.style[helpers_cssTransform] = inlineCss;
    }
  }]);

  return ParallaxInstance;
}();

/* harmony default export */ var parallax = (parallax_ParallaxInstance);
// CONCATENATED MODULE: ./src/simpleParallax.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewport", function() { return simpleParallax_viewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return simpleParallax_SimpleParallax; });
function simpleParallax_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function simpleParallax_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function simpleParallax_createClass(Constructor, protoProps, staticProps) { if (protoProps) simpleParallax_defineProperties(Constructor.prototype, protoProps); if (staticProps) simpleParallax_defineProperties(Constructor, staticProps); return Constructor; }


var simpleParallax_viewport = new viewport();

var isInit = false,
    instances = [],
    instancesLength,
    frameID;

var simpleParallax_SimpleParallax =
/*#__PURE__*/
function () {
  function SimpleParallax(elements, options) {
    simpleParallax_classCallCheck(this, SimpleParallax);

    this.elements = typeof elements !== 'undefined' && NodeList.prototype.isPrototypeOf(elements) ? elements : [elements];
    this.defaults = {
      delay: 0.6,
      orientation: 'up',
      scale: 1.3,
      overflow: false,
      transition: 'cubic-bezier(0,0,0,1)',
      breakpoint: false
    };
    this.settings = Object.assign(this.defaults, options); //check if breakpoint is set and superior to user browser width

    if (this.settings.breakpoint && document.documentElement.clientWidth <= this.settings.breakpoint) {
      return;
    }

    this.lastPosition = -1; //this.init = this.init.bind(this);

    this.handleResize = this.handleResize.bind(this);
    this.proceedRequestAnimationFrame = this.proceedRequestAnimationFrame.bind(this);
    this.init();
  }

  simpleParallax_createClass(SimpleParallax, [{
    key: "init",
    value: function init() {
      simpleParallax_viewport.setViewportAll();

      for (var i = this.elements.length - 1; i >= 0; i--) {
        var instance = new parallax(this.elements[i], this.settings);
        instances.push(instance);
      } //update the instance length


      instancesLength = instances.length; //only if this is the first simpleParallax init

      if (!isInit) {
        //init the frame
        this.proceedRequestAnimationFrame();
        window.addEventListener('resize', this.handleResize);
        isInit = true;
      }
    } //when resize, some coordonates need to be re-calculate

  }, {
    key: "handleResize",
    value: function handleResize() {
      //re-get all the viewport positions
      simpleParallax_viewport.setViewportAll();

      if (this.settings.breakpoint && document.documentElement.clientWidth <= this.settings.breakpoint) {
        this.destroy();
      }

      for (var i = instancesLength - 1; i >= 0; i--) {
        //re-get the current element offset
        instances[i].getElementOffset(); //re-get the range if the current element

        instances[i].getRangeMax();
      }
    } //animation frame

  }, {
    key: "proceedRequestAnimationFrame",
    value: function proceedRequestAnimationFrame() {
      //get the offset top of the viewport
      simpleParallax_viewport.setViewportTop();

      if (this.lastPosition === simpleParallax_viewport.positions.top) {
        //if last position if the same than the curent one
        //callback the animationFrame and exit the current loop
        frameID = window.requestAnimationFrame(this.proceedRequestAnimationFrame);
        return;
      } //get the offset bottom of the viewport


      simpleParallax_viewport.setViewportBottom(); //proceed with the current element

      for (var i = instancesLength - 1; i >= 0; i--) {
        this.proceedElement(instances[i]);
      } //callback the animationFrame


      frameID = window.requestAnimationFrame(this.proceedRequestAnimationFrame); //store the last position

      this.lastPosition = simpleParallax_viewport.positions.top;
    } //proceed the element

  }, {
    key: "proceedElement",
    value: function proceedElement(instance) {
      if (!instance.isVisible) {
        return;
      } //if percentage is equal to the last one, no need to continue


      if (!instance.getTranslateValue()) {
        return;
      } //animate the image


      instance.animate();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var instancesToDestroy = []; //get all instance indexes that need to be destroyed

      for (var i = instancesLength - 1; i >= 0; i--) {
        for (var j = this.elements.length - 1; j >= 0; j--) {
          if (instances[i].element === this.elements[j]) {
            instancesToDestroy.push(i);
            break;
          }
        }
      }

      for (var _i = 0; _i < instancesToDestroy.length; _i++) {
        var instanceToDestroy = instancesToDestroy[_i]; //remove all style added from simpleParallax

        instances[instanceToDestroy].unSetStyle();

        if (this.settings.overflow === false) {
          //if overflow option is set to false
          //unwrap the element from .simpleParallax wrapper container
          instances[instanceToDestroy].unWrapElement();
        } //remove the instance to destroy from the instance array


        instances = instances.slice(0, instanceToDestroy).concat(instances.slice(instanceToDestroy + 1, instances.length));
      } //update the instance length var


      instancesLength = instances.length; //if no instances left, remove the raf and resize event = simpleParallax fully destroyed

      if (!instancesLength) {
        //cancel the animation frame
        window.cancelAnimationFrame(frameID); //detach the resize event

        window.removeEventListener('resize', this.handleResize);
      }
    }
  }]);

  return SimpleParallax;
}();



/***/ })
/******/ ]);
});