"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _header = require("../components/header");

var _header2 = _interopRequireDefault(_header);

var _footer = require("../components/footer");

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var yeomanImage = require('../images/hotCity.png');
var Main = function Main(mysetting) {
  var setting = {
    id: '',
    url: "",
    data: '',
    component: _react2.default.createElement("div", null),
    success: function success(state) {
      return state;
    },
    error: function error(state) {
      return state;
    }
  };
  var sendSet = Object.assign({}, setting, mysetting);

  var Index = function (_Component) {
    _inherits(Index, _Component);

    function Index(props) {
      _classCallCheck(this, Index);

      var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

      _this.initState = function (props, states) {
        var state = props.state,
            localtion = props.localtion;
        var pathname = localtion.pathname,
            search = localtion.search;

        return { setting: sendSet };
      };
      console.log(_this);
      return _this;
    }

    _createClass(Index, [{
      key: "render",
      value: function render() {
        return _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement("img", { src: yeomanImage, alt: "" }),
          _react2.default.createElement(_header2.default, null),
          _react2.default.createElement(
            "div",
            null,
            "hello;johnson"
          ),
          _react2.default.createElement(sendSet.component, null),
          _react2.default.createElement(_footer2.default, null)
        );
      }
    }]);

    return Index;
  }(_react.Component);

  Index.defultProps = { mysetting: mysetting };
  return Index;
};

exports.default = Main;

//# sourceMappingURL=Main-compiled.js.map