'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _Step = require('./Step');

var _Step2 = _interopRequireDefault(_Step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    width: '100%',
    minHeight: 0,
    padding: 0
  },
  stepper: {
    display: 'table',
    width: '100%',
    margin: '0 auto'
  }
};

function Stepper(_ref) {
  var activeStep = _ref.activeStep;
  var steps = _ref.steps;
  var activeColor = _ref.activeColor;
  var completeColor = _ref.completeColor;
  var defaultColor = _ref.defaultColor;
  var circleFontColor = _ref.circleFontColor;
  var activeTitleColor = _ref.activeTitleColor;
  var completeTitleColor = _ref.completeTitleColor;
  var defaultTitleColor = _ref.defaultTitleColor;
  var size = _ref.size;
  var circleFontSize = _ref.circleFontSize;
  var titleFontSize = _ref.titleFontSize;
  var circleTop = _ref.circleTop;
  var titleTop = _ref.titleTop;
  var completeOpacity = _ref.completeOpacity;
  var activeOpacity = _ref.activeOpacity;
  var defaultOpcaity = _ref.defaultOpcaity;
  var completeTitleOpacity = _ref.completeTitleOpacity;
  var activeTitleOpacity = _ref.activeTitleOpacity;
  var defaultTitleOpacity = _ref.defaultTitleOpacity;

  return _react2.default.createElement(
    'div',
    { style: styles.root },
    _react2.default.createElement(
      'div',
      { style: styles.stepper },
      steps.map(function (step, index) {
        return _react2.default.createElement(_Step2.default, {
          key: index,
          width: 100 / steps.length,
          title: step.title,
          href: step.href,
          onClick: step.onClick,
          active: index === activeStep,
          completed: index < activeStep,
          first: index === 0,
          isLast: index === steps.length - 1,
          index: index,
          activeColor: activeColor,
          completeColor: completeColor,
          defaultColor: defaultColor,
          circleFontColor: circleFontColor,
          activeTitleColor: activeTitleColor,
          completeTitleColor: completeTitleColor,
          defaultTitleColor: defaultTitleColor,
          size: size,
          circleFontSize: circleFontSize,
          titleFontSize: titleFontSize,
          circleTop: circleTop,
          titleTop: titleTop,
          defaultOpcaity: defaultOpcaity,
          completeOpacity: completeOpacity,
          activeOpacity: activeOpacity,
          defaultTitleOpacity: defaultTitleOpacity,
          completeTitleOpacity: completeTitleOpacity,
          activeTitleOpacity: activeTitleOpacity

        });
      })
    )
  );
}

Stepper.defaultProps = {
  activeStep: 0
};

Stepper.propTypes = {
  activeStep: _propTypes.PropTypes.number,
  steps: _propTypes.PropTypes.array,
  activeColor: _propTypes.PropTypes.string,
  completeColor: _propTypes.PropTypes.string,
  defaultColor: _propTypes.PropTypes.string,
  activeTitleColor: _propTypes.PropTypes.string,
  completeTitleColor: _propTypes.PropTypes.string,
  defaultTitleColor: _propTypes.PropTypes.string,
  circleFontColor: _propTypes.PropTypes.string,
  size: _propTypes.PropTypes.number,
  circleFontSize: _propTypes.PropTypes.number,
  titleFontSize: _propTypes.PropTypes.number,
  circleTop: _propTypes.PropTypes.number,
  titleTop: _propTypes.PropTypes.number
};

exports.default = Stepper;