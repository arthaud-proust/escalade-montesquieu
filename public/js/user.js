/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/user.js":
/*!******************************!*\
  !*** ./resources/js/user.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var cotes = ['Non renseigné', '4a', '4b', '4c', '5a', '5b', '5c', '6a', '6b', '6c', '7a', '7b', '7c', '8a', '8b', '8c'];
var roles = [['Grimpeur', 'climber'], ['Modérateur', 'modo'], ['Admin', 'admin']];

function getShoesOption(shoe) {
  var content = "<option ".concat(shoe == "no-need" ? 'selected' : '', " value=\"no-need\">J'ai mes chaussures</option>");

  for (var i = 36; i < 51; i++) {
    content += "<option ".concat(shoe == i ? 'selected' : '', " value=\"").concat(i, "\">").concat(i, "</option>");
  }

  return content;
}

$(function () {
  try {
    document.getElementById('img').onchange = function (evt) {
      var tgt = evt.target || window.event.srcElement,
          files = tgt.files; // FileReader support

      if (FileReader && files && files.length) {
        var fr = new FileReader();

        fr.onload = function () {
          document.getElementById("preview").src = fr.result;
        };

        fr.readAsDataURL(files[0]);
      } // Not supported
      else {// fallback -- perhaps submit the input to an iframe and temporarily store
          // them on the server until the user's session ends.
        }
    };
  } catch (e) {}

  cotes.map(function (cote) {
    $('#max_voie').append("<option ".concat($('#max_voie').attr('data-value') == cote ? 'selected' : '', ">").concat(cote, "</option>"));
    $('#max_bloc').append("<option ".concat($('#max_bloc').attr('data-value') == cote ? 'selected' : '', ">").concat(cote, "</option>"));
  });
  $('.Field-toggleVisibility').click(function () {
    var input = $(this).prev();

    if (input.attr('type') == 'password') {
      $(this).attr('src', '/assets/svg/eye.svg');
      input.attr('type', 'text');
    } else {
      $(this).attr('src', '/assets/svg/eye-off.svg');
      input.attr('type', 'password');
    }
  });
  $('.Field.disabled input').attr('tabindex', -1);
  $('.Field.disabled input').prop("disabled", true); //Disable

  $('#shoes').html(getShoesOption($('#shoes').attr('data-value')));
  $('#role').html(roles[$('#role').attr('data-level') - 1][0]);
  $('#role').attr('class', 'IdentityBloc-role ' + roles[$('#role').attr('data-level') - 1][1]);
});

/***/ }),

/***/ 1:
/*!************************************!*\
  !*** multi ./resources/js/user.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\Web\As Escalade montesquieu\master\resources\js\user.js */"./resources/js/user.js");


/***/ })

/******/ });