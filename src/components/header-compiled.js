"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by johnsontx on 2017/11/9.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "header",
          { className: "header" },
          _react2.default.createElement(
            "figure",
            { className: "dropdown" },
            _react2.default.createElement(
              "figcaption",
              null,
              "\u9500\u552E\u670D\u52A1\u70ED\u7EBF:",
              _react2.default.createElement(
                "span",
                null,
                "95530-1-6"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "body workTime" },
              "\u670D\u52A1\u65F6\u95F4\uFF1A\u6BCF\u5468\u4E00\u81F3\u5468\u65E5",
              _react2.default.createElement(
                "span",
                { className: "w_time" },
                "8:00-24:00"
              )
            )
          ),
          _react2.default.createElement(
            "figure",
            { className: "link" },
            _react2.default.createElement(
              "a",
              { href: "http://eb.ceair.com/FeedBack/pc/index.html", target: "_blank" },
              "\u7528\u6237\u4F53\u9A8C\u53CD\u9988"
            )
          ),
          _react2.default.createElement(
            "figure",
            { className: "link" },
            _react2.default.createElement(
              "a",
              { href: "http://onlinecsr.ceair.com:8000/robot-dh/", target: "_blank" },
              "\u5728\u7EBF\u5BA2\u670D"
            )
          ),
          _react2.default.createElement(
            "figure",
            { className: "link" },
            _react2.default.createElement(
              "a",
              { href: "http://www.ceair.com/a/mobile_e.html", target: "_blank" },
              "\u79FB\u52A8\u7AEF"
            )
          ),
          _react2.default.createElement(
            "figure",
            { className: "dropdown" },
            _react2.default.createElement(
              "figcaption",
              null,
              "\u5FAE\u4FE1"
            ),
            _react2.default.createElement("div", { className: "body image" })
          ),
          _react2.default.createElement(
            "figure",
            { className: "link" },
            _react2.default.createElement(
              "a",
              { href: "http://weibo.com/ceaircom", target: "_blank" },
              "\u5FAE\u535A"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "body text" },
            _react2.default.createElement(
              "span",
              { className: "clearfix links" },
              _react2.default.createElement(
                "a",
                { target: "_blank", href: "http://www.ceairgroup.com" },
                "\u4E2D\u56FD\u4E1C\u65B9\u822A\u7A7A\u96C6\u56E2\u516C\u53F8"
              ),
              _react2.default.createElement(
                "a",
                { target: "_blank", href: "http://www.shanghai-air.com" },
                "\u4E0A\u6D77\u822A\u7A7A\u516C\u53F8"
              ),
              _react2.default.createElement(
                "a",
                { target: "_blank", href: "http://shopping.ceair.com/" },
                "\u4E1C\u65B9\u4E07\u91CC\u884C\u79EF\u5206\u5546\u57CE"
              ),
              _react2.default.createElement(
                "a",
                { target: "_blank", href: "http://easternmiles.ceair.com/" },
                "\u4E1C\u65B9\u4E07\u91CC\u884C"
              ),
              _react2.default.createElement(
                "a",
                { target: "_blank", href: "http://www.flycua.com/ " },
                "\u4E2D\u56FD\u8054\u822A"
              ),
              _react2.default.createElement(
                "a",
                { target: "_blank", href: "http://www.skyteam.com/" },
                "\u5929\u5408\u8054\u76DF"
              ),
              _react2.default.createElement(
                "a",
                { target: "_blank", href: "http://www.c3q.com.cn" },
                "\u4E1C\u822A\u4E91\u5357"
              ),
              _react2.default.createElement(
                "a",
                { target: "_blank", href: "http://www.ceairdutyfree.com/" },
                "\u673A\u4E0A\u514D\u7A0E\u54C1\u9884\u8BA2"
              ),
              _react2.default.createElement(
                "a",
                { target: "_blank", href: "http://kas.ceair.com/" },
                "\u96C6\u56E2\u5BA2\u6237"
              ),
              _react2.default.createElement(
                "a",
                { target: "_blank", href: "http://ceagent.ceair.com/" },
                "\u4EE3\u7406\u4EBA\u7CFB\u7EDF"
              ),
              _react2.default.createElement(
                "a",
                { target: "_blank", href: "http://www.greaterchinaconnection.com/" },
                "\u5927\u4E2D\u534E\u643A\u624B\u98DE"
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

//# sourceMappingURL=header-compiled.js.map