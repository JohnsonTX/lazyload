"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Mytool = require("../Mytool");

var _reactDom = require("react-dom");

var _reactLazyLoad = require("react-lazy-load");

var _reactLazyLoad2 = _interopRequireDefault(_reactLazyLoad);

require("../styles/travel.css");

var _jquery = require("../jquery.lazyload");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by johnsontx on 2017/11/10.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
/**
 * Created by johnsontx on 2017/11/9.
 */


var Placehold = function (_Component) {
  _inherits(Placehold, _Component);

  function Placehold() {
    _classCallCheck(this, Placehold);

    return _possibleConstructorReturn(this, (Placehold.__proto__ || Object.getPrototypeOf(Placehold)).apply(this, arguments));
  }

  _createClass(Placehold, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement("img", { src: "../images/hq.jpg", alt: "" }),
        _react2.default.createElement("img", { src: "../images/yeoman.png", alt: "" })
      );
    }
  }]);

  return Placehold;
}(_react.Component);

var Footer = function (_Component2) {
  _inherits(Footer, _Component2);

  function Footer(props) {
    _classCallCheck(this, Footer);

    var _this2 = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

    _this2.state = { userdata: [] };
    _this2.addData = function () {
      var url = '../userData.json',
          parms = '';
      _Mytool.Tools.get(url, parms, function (data) {
        var diff = JSON.stringify(_this2.state.userdata) == JSON.stringify(data.userlist);
        if (diff && (typeof data === "undefined" ? "undefined" : _typeof(data)) == "object") {
          _this2.setState({
            userdata: data.userlist.concat(_this2.state.userdata)
          });
        }
      });
    };
    return _this2;
  }

  _createClass(Footer, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this3 = this;

      var url = '../userData.json',
          parms = '';
      _Mytool.Tools.get(url, parms, function (data) {
        if ((typeof data === "undefined" ? "undefined" : _typeof(data)) == "object") {
          _this3.setState({
            userdata: data.userlist
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var cicle = { color: "red", fontSize: "1rem", background: "blue" },
          dconten = { width: 736, margin: "0 auto" };
      var loading = "../images/yeoman.png",
          n = 1;
      var imgsr = function imgsr(unm) {
        n++;return "../images/test/" + unm + ".jpg";
      };
      var im = function im(num) {
        n++;return _react2.default.createElement("img", { className: "lazy", src: "../images/yeoman.png", data: imgsr(num), alt: "" });
      };
      var test = function test() {
        var arr = [];
        for (var i = 0; i < 10; i++) {
          arr.push(im(i));
        }
        return _react2.default.createElement(
          "div",
          null,
          arr.map(function (t, i) {
            return _react2.default.createElement("img", { src: loading, "data-original": t.props.data, key: i, alt: "" });
          })
        );
      };
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _reactLazyLoad2.default,
          { height: 200, placeholder: _react2.default.createElement(Placehold, null) },
          _react2.default.createElement(
            "ul",
            { style: cicle, onClick: this.addData },
            this.state.userdata.map(function (t, i) {
              return _react2.default.createElement(
                "li",
                { key: i },
                _react2.default.createElement(
                  "p",
                  null,
                  t.userid
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  t.name
                )
              );
            })
          )
        ),
        test(),
        _react2.default.createElement(
          "footer",
          { classID: "footer" },
          _react2.default.createElement(
            "hgroup",
            null,
            _react2.default.createElement("div", { className: "filler" }),
            _react2.default.createElement("div", { className: "filler" }),
            _react2.default.createElement(
              "article",
              { className: "basefix" },
              _react2.default.createElement(
                "figure",
                null,
                _react2.default.createElement(
                  "figcaption",
                  null,
                  _react2.default.createElement("mark", { className: "icon foot-1" }),
                  "\u5173\u4E8E\u4E1C\u822A"
                ),
                _react2.default.createElement(
                  "ul",
                  null,
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "http://www.ceair.com/about/zjdh/index.html", target: "_blank" },
                      "\u8D70\u8FDB\u4E1C\u822A"
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "http://www.ceair.com/about/dhxw/index.html", target: "_blank" },
                      "\u4E1C\u822A\u8D44\u8BAF"
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "http://zhaopin.ceair.com/", target: "_blank" },
                      "\u4E1C\u822A\u62DB\u8058"
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "http://www.ceair.com/about/thlm/index.html", target: "_blank" },
                      "\u5929\u5408\u8054\u76DF"
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "http://www.ceair.com/about/flys/index.html", target: "_blank" },
                      "\u6CD5\u5F8B\u548C\u9690\u79C1\u6761\u6B3E"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "figure",
                null,
                _react2.default.createElement(
                  "figcaption",
                  null,
                  _react2.default.createElement("mark", { className: "icon foot-2" }),
                  "\u4E92\u52A8\u652F\u6301"
                ),
                _react2.default.createElement(
                  "ul",
                  null,
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "http://www.ceair.com/about/lxwm/index.html", target: "_blank" },
                      "\u8054\u7CFB\u6211\u4EEC"
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "http://www.ceair.com/guide2/hycjwtjd/index.html", target: "_blank" },
                      "\u5E38\u89C1\u95EE\u9898"
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "http://www.ceair.com/complaint/index.html", target: "_blank" },
                      "\u610F\u89C1\u5EFA\u8BAE"
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "http://www.ceair.com/sitemap.html", target: "_blank" },
                      "\u7F51\u7AD9\u5BFC\u822A"
                    )
                  )
                ),
                test()
              ),
              _react2.default.createElement(
                "figure",
                null,
                _react2.default.createElement(
                  "figcaption",
                  null,
                  _react2.default.createElement("mark", { className: "icon foot-3" }),
                  "\u53CB\u60C5\u94FE\u63A5"
                ),
                _react2.default.createElement(
                  "ul",
                  null,
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "http://www.ceairgroup.com", target: "_blank" },
                      "\u4E2D\u56FD\u4E1C\u65B9\u822A\u7A7A\u96C6\u56E2\u516C\u53F8"
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "http://www.shanghai-air.com", target: "_blank" },
                      "\u4E0A\u6D77\u822A\u7A7A\u516C\u53F8"
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "http://www.flycua.com", target: "_blank" },
                      "\u4E2D\u56FD\u8054\u822A"
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "http://easternmiles.ceair.com/", target: "_blank" },
                      "\u4E1C\u65B9\u4E07\u91CC\u884C"
                    )
                  )
                ),
                test()
              ),
              _react2.default.createElement(
                "figure",
                null,
                _react2.default.createElement(
                  "figcaption",
                  null,
                  _react2.default.createElement("mark", { className: "icon foot-4" }),
                  "\u5173\u6CE8\u6211\u4EEC"
                ),
                _react2.default.createElement(
                  "div",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "http://e.weibo.com/ceairdotcom", target: "_blank" },
                    _react2.default.createElement("mark", { className: "icon foot-sina", title: "\u4E1C\u822A\u65B0\u6D6A\u5FAE\u535A" })
                  ),
                  _react2.default.createElement(
                    "a",
                    { href: "http://www.ceair.com/talent.html", target: "_blank" },
                    _react2.default.createElement("mark", { className: "icon foot-talent", title: "\u4E1C\u822A\u8FBE\u4EBA\u8BA1\u5212" })
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "span",
              null,
              "\u62C9\u5347\u7A7A\u95F4\u7684\u7A7A\u95F4"
            )
          )
        ),
        _react2.default.createElement("img", { id: "imgD", src: "../images/yeoman.png", "data-src": "../images/hq.jpg", alt: "", ref: "imgData" })
      );
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _jquery2.default)(function () {
        (0, _jquery2.default)("img").lazyload({
          placeholder: "../images/yeoman.png",
          effect: "fadeIn"
        });
      });
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;

//# sourceMappingURL=footer-compiled.js.map