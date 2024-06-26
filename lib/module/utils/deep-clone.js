import React from 'react';
export default function deepClone(children, func) {
  return React.Children.map(children, child => {
    if (! /*#__PURE__*/React.isValidElement(child)) return child;
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
    return /*#__PURE__*/React.cloneElement(child, props, deepClone(child.props.children, func));
  });
}
//# sourceMappingURL=deep-clone.js.map