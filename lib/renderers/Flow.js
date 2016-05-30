'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Renderer2 = require('../Renderer');

var _Renderer3 = _interopRequireDefault(_Renderer2);

var _indent = require('../helpers/indent');

var _indent2 = _interopRequireDefault(_indent);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlowRenderer = function (_Renderer) {
  _inherits(FlowRenderer, _Renderer);

  function FlowRenderer() {
    _classCallCheck(this, FlowRenderer);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FlowRenderer).apply(this, arguments));
  }

  return FlowRenderer;
}(_Renderer3.default);

exports.default = FlowRenderer;