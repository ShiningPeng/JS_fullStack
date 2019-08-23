"use strict";

var _dec, _class, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

//装饰 方法
// const _ = require('lodash');
// import { debounce } from 'lodash';
function debounce(fn, wait) {
  var timeout, result;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      result = fn();
    }, wait);
    return result;
  };
}

function decDebounce(wait) {
  return function (target, name, descriptor) {
    console.log(target, name, descriptor);
    var originalMethod = descriptor.initializer && descriptor.initializer.call(this);
    return {
      enumerable: true,
      configurable: true,
      // writable:true,
      get: function get() {
        //属性拦截,劫持了get，在这里做增强
        return debounce(originalMethod, wait);
      }
    };
  };
}

var Btn = (_dec = decDebounce(2000), (_class = (_temp =
/*#__PURE__*/
function () {
  function Btn() {
    _classCallCheck(this, Btn);

    _initializerDefineProperty(this, "handBuy", _descriptor, this);
  }

  _createClass(Btn, [{
    key: "bindEvent",
    value: function bindEvent() {
      document.getElementById('btn').addEventListener('click', this.handBuy);
    }
  }]);

  return Btn;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "handBuy", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return function () {
      console.log('向后端发起购买请求');
    };
  }
})), _class));
var b = new Btn();
b.bindEvent();