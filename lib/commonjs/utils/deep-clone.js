"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deepClone;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function deepClone(children, func) {
  return _react.default.Children.map(children, child => {
    if (! /*#__PURE__*/_react.default.isValidElement(child)) return child;
    const props = {
      ...child.props
    };
    if (typeof child.props.onPress === 'function') {
      props.onPress = () => {
        func();
        return child.props.onPress();
      };
    }
    if (typeof child.props.children === 'function') {
      return child;
    }
    return /*#__PURE__*/_react.default.cloneElement(child, props, deepClone(child.props.children, func));
  });
}
//# sourceMappingURL=deep-clone.js.map