import {
  require_react_dom
} from "./chunk-QPG7G3M7.js";
import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-UTEJFLXC.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React16 = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React16.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix2;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix2 === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix2 = match && match[1] || "";
              }
            }
            return "\n" + prefix2 + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        var didWarnAboutKeySpread = {};
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            {
              if (hasOwnProperty.call(props, "key")) {
                var componentName = getComponentNameFromType(type);
                var keys = Object.keys(props).filter(function(k) {
                  return k !== "key";
                });
                var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
                if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                  var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                  error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                  didWarnAboutKeySpread[componentName + beforeExample] = true;
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx12 = jsxWithValidationDynamic;
        var jsxs4 = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx12;
        exports.jsxs = jsxs4;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React16 = require_react();
        var ReactSharedInternals = React16.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useState4 = React16.useState, useEffect6 = React16.useEffect, useLayoutEffect5 = React16.useLayoutEffect, useDebugValue = React16.useDebugValue;
        var didWarnOld18Alpha = false;
        var didWarnUncachedGetSnapshot = false;
        function useSyncExternalStore2(subscribe2, getSnapshot, getServerSnapshot) {
          {
            if (!didWarnOld18Alpha) {
              if (React16.startTransition !== void 0) {
                didWarnOld18Alpha = true;
                error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
              }
            }
          }
          var value = getSnapshot();
          {
            if (!didWarnUncachedGetSnapshot) {
              var cachedValue = getSnapshot();
              if (!objectIs(value, cachedValue)) {
                error("The result of getSnapshot should be cached to avoid an infinite loop");
                didWarnUncachedGetSnapshot = true;
              }
            }
          }
          var _useState = useState4({
            inst: {
              value,
              getSnapshot
            }
          }), inst = _useState[0].inst, forceUpdate = _useState[1];
          useLayoutEffect5(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
          }, [subscribe2, value, getSnapshot]);
          useEffect6(function() {
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
            var handleStoreChange = function() {
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
            };
            return subscribe2(handleStoreChange);
          }, [subscribe2]);
          useDebugValue(value);
          return value;
        }
        function checkIfSnapshotChanged(inst) {
          var latestGetSnapshot = inst.getSnapshot;
          var prevValue = inst.value;
          try {
            var nextValue = latestGetSnapshot();
            return !objectIs(prevValue, nextValue);
          } catch (error2) {
            return true;
          }
        }
        function useSyncExternalStore$1(subscribe2, getSnapshot, getServerSnapshot) {
          return getSnapshot();
        }
        var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
        var isServerEnvironment = !canUseDOM;
        var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore2;
        var useSyncExternalStore$2 = React16.useSyncExternalStore !== void 0 ? React16.useSyncExternalStore : shim;
        exports.useSyncExternalStore = useSyncExternalStore$2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
var require_with_selector_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React16 = require_react();
        var shim = require_shim();
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useSyncExternalStore2 = shim.useSyncExternalStore;
        var useRef3 = React16.useRef, useEffect6 = React16.useEffect, useMemo3 = React16.useMemo, useDebugValue = React16.useDebugValue;
        function useSyncExternalStoreWithSelector2(subscribe2, getSnapshot, getServerSnapshot, selector, isEqual) {
          var instRef = useRef3(null);
          var inst;
          if (instRef.current === null) {
            inst = {
              hasValue: false,
              value: null
            };
            instRef.current = inst;
          } else {
            inst = instRef.current;
          }
          var _useMemo = useMemo3(function() {
            var hasMemo = false;
            var memoizedSnapshot;
            var memoizedSelection;
            var memoizedSelector = function(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                var _nextSelection = selector(nextSnapshot);
                if (isEqual !== void 0) {
                  if (inst.hasValue) {
                    var currentSelection = inst.value;
                    if (isEqual(currentSelection, _nextSelection)) {
                      memoizedSelection = currentSelection;
                      return currentSelection;
                    }
                  }
                }
                memoizedSelection = _nextSelection;
                return _nextSelection;
              }
              var prevSnapshot = memoizedSnapshot;
              var prevSelection = memoizedSelection;
              if (objectIs(prevSnapshot, nextSnapshot)) {
                return prevSelection;
              }
              var nextSelection = selector(nextSnapshot);
              if (isEqual !== void 0 && isEqual(prevSelection, nextSelection)) {
                return prevSelection;
              }
              memoizedSnapshot = nextSnapshot;
              memoizedSelection = nextSelection;
              return nextSelection;
            };
            var maybeGetServerSnapshot = getServerSnapshot === void 0 ? null : getServerSnapshot;
            var getSnapshotWithSelector = function() {
              return memoizedSelector(getSnapshot());
            };
            var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? void 0 : function() {
              return memoizedSelector(maybeGetServerSnapshot());
            };
            return [getSnapshotWithSelector, getServerSnapshotWithSelector];
          }, [getSnapshot, getServerSnapshot, selector, isEqual]), getSelection = _useMemo[0], getServerSelection = _useMemo[1];
          var value = useSyncExternalStore2(subscribe2, getSelection, getServerSelection);
          useEffect6(function() {
            inst.hasValue = true;
            inst.value = value;
          }, [value]);
          useDebugValue(value);
          return value;
        }
        exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = __commonJS({
  "node_modules/use-sync-external-store/shim/with-selector.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_with_selector_development();
    }
  }
});

// node_modules/@tanstack/history/dist/esm/index.js
var pushStateEvent = "pushstate";
var popStateEvent = "popstate";
var beforeUnloadEvent = "beforeunload";
var beforeUnloadListener = (event) => {
  event.preventDefault();
  return event.returnValue = "";
};
var stopBlocking = () => {
  removeEventListener(beforeUnloadEvent, beforeUnloadListener, {
    capture: true
  });
};
function createHistory(opts) {
  let location = opts.getLocation();
  const subscribers = /* @__PURE__ */ new Set();
  let blockers = [];
  const notify = () => {
    location = opts.getLocation();
    subscribers.forEach((subscriber) => subscriber());
  };
  const tryNavigation = async (task, navigateOpts) => {
    var _a;
    const ignoreBlocker = (navigateOpts == null ? void 0 : navigateOpts.ignoreBlocker) ?? false;
    if (!ignoreBlocker && typeof document !== "undefined" && blockers.length) {
      for (const blocker of blockers) {
        const allowed = await blocker();
        if (!allowed) {
          (_a = opts.onBlocked) == null ? void 0 : _a.call(opts, notify);
          return;
        }
      }
    }
    task();
  };
  return {
    get location() {
      return location;
    },
    get length() {
      return opts.getLength();
    },
    subscribers,
    subscribe: (cb) => {
      subscribers.add(cb);
      return () => {
        subscribers.delete(cb);
      };
    },
    push: (path, state, navigateOpts) => {
      state = assignKey(state);
      tryNavigation(() => {
        opts.pushState(path, state);
        notify();
      }, navigateOpts);
    },
    replace: (path, state, navigateOpts) => {
      state = assignKey(state);
      tryNavigation(() => {
        opts.replaceState(path, state);
        notify();
      }, navigateOpts);
    },
    go: (index, navigateOpts) => {
      tryNavigation(() => {
        opts.go(index);
        notify();
      }, navigateOpts);
    },
    back: (navigateOpts) => {
      tryNavigation(() => {
        opts.back();
        notify();
      }, navigateOpts);
    },
    forward: (navigateOpts) => {
      tryNavigation(() => {
        opts.forward();
        notify();
      }, navigateOpts);
    },
    createHref: (str) => opts.createHref(str),
    block: (blocker) => {
      blockers.push(blocker);
      if (blockers.length === 1) {
        addEventListener(beforeUnloadEvent, beforeUnloadListener, {
          capture: true
        });
      }
      return () => {
        blockers = blockers.filter((b) => b !== blocker);
        if (!blockers.length) {
          stopBlocking();
        }
      };
    },
    flush: () => {
      var _a;
      return (_a = opts.flush) == null ? void 0 : _a.call(opts);
    },
    destroy: () => {
      var _a;
      return (_a = opts.destroy) == null ? void 0 : _a.call(opts);
    },
    notify
  };
}
function assignKey(state) {
  if (!state) {
    state = {};
  }
  return {
    ...state,
    key: createRandomKey()
  };
}
function createBrowserHistory(opts) {
  const win = (opts == null ? void 0 : opts.window) ?? (typeof document !== "undefined" ? window : void 0);
  const originalPushState = win.history.pushState;
  const originalReplaceState = win.history.replaceState;
  const createHref = (opts == null ? void 0 : opts.createHref) ?? ((path) => path);
  const parseLocation = (opts == null ? void 0 : opts.parseLocation) ?? (() => parseHref(
    `${win.location.pathname}${win.location.search}${win.location.hash}`,
    win.history.state
  ));
  let currentLocation = parseLocation();
  let rollbackLocation;
  const getLocation = () => currentLocation;
  let next;
  let scheduled;
  const flush = () => {
    if (!next) {
      return;
    }
    history._ignoreSubscribers = true;
    (next.isPush ? win.history.pushState : win.history.replaceState)(
      next.state,
      "",
      next.href
    );
    history._ignoreSubscribers = false;
    next = void 0;
    scheduled = void 0;
    rollbackLocation = void 0;
  };
  const queueHistoryAction = (type, destHref, state) => {
    const href = createHref(destHref);
    if (!scheduled) {
      rollbackLocation = currentLocation;
    }
    currentLocation = parseHref(destHref, state);
    next = {
      href,
      state,
      isPush: (next == null ? void 0 : next.isPush) || type === "push"
    };
    if (!scheduled) {
      scheduled = Promise.resolve().then(() => flush());
    }
  };
  const onPushPop = () => {
    currentLocation = parseLocation();
    history.notify();
  };
  const history = createHistory({
    getLocation,
    getLength: () => win.history.length,
    pushState: (href, state) => queueHistoryAction("push", href, state),
    replaceState: (href, state) => queueHistoryAction("replace", href, state),
    back: () => win.history.back(),
    forward: () => win.history.forward(),
    go: (n) => win.history.go(n),
    createHref: (href) => createHref(href),
    flush,
    destroy: () => {
      win.history.pushState = originalPushState;
      win.history.replaceState = originalReplaceState;
      win.removeEventListener(pushStateEvent, onPushPop);
      win.removeEventListener(popStateEvent, onPushPop);
    },
    onBlocked: (onUpdate) => {
      if (rollbackLocation && currentLocation !== rollbackLocation) {
        currentLocation = rollbackLocation;
        onUpdate();
      }
    }
  });
  win.addEventListener(pushStateEvent, onPushPop);
  win.addEventListener(popStateEvent, onPushPop);
  win.history.pushState = function(...args) {
    const res = originalPushState.apply(win.history, args);
    if (!history._ignoreSubscribers) onPushPop();
    return res;
  };
  win.history.replaceState = function(...args) {
    const res = originalReplaceState.apply(win.history, args);
    if (!history._ignoreSubscribers) onPushPop();
    return res;
  };
  return history;
}
function createHashHistory(opts) {
  const win = (opts == null ? void 0 : opts.window) ?? (typeof document !== "undefined" ? window : void 0);
  return createBrowserHistory({
    window: win,
    parseLocation: () => {
      const hashHref = win.location.hash.split("#").slice(1).join("#") ?? "/";
      return parseHref(hashHref, win.history.state);
    },
    createHref: (href) => `${win.location.pathname}${win.location.search}#${href}`
  });
}
function createMemoryHistory(opts = {
  initialEntries: ["/"]
}) {
  const entries = opts.initialEntries;
  let index = opts.initialIndex ?? entries.length - 1;
  const states = entries.map(() => ({}));
  const getLocation = () => parseHref(entries[index], states[index]);
  return createHistory({
    getLocation,
    getLength: () => entries.length,
    pushState: (path, state) => {
      if (index < entries.length - 1) {
        entries.splice(index + 1);
        states.splice(index + 1);
      }
      states.push(state);
      entries.push(path);
      index = Math.max(entries.length - 1, 0);
    },
    replaceState: (path, state) => {
      states[index] = state;
      entries[index] = path;
    },
    back: () => {
      index = Math.max(index - 1, 0);
    },
    forward: () => {
      index = Math.min(index + 1, entries.length - 1);
    },
    go: (n) => {
      index = Math.min(Math.max(index + n, 0), entries.length - 1);
    },
    createHref: (path) => path
  });
}
function parseHref(href, state) {
  const hashIndex = href.indexOf("#");
  const searchIndex = href.indexOf("?");
  return {
    href,
    pathname: href.substring(
      0,
      hashIndex > 0 ? searchIndex > 0 ? Math.min(hashIndex, searchIndex) : hashIndex : searchIndex > 0 ? searchIndex : href.length
    ),
    hash: hashIndex > -1 ? href.substring(hashIndex) : "",
    search: searchIndex > -1 ? href.slice(searchIndex, hashIndex === -1 ? void 0 : hashIndex) : "",
    state: state || {}
  };
}
function createRandomKey() {
  return (Math.random() + 1).toString(36).substring(7);
}

// node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var isProduction = false;
var prefix = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  var provided = typeof message === "function" ? message() : message;
  var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
  throw new Error(value);
}

// node_modules/tiny-warning/dist/tiny-warning.esm.js
var isProduction2 = false;
function warning(condition, message) {
  if (!isProduction2) {
    if (condition) {
      return;
    }
    var text = "Warning: " + message;
    if (typeof console !== "undefined") {
      console.warn(text);
    }
    try {
      throw Error(text);
    } catch (x) {
    }
  }
}
var tiny_warning_esm_default = warning;

// node_modules/@tanstack/react-router/dist/esm/awaited.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var React5 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-router/dist/esm/useRouter.js
var React2 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-router/dist/esm/routerContext.js
var React = __toESM(require_react(), 1);
var routerContext = React.createContext(null);
function getRouterContext() {
  if (typeof document === "undefined") {
    return routerContext;
  }
  if (window.__TSR_ROUTER_CONTEXT__) {
    return window.__TSR_ROUTER_CONTEXT__;
  }
  window.__TSR_ROUTER_CONTEXT__ = routerContext;
  return routerContext;
}

// node_modules/@tanstack/react-router/dist/esm/useRouter.js
function useRouter(opts) {
  const value = React2.useContext(getRouterContext());
  tiny_warning_esm_default(
    !(((opts == null ? void 0 : opts.warn) ?? true) && !value),
    "useRouter must be used inside a <RouterProvider> component!"
  );
  return value;
}

// node_modules/@tanstack/react-store/dist/esm/index.js
var import_with_selector = __toESM(require_with_selector());

// node_modules/@tanstack/store/dist/esm/index.js
var Store = class {
  constructor(initialState, options) {
    this.listeners = /* @__PURE__ */ new Set();
    this._batching = false;
    this._flushing = 0;
    this.subscribe = (listener) => {
      var _a, _b;
      this.listeners.add(listener);
      const unsub = (_b = (_a = this.options) == null ? void 0 : _a.onSubscribe) == null ? void 0 : _b.call(_a, listener, this);
      return () => {
        this.listeners.delete(listener);
        unsub == null ? void 0 : unsub();
      };
    };
    this.setState = (updater) => {
      var _a, _b, _c;
      const previous = this.state;
      this.state = ((_a = this.options) == null ? void 0 : _a.updateFn) ? this.options.updateFn(previous)(updater) : updater(previous);
      (_c = (_b = this.options) == null ? void 0 : _b.onUpdate) == null ? void 0 : _c.call(_b);
      this._flush();
    };
    this._flush = () => {
      if (this._batching) return;
      const flushId = ++this._flushing;
      this.listeners.forEach((listener) => {
        if (this._flushing !== flushId) return;
        listener();
      });
    };
    this.batch = (cb) => {
      if (this._batching) return cb();
      this._batching = true;
      cb();
      this._batching = false;
      this._flush();
    };
    this.state = initialState;
    this.options = options;
  }
};

// node_modules/@tanstack/react-store/dist/esm/index.js
function useStore(store, selector = (d) => d) {
  const slice = (0, import_with_selector.useSyncExternalStoreWithSelector)(
    store.subscribe,
    () => store.state,
    () => store.state,
    selector,
    shallow
  );
  return slice;
}
function shallow(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  const keysA = Object.keys(objA);
  if (keysA.length !== Object.keys(objB).length) {
    return false;
  }
  for (let i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
}

// node_modules/@tanstack/react-router/dist/esm/root.js
var rootRouteId = "__root__";

// node_modules/@tanstack/react-router/dist/esm/qss.js
function encode(obj, pfx) {
  let k, i, tmp, str = "";
  for (k in obj) {
    if ((tmp = obj[k]) !== void 0) {
      if (Array.isArray(tmp)) {
        for (i = 0; i < tmp.length; i++) {
          str && (str += "&");
          str += encodeURIComponent(k) + "=" + encodeURIComponent(tmp[i]);
        }
      } else {
        str && (str += "&");
        str += encodeURIComponent(k) + "=" + encodeURIComponent(tmp);
      }
    }
  }
  return (pfx || "") + str;
}
function toValue(mix) {
  if (!mix) return "";
  const str = decodeURIComponent(mix);
  if (str === "false") return false;
  if (str === "true") return true;
  return +str * 0 === 0 && +str + "" === str ? +str : str;
}
function decode(str, pfx) {
  let tmp, k;
  const out = {}, arr = (pfx ? str.substr(pfx.length) : str).split("&");
  while (tmp = arr.shift()) {
    const equalIndex = tmp.indexOf("=");
    if (equalIndex !== -1) {
      k = tmp.slice(0, equalIndex);
      k = decodeURIComponent(k);
      const value = tmp.slice(equalIndex + 1);
      if (out[k] !== void 0) {
        out[k] = [].concat(out[k], toValue(value));
      } else {
        out[k] = toValue(value);
      }
    } else {
      k = tmp;
      k = decodeURIComponent(k);
      out[k] = "";
    }
  }
  return out;
}

// node_modules/@tanstack/react-router/dist/esm/searchParams.js
var defaultParseSearch = parseSearchWith(JSON.parse);
var defaultStringifySearch = stringifySearchWith(
  JSON.stringify,
  JSON.parse
);
function parseSearchWith(parser) {
  return (searchStr) => {
    if (searchStr.substring(0, 1) === "?") {
      searchStr = searchStr.substring(1);
    }
    const query = decode(searchStr);
    for (const key in query) {
      const value = query[key];
      if (typeof value === "string") {
        try {
          query[key] = parser(value);
        } catch (err) {
        }
      }
    }
    return query;
  };
}
function stringifySearchWith(stringify, parser) {
  function stringifyValue(val) {
    if (typeof val === "object" && val !== null) {
      try {
        return stringify(val);
      } catch (err) {
      }
    } else if (typeof val === "string" && typeof parser === "function") {
      try {
        parser(val);
        return stringify(val);
      } catch (err) {
      }
    }
    return val;
  }
  return (search) => {
    search = { ...search };
    Object.keys(search).forEach((key) => {
      const val = search[key];
      if (typeof val === "undefined" || val === void 0) {
        delete search[key];
      } else {
        search[key] = stringifyValue(val);
      }
    });
    const searchStr = encode(search).toString();
    return searchStr ? `?${searchStr}` : "";
  };
}

// node_modules/@tanstack/react-router/dist/esm/utils.js
var React3 = __toESM(require_react(), 1);
function last(arr) {
  return arr[arr.length - 1];
}
function isFunction(d) {
  return typeof d === "function";
}
function functionalUpdate(updater, previous) {
  if (isFunction(updater)) {
    return updater(previous);
  }
  return updater;
}
function pick(parent, keys) {
  return keys.reduce((obj, key) => {
    obj[key] = parent[key];
    return obj;
  }, {});
}
function replaceEqualDeep(prev, _next) {
  if (prev === _next) {
    return prev;
  }
  const next = _next;
  const array = isPlainArray(prev) && isPlainArray(next);
  if (array || isPlainObject(prev) && isPlainObject(next)) {
    const prevItems = array ? prev : Object.keys(prev);
    const prevSize = prevItems.length;
    const nextItems = array ? next : Object.keys(next);
    const nextSize = nextItems.length;
    const copy = array ? [] : {};
    let equalItems = 0;
    for (let i = 0; i < nextSize; i++) {
      const key = array ? i : nextItems[i];
      if ((!array && prevItems.includes(key) || array) && prev[key] === void 0 && next[key] === void 0) {
        copy[key] = void 0;
        equalItems++;
      } else {
        copy[key] = replaceEqualDeep(prev[key], next[key]);
        if (copy[key] === prev[key] && prev[key] !== void 0) {
          equalItems++;
        }
      }
    }
    return prevSize === nextSize && equalItems === prevSize ? prev : copy;
  }
  return next;
}
function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  }
  const ctor = o.constructor;
  if (typeof ctor === "undefined") {
    return true;
  }
  const prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  return true;
}
function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function isPlainArray(value) {
  return Array.isArray(value) && value.length === Object.keys(value).length;
}
function deepEqual(a, b, partial = false) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (isPlainObject(a) && isPlainObject(b)) {
    const aKeys = Object.keys(a).filter((key) => a[key] !== void 0);
    const bKeys = Object.keys(b).filter((key) => b[key] !== void 0);
    if (!partial && aKeys.length !== bKeys.length) {
      return false;
    }
    return !bKeys.some(
      (key) => !(key in a) || !deepEqual(a[key], b[key], partial)
    );
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }
    return !a.some((item, index) => !deepEqual(item, b[index], partial));
  }
  return false;
}
function useStableCallback(fn) {
  const fnRef = React3.useRef(fn);
  fnRef.current = fn;
  const ref = React3.useRef((...args) => fnRef.current(...args));
  return ref.current;
}
function shallow2(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  const keysA = Object.keys(objA);
  if (keysA.length !== Object.keys(objB).length) {
    return false;
  }
  for (const item of keysA) {
    if (!Object.prototype.hasOwnProperty.call(objB, item) || !Object.is(objA[item], objB[item])) {
      return false;
    }
  }
  return true;
}
var useLayoutEffect2 = typeof window !== "undefined" ? React3.useLayoutEffect : React3.useEffect;
function escapeJSON(jsonString) {
  return jsonString.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/"/g, '\\"');
}
function createControlledPromise(onResolve) {
  let resolveLoadPromise;
  let rejectLoadPromise;
  const controlledPromise = new Promise((resolve, reject) => {
    resolveLoadPromise = resolve;
    rejectLoadPromise = reject;
  });
  controlledPromise.status = "pending";
  controlledPromise.resolve = (value) => {
    controlledPromise.status = "resolved";
    controlledPromise.value = value;
    resolveLoadPromise(value);
    onResolve == null ? void 0 : onResolve(value);
  };
  controlledPromise.reject = (e) => {
    controlledPromise.status = "rejected";
    rejectLoadPromise(e);
  };
  return controlledPromise;
}
function usePrevious(value) {
  const ref = React3.useRef({
    value,
    prev: null
  });
  const current = ref.current.value;
  if (value !== current) {
    ref.current = {
      value,
      prev: current
    };
  }
  return ref.current.prev;
}
function useIntersectionObserver(ref, callback, intersectionObserverOptions = {}, options = {}) {
  const isIntersectionObserverAvailable = React3.useRef(
    typeof IntersectionObserver === "function"
  );
  const observerRef = React3.useRef(null);
  React3.useEffect(() => {
    if (!ref.current || !isIntersectionObserverAvailable.current || options.disabled) {
      return;
    }
    observerRef.current = new IntersectionObserver(([entry]) => {
      callback(entry);
    }, intersectionObserverOptions);
    observerRef.current.observe(ref.current);
    return () => {
      var _a;
      (_a = observerRef.current) == null ? void 0 : _a.disconnect();
    };
  }, [callback, intersectionObserverOptions, options.disabled, ref]);
  return observerRef.current;
}
function useForwardedRef(ref) {
  const innerRef = React3.useRef(null);
  React3.useEffect(() => {
    if (!ref) return;
    if (typeof ref === "function") {
      ref(innerRef.current);
    } else {
      ref.current = innerRef.current;
    }
  });
  return innerRef;
}

// node_modules/@tanstack/react-router/dist/esm/path.js
function joinPaths(paths) {
  return cleanPath(
    paths.filter((val) => {
      return val !== void 0;
    }).join("/")
  );
}
function cleanPath(path) {
  return path.replace(/\/{2,}/g, "/");
}
function trimPathLeft(path) {
  return path === "/" ? path : path.replace(/^\/{1,}/, "");
}
function trimPathRight(path) {
  return path === "/" ? path : path.replace(/\/{1,}$/, "");
}
function trimPath(path) {
  return trimPathRight(trimPathLeft(path));
}
function removeTrailingSlash(value, basepath) {
  if (value.endsWith("/") && value !== "/" && value !== `${basepath}/`) {
    return value.slice(0, -1);
  }
  return value;
}
function exactPathTest(pathName1, pathName2, basepath) {
  return removeTrailingSlash(pathName1, basepath) === removeTrailingSlash(pathName2, basepath);
}
function resolvePath({
  basepath,
  base,
  to,
  trailingSlash = "never"
}) {
  var _a, _b;
  base = removeBasepath(basepath, base);
  to = removeBasepath(basepath, to);
  let baseSegments = parsePathname(base);
  const toSegments = parsePathname(to);
  if (baseSegments.length > 1 && ((_a = last(baseSegments)) == null ? void 0 : _a.value) === "/") {
    baseSegments.pop();
  }
  toSegments.forEach((toSegment, index) => {
    if (toSegment.value === "/") {
      if (!index) {
        baseSegments = [toSegment];
      } else if (index === toSegments.length - 1) {
        baseSegments.push(toSegment);
      } else ;
    } else if (toSegment.value === "..") {
      baseSegments.pop();
    } else if (toSegment.value === ".") ;
    else {
      baseSegments.push(toSegment);
    }
  });
  if (baseSegments.length > 1) {
    if (((_b = last(baseSegments)) == null ? void 0 : _b.value) === "/") {
      if (trailingSlash === "never") {
        baseSegments.pop();
      }
    } else if (trailingSlash === "always") {
      baseSegments.push({ type: "pathname", value: "/" });
    }
  }
  const joined = joinPaths([basepath, ...baseSegments.map((d) => d.value)]);
  return cleanPath(joined);
}
function parsePathname(pathname) {
  if (!pathname) {
    return [];
  }
  pathname = cleanPath(pathname);
  const segments = [];
  if (pathname.slice(0, 1) === "/") {
    pathname = pathname.substring(1);
    segments.push({
      type: "pathname",
      value: "/"
    });
  }
  if (!pathname) {
    return segments;
  }
  const split = pathname.split("/").filter(Boolean);
  segments.push(
    ...split.map((part) => {
      if (part === "$" || part === "*") {
        return {
          type: "wildcard",
          value: part
        };
      }
      if (part.charAt(0) === "$") {
        return {
          type: "param",
          value: part
        };
      }
      return {
        type: "pathname",
        value: decodeURI(part)
      };
    })
  );
  if (pathname.slice(-1) === "/") {
    pathname = pathname.substring(1);
    segments.push({
      type: "pathname",
      value: "/"
    });
  }
  return segments;
}
function interpolatePath({
  path,
  params,
  leaveWildcards,
  leaveParams
}) {
  const interpolatedPathSegments = parsePathname(path);
  const encodedParams = {};
  for (const [key, value] of Object.entries(params)) {
    const isValueString = typeof value === "string";
    if (["*", "_splat"].includes(key)) {
      encodedParams[key] = isValueString ? encodeURI(value) : value;
    } else {
      encodedParams[key] = isValueString ? encodeURIComponent(value) : value;
    }
  }
  return joinPaths(
    interpolatedPathSegments.map((segment) => {
      if (segment.type === "wildcard") {
        const value = encodedParams._splat;
        if (leaveWildcards) return `${segment.value}${value ?? ""}`;
        return value;
      }
      if (segment.type === "param") {
        if (leaveParams) {
          const value = encodedParams[segment.value];
          return `${segment.value}${value ?? ""}`;
        }
        return encodedParams[segment.value.substring(1)] ?? "undefined";
      }
      return segment.value;
    })
  );
}
function matchPathname(basepath, currentPathname, matchLocation) {
  const pathParams = matchByPath(basepath, currentPathname, matchLocation);
  if (matchLocation.to && !pathParams) {
    return;
  }
  return pathParams ?? {};
}
function removeBasepath(basepath, pathname) {
  switch (true) {
    case basepath === "/":
      return pathname;
    case pathname === basepath:
      return "";
    case pathname.length < basepath.length:
      return pathname;
    case pathname[basepath.length] !== "/":
      return pathname;
    case pathname.startsWith(basepath):
      return pathname.slice(basepath.length);
    default:
      return pathname;
  }
}
function matchByPath(basepath, from, matchLocation) {
  from = removeBasepath(basepath, from);
  const to = removeBasepath(basepath, `${matchLocation.to ?? "$"}`);
  const baseSegments = parsePathname(from);
  const routeSegments = parsePathname(to);
  if (!from.startsWith("/")) {
    baseSegments.unshift({
      type: "pathname",
      value: "/"
    });
  }
  if (!to.startsWith("/")) {
    routeSegments.unshift({
      type: "pathname",
      value: "/"
    });
  }
  const params = {};
  const isMatch2 = (() => {
    for (let i = 0; i < Math.max(baseSegments.length, routeSegments.length); i++) {
      const baseSegment = baseSegments[i];
      const routeSegment = routeSegments[i];
      const isLastBaseSegment = i >= baseSegments.length - 1;
      const isLastRouteSegment = i >= routeSegments.length - 1;
      if (routeSegment) {
        if (routeSegment.type === "wildcard") {
          const _splat = decodeURI(
            joinPaths(baseSegments.slice(i).map((d) => d.value))
          );
          params["*"] = _splat;
          params["_splat"] = _splat;
          return true;
        }
        if (routeSegment.type === "pathname") {
          if (routeSegment.value === "/" && !(baseSegment == null ? void 0 : baseSegment.value)) {
            return true;
          }
          if (baseSegment) {
            if (matchLocation.caseSensitive) {
              if (routeSegment.value !== baseSegment.value) {
                return false;
              }
            } else if (routeSegment.value.toLowerCase() !== baseSegment.value.toLowerCase()) {
              return false;
            }
          }
        }
        if (!baseSegment) {
          return false;
        }
        if (routeSegment.type === "param") {
          if (baseSegment.value === "/") {
            return false;
          }
          if (baseSegment.value.charAt(0) !== "$") {
            params[routeSegment.value.substring(1)] = decodeURIComponent(
              baseSegment.value
            );
          }
        }
      }
      if (!isLastBaseSegment && isLastRouteSegment) {
        params["**"] = joinPaths(baseSegments.slice(i + 1).map((d) => d.value));
        return !!matchLocation.fuzzy && (routeSegment == null ? void 0 : routeSegment.value) !== "/";
      }
    }
    return true;
  })();
  return isMatch2 ? params : void 0;
}

// node_modules/@tanstack/react-router/dist/esm/redirects.js
function redirect(opts) {
  opts.isRedirect = true;
  opts.statusCode = opts.statusCode || opts.code || 307;
  opts.headers = opts.headers || {};
  if (opts.throw) {
    throw opts;
  }
  return opts;
}
function isRedirect(obj) {
  return !!(obj == null ? void 0 : obj.isRedirect);
}
function isResolvedRedirect(obj) {
  return !!(obj == null ? void 0 : obj.isRedirect) && obj.href;
}

// node_modules/@tanstack/react-router/dist/esm/not-found.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);

// node_modules/@tanstack/react-router/dist/esm/CatchBoundary.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var React4 = __toESM(require_react(), 1);
function CatchBoundary(props) {
  const errorComponent = props.errorComponent ?? ErrorComponent;
  return (0, import_jsx_runtime.jsx)(
    CatchBoundaryImpl,
    {
      getResetKey: props.getResetKey,
      onCatch: props.onCatch,
      children: ({ error, reset }) => {
        if (error) {
          return React4.createElement(errorComponent, {
            error,
            reset
          });
        }
        return props.children;
      }
    }
  );
}
var CatchBoundaryImpl = class extends React4.Component {
  constructor() {
    super(...arguments);
    this.state = { error: null };
  }
  static getDerivedStateFromProps(props) {
    return { resetKey: props.getResetKey() };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  reset() {
    this.setState({ error: null });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.error && prevState.resetKey !== this.state.resetKey) {
      this.reset();
    }
  }
  componentDidCatch(error, errorInfo) {
    if (this.props.onCatch) {
      this.props.onCatch(error, errorInfo);
    }
  }
  render() {
    return this.props.children({
      error: this.state.resetKey !== this.props.getResetKey() ? null : this.state.error,
      reset: () => {
        this.reset();
      }
    });
  }
};
function ErrorComponent({ error }) {
  const [show, setShow] = React4.useState(true);
  return (0, import_jsx_runtime.jsxs)("div", { style: { padding: ".5rem", maxWidth: "100%" }, children: [
    (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: ".5rem" }, children: [
      (0, import_jsx_runtime.jsx)("strong", { style: { fontSize: "1rem" }, children: "Something went wrong!" }),
      (0, import_jsx_runtime.jsx)(
        "button",
        {
          style: {
            appearance: "none",
            fontSize: ".6em",
            border: "1px solid currentColor",
            padding: ".1rem .2rem",
            fontWeight: "bold",
            borderRadius: ".25rem"
          },
          onClick: () => setShow((d) => !d),
          children: show ? "Hide Error" : "Show Error"
        }
      )
    ] }),
    (0, import_jsx_runtime.jsx)("div", { style: { height: ".25rem" } }),
    show ? (0, import_jsx_runtime.jsx)("div", { children: (0, import_jsx_runtime.jsx)(
      "pre",
      {
        style: {
          fontSize: ".7em",
          border: "1px solid red",
          borderRadius: ".25rem",
          padding: ".3rem",
          color: "red",
          overflow: "auto"
        },
        children: error.message ? (0, import_jsx_runtime.jsx)("code", { children: error.message }) : null
      }
    ) }) : null
  ] });
}

// node_modules/@tanstack/react-router/dist/esm/useRouterState.js
function useRouterState(opts) {
  const contextRouter = useRouter({
    warn: (opts == null ? void 0 : opts.router) === void 0
  });
  return useStore(((opts == null ? void 0 : opts.router) || contextRouter).__store, opts == null ? void 0 : opts.select);
}

// node_modules/@tanstack/react-router/dist/esm/not-found.js
function notFound(options = {}) {
  options.isNotFound = true;
  if (options.throw) throw options;
  return options;
}
function isNotFound(obj) {
  return !!(obj == null ? void 0 : obj.isNotFound);
}
function CatchNotFound(props) {
  const resetKey = useRouterState({
    select: (s) => `not-found-${s.location.pathname}-${s.status}`
  });
  return (0, import_jsx_runtime2.jsx)(
    CatchBoundary,
    {
      getResetKey: () => resetKey,
      onCatch: (error, errorInfo) => {
        var _a;
        if (isNotFound(error)) {
          (_a = props.onCatch) == null ? void 0 : _a.call(props, error, errorInfo);
        } else {
          throw error;
        }
      },
      errorComponent: ({ error }) => {
        var _a;
        return (_a = props.fallback) == null ? void 0 : _a.call(props, error);
      },
      children: props.children
    }
  );
}
function DefaultGlobalNotFound() {
  return (0, import_jsx_runtime2.jsx)("p", { children: "Not Found" });
}

// node_modules/@tanstack/react-router/dist/esm/transformer.js
var defaultTransformer = {
  stringify: (value) => JSON.stringify(value, function replacer(key, value2) {
    const keyVal = this[key];
    const transformer = transformers.find((t) => t.stringifyCondition(keyVal));
    if (transformer) {
      return transformer.stringify(keyVal);
    }
    return value2;
  }),
  parse: (value) => JSON.parse(value, function parser(key, value2) {
    const keyVal = this[key];
    const transformer = transformers.find((t) => t.parseCondition(keyVal));
    if (transformer) {
      return transformer.parse(keyVal);
    }
    return value2;
  })
};
var transformers = [
  {
    // Dates
    stringifyCondition: (value) => value instanceof Date,
    stringify: (value) => ({ $date: value.toISOString() }),
    parseCondition: (value) => isPlainObject(value) && value.$date,
    parse: (value) => new Date(value.$date)
  },
  {
    // undefined
    stringifyCondition: (value) => value === void 0,
    stringify: () => ({ $undefined: "" }),
    parseCondition: (value) => isPlainObject(value) && value.$undefined === "",
    parse: () => void 0
  }
];

// node_modules/@tanstack/react-router/dist/esm/router.js
var componentTypes = [
  "component",
  "errorComponent",
  "pendingComponent",
  "notFoundComponent"
];
function routeNeedsPreload(route) {
  var _a;
  for (const componentType of componentTypes) {
    if ((_a = route.options[componentType]) == null ? void 0 : _a.preload) {
      return true;
    }
  }
  return false;
}
function createRouter(options) {
  return new Router(options);
}
var Router = class {
  /**
   * @deprecated Use the `createRouter` function instead
   */
  constructor(options) {
    this.tempLocationKey = `${Math.round(
      Math.random() * 1e7
    )}`;
    this.resetNextScroll = true;
    this.shouldViewTransition = void 0;
    this.subscribers = /* @__PURE__ */ new Set();
    this.startReactTransition = (fn) => fn();
    this.update = (newOptions) => {
      if (newOptions.notFoundRoute) {
        console.warn(
          "The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/guide/not-found-errors#migrating-from-notfoundroute for more info."
        );
      }
      const previousOptions = this.options;
      this.options = {
        ...this.options,
        ...newOptions
      };
      this.isServer = this.options.isServer ?? typeof document === "undefined";
      if (!this.basepath || newOptions.basepath && newOptions.basepath !== previousOptions.basepath) {
        if (newOptions.basepath === void 0 || newOptions.basepath === "" || newOptions.basepath === "/") {
          this.basepath = "/";
        } else {
          this.basepath = `/${trimPath(newOptions.basepath)}`;
        }
      }
      if (
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        !this.history || this.options.history && this.options.history !== this.history
      ) {
        this.history = this.options.history ?? (this.isServer ? createMemoryHistory({
          initialEntries: [this.basepath || "/"]
        }) : createBrowserHistory());
        this.latestLocation = this.parseLocation();
      }
      if (this.options.routeTree !== this.routeTree) {
        this.routeTree = this.options.routeTree;
        this.buildRouteTree();
      }
      if (!this.__store) {
        this.__store = new Store(getInitialRouterState(this.latestLocation), {
          onUpdate: () => {
            this.__store.state = {
              ...this.state,
              cachedMatches: this.state.cachedMatches.filter(
                (d) => !["redirected"].includes(d.status)
              )
            };
          }
        });
      }
    };
    this.buildRouteTree = () => {
      this.routesById = {};
      this.routesByPath = {};
      const notFoundRoute = this.options.notFoundRoute;
      if (notFoundRoute) {
        notFoundRoute.init({
          originalIndex: 99999999999,
          defaultSsr: this.options.defaultSsr
        });
        this.routesById[notFoundRoute.id] = notFoundRoute;
      }
      const recurseRoutes = (childRoutes) => {
        childRoutes.forEach((childRoute, i) => {
          childRoute.init({
            originalIndex: i,
            defaultSsr: this.options.defaultSsr
          });
          const existingRoute = this.routesById[childRoute.id];
          invariant(
            !existingRoute,
            `Duplicate routes found with id: ${String(childRoute.id)}`
          );
          this.routesById[childRoute.id] = childRoute;
          if (!childRoute.isRoot && childRoute.path) {
            const trimmedFullPath = trimPathRight(childRoute.fullPath);
            if (!this.routesByPath[trimmedFullPath] || childRoute.fullPath.endsWith("/")) {
              this.routesByPath[trimmedFullPath] = childRoute;
            }
          }
          const children = childRoute.children;
          if (children == null ? void 0 : children.length) {
            recurseRoutes(children);
          }
        });
      };
      recurseRoutes([this.routeTree]);
      const scoredRoutes = [];
      const routes = Object.values(this.routesById);
      routes.forEach((d, i) => {
        var _a;
        if (d.isRoot || !d.path) {
          return;
        }
        const trimmed = trimPathLeft(d.fullPath);
        const parsed = parsePathname(trimmed);
        while (parsed.length > 1 && ((_a = parsed[0]) == null ? void 0 : _a.value) === "/") {
          parsed.shift();
        }
        const scores = parsed.map((segment) => {
          if (segment.value === "/") {
            return 0.75;
          }
          if (segment.type === "param") {
            return 0.5;
          }
          if (segment.type === "wildcard") {
            return 0.25;
          }
          return 1;
        });
        scoredRoutes.push({ child: d, trimmed, parsed, index: i, scores });
      });
      this.flatRoutes = scoredRoutes.sort((a, b) => {
        const minLength = Math.min(a.scores.length, b.scores.length);
        for (let i = 0; i < minLength; i++) {
          if (a.scores[i] !== b.scores[i]) {
            return b.scores[i] - a.scores[i];
          }
        }
        if (a.scores.length !== b.scores.length) {
          return b.scores.length - a.scores.length;
        }
        for (let i = 0; i < minLength; i++) {
          if (a.parsed[i].value !== b.parsed[i].value) {
            return a.parsed[i].value > b.parsed[i].value ? 1 : -1;
          }
        }
        return a.index - b.index;
      }).map((d, i) => {
        d.child.rank = i;
        return d.child;
      });
    };
    this.subscribe = (eventType, fn) => {
      const listener = {
        eventType,
        fn
      };
      this.subscribers.add(listener);
      return () => {
        this.subscribers.delete(listener);
      };
    };
    this.emit = (routerEvent) => {
      this.subscribers.forEach((listener) => {
        if (listener.eventType === routerEvent.type) {
          listener.fn(routerEvent);
        }
      });
    };
    this.parseLocation = (previousLocation) => {
      const parse = ({
        pathname,
        search,
        hash,
        state
      }) => {
        const parsedSearch = this.options.parseSearch(search);
        const searchStr = this.options.stringifySearch(parsedSearch);
        return {
          pathname,
          searchStr,
          search: replaceEqualDeep(previousLocation == null ? void 0 : previousLocation.search, parsedSearch),
          hash: hash.split("#").reverse()[0] ?? "",
          href: `${pathname}${searchStr}${hash}`,
          state: replaceEqualDeep(previousLocation == null ? void 0 : previousLocation.state, state)
        };
      };
      const location = parse(this.history.location);
      const { __tempLocation, __tempKey } = location.state;
      if (__tempLocation && (!__tempKey || __tempKey === this.tempLocationKey)) {
        const parsedTempLocation = parse(__tempLocation);
        parsedTempLocation.state.key = location.state.key;
        delete parsedTempLocation.state.__tempLocation;
        return {
          ...parsedTempLocation,
          maskedLocation: location
        };
      }
      return location;
    };
    this.resolvePathWithBase = (from, path) => {
      const resolvedPath = resolvePath({
        basepath: this.basepath,
        base: from,
        to: cleanPath(path),
        trailingSlash: this.options.trailingSlash
      });
      return resolvedPath;
    };
    this.cancelMatch = (id) => {
      const match = this.getMatch(id);
      if (!match) return;
      match.abortController.abort();
      clearTimeout(match.pendingTimeout);
    };
    this.cancelMatches = () => {
      var _a;
      (_a = this.state.pendingMatches) == null ? void 0 : _a.forEach((match) => {
        this.cancelMatch(match.id);
      });
    };
    this.buildLocation = (opts) => {
      const build = (dest = {}, matches) => {
        var _a, _b, _c, _d, _e;
        const fromMatches = dest._fromLocation ? this.matchRoutes(dest._fromLocation) : this.state.matches;
        const fromMatch = dest.from != null ? fromMatches.find(
          (d) => matchPathname(this.basepath, trimPathRight(d.pathname), {
            to: dest.from,
            caseSensitive: false,
            fuzzy: false
          })
        ) : void 0;
        const fromPath = (fromMatch == null ? void 0 : fromMatch.pathname) || this.latestLocation.pathname;
        invariant(
          dest.from == null || fromMatch != null,
          "Could not find match for from: " + dest.from
        );
        const fromSearch = ((_a = this.state.pendingMatches) == null ? void 0 : _a.length) ? (_b = last(this.state.pendingMatches)) == null ? void 0 : _b.search : ((_c = last(fromMatches)) == null ? void 0 : _c.search) || this.latestLocation.search;
        const stayingMatches = matches == null ? void 0 : matches.filter(
          (d) => fromMatches.find((e) => e.routeId === d.routeId)
        );
        const fromRouteByFromPathRouteId = this.routesById[(_d = stayingMatches == null ? void 0 : stayingMatches.find((d) => d.pathname === fromPath)) == null ? void 0 : _d.routeId];
        let pathname = dest.to ? this.resolvePathWithBase(fromPath, `${dest.to}`) : this.resolvePathWithBase(
          fromPath,
          (fromRouteByFromPathRouteId == null ? void 0 : fromRouteByFromPathRouteId.to) ?? fromPath
        );
        const prevParams = { ...(_e = last(fromMatches)) == null ? void 0 : _e.params };
        let nextParams = (dest.params ?? true) === true ? prevParams : { ...prevParams, ...functionalUpdate(dest.params, prevParams) };
        if (Object.keys(nextParams).length > 0) {
          matches == null ? void 0 : matches.map((d) => {
            var _a2;
            const route = this.looseRoutesById[d.routeId];
            return ((_a2 = route == null ? void 0 : route.options.params) == null ? void 0 : _a2.stringify) ?? route.options.stringifyParams;
          }).filter(Boolean).forEach((fn) => {
            nextParams = { ...nextParams, ...fn(nextParams) };
          });
        }
        pathname = interpolatePath({
          path: pathname,
          params: nextParams ?? {},
          leaveWildcards: false,
          leaveParams: opts.leaveParams
        });
        const preSearchFilters = (stayingMatches == null ? void 0 : stayingMatches.map(
          (match) => this.looseRoutesById[match.routeId].options.preSearchFilters ?? []
        ).flat().filter(Boolean)) ?? [];
        const postSearchFilters = (stayingMatches == null ? void 0 : stayingMatches.map(
          (match) => this.looseRoutesById[match.routeId].options.postSearchFilters ?? []
        ).flat().filter(Boolean)) ?? [];
        const preFilteredSearch = preSearchFilters.length ? preSearchFilters.reduce((prev, next) => next(prev), fromSearch) : fromSearch;
        const destSearch = dest.search === true ? preFilteredSearch : dest.search ? functionalUpdate(dest.search, preFilteredSearch) : preSearchFilters.length ? preFilteredSearch : {};
        const postFilteredSearch = postSearchFilters.length ? postSearchFilters.reduce((prev, next) => next(prev), destSearch) : destSearch;
        const search = replaceEqualDeep(fromSearch, postFilteredSearch);
        const searchStr = this.options.stringifySearch(search);
        const hash = dest.hash === true ? this.latestLocation.hash : dest.hash ? functionalUpdate(dest.hash, this.latestLocation.hash) : void 0;
        const hashStr = hash ? `#${hash}` : "";
        let nextState = dest.state === true ? this.latestLocation.state : dest.state ? functionalUpdate(dest.state, this.latestLocation.state) : {};
        nextState = replaceEqualDeep(this.latestLocation.state, nextState);
        return {
          pathname,
          search,
          searchStr,
          state: nextState,
          hash: hash ?? "",
          href: `${pathname}${searchStr}${hashStr}`,
          unmaskOnReload: dest.unmaskOnReload
        };
      };
      const buildWithMatches = (dest = {}, maskedDest) => {
        var _a;
        const next = build(dest);
        let maskedNext = maskedDest ? build(maskedDest) : void 0;
        if (!maskedNext) {
          let params = {};
          const foundMask = (_a = this.options.routeMasks) == null ? void 0 : _a.find((d) => {
            const match = matchPathname(this.basepath, next.pathname, {
              to: d.from,
              caseSensitive: false,
              fuzzy: false
            });
            if (match) {
              params = match;
              return true;
            }
            return false;
          });
          if (foundMask) {
            const { from, ...maskProps } = foundMask;
            maskedDest = {
              ...pick(opts, ["from"]),
              ...maskProps,
              params
            };
            maskedNext = build(maskedDest);
          }
        }
        const nextMatches = this.matchRoutes(next);
        const maskedMatches = maskedNext ? this.matchRoutes(maskedNext) : void 0;
        const maskedFinal = maskedNext ? build(maskedDest, maskedMatches) : void 0;
        const final = build(dest, nextMatches);
        if (maskedFinal) {
          final.maskedLocation = maskedFinal;
        }
        return final;
      };
      if (opts.mask) {
        return buildWithMatches(opts, {
          ...pick(opts, ["from"]),
          ...opts.mask
        });
      }
      return buildWithMatches(opts);
    };
    this.commitLocation = ({
      viewTransition,
      ignoreBlocker,
      ...next
    }) => {
      const isSameState = () => {
        next.state.key = this.latestLocation.state.key;
        const isEqual = deepEqual(next.state, this.latestLocation.state);
        delete next.state.key;
        return isEqual;
      };
      const isSameUrl = this.latestLocation.href === next.href;
      const previousCommitPromise = this.commitLocationPromise;
      this.commitLocationPromise = createControlledPromise(() => {
        previousCommitPromise == null ? void 0 : previousCommitPromise.resolve();
      });
      if (isSameUrl && isSameState()) {
        this.load();
      } else {
        let { maskedLocation, ...nextHistory } = next;
        if (maskedLocation) {
          nextHistory = {
            ...maskedLocation,
            state: {
              ...maskedLocation.state,
              __tempKey: void 0,
              __tempLocation: {
                ...nextHistory,
                search: nextHistory.searchStr,
                state: {
                  ...nextHistory.state,
                  __tempKey: void 0,
                  __tempLocation: void 0,
                  key: void 0
                }
              }
            }
          };
          if (nextHistory.unmaskOnReload ?? this.options.unmaskOnReload ?? false) {
            nextHistory.state.__tempKey = this.tempLocationKey;
          }
        }
        this.shouldViewTransition = viewTransition;
        this.history[next.replace ? "replace" : "push"](
          nextHistory.href,
          nextHistory.state,
          { ignoreBlocker }
        );
      }
      this.resetNextScroll = next.resetScroll ?? true;
      if (!this.history.subscribers.size) {
        this.load();
      }
      return this.commitLocationPromise;
    };
    this.buildAndCommitLocation = ({
      replace,
      resetScroll,
      viewTransition,
      ignoreBlocker,
      ...rest
    } = {}) => {
      const href = rest.href;
      if (href) {
        const parsed = parseHref(href, {});
        rest.to = parsed.pathname;
        rest.search = this.options.parseSearch(parsed.search);
        rest.hash = parsed.hash;
      }
      const location = this.buildLocation(rest);
      return this.commitLocation({
        ...location,
        viewTransition,
        replace,
        resetScroll,
        ignoreBlocker
      });
    };
    this.navigate = ({ to, ...rest }) => {
      const toString = String(to);
      let isExternal;
      try {
        new URL(`${toString}`);
        isExternal = true;
      } catch (e) {
      }
      invariant(
        !isExternal,
        "Attempting to navigate to external url with router.navigate!"
      );
      return this.buildAndCommitLocation({
        ...rest,
        to
        // to: toString,
      });
    };
    this.load = async () => {
      this.latestLocation = this.parseLocation(this.latestLocation);
      let redirect2;
      let notFound2;
      let loadPromise;
      loadPromise = new Promise((resolve) => {
        this.startReactTransition(async () => {
          var _a;
          try {
            const next = this.latestLocation;
            const prevLocation = this.state.resolvedLocation;
            const pathDidChange = prevLocation.href !== next.href;
            this.cancelMatches();
            let pendingMatches;
            this.__store.batch(() => {
              pendingMatches = this.matchRoutes(next);
              this.__store.setState((s) => ({
                ...s,
                status: "pending",
                isLoading: true,
                location: next,
                pendingMatches,
                // If a cached moved to pendingMatches, remove it from cachedMatches
                cachedMatches: s.cachedMatches.filter((d) => {
                  return !pendingMatches.find((e) => e.id === d.id);
                })
              }));
            });
            if (!this.state.redirect) {
              this.emit({
                type: "onBeforeNavigate",
                fromLocation: prevLocation,
                toLocation: next,
                pathChanged: pathDidChange
              });
            }
            this.emit({
              type: "onBeforeLoad",
              fromLocation: prevLocation,
              toLocation: next,
              pathChanged: pathDidChange
            });
            await this.loadMatches({
              matches: pendingMatches,
              location: next,
              // eslint-disable-next-line @typescript-eslint/require-await
              onReady: async () => {
                this.startViewTransition(async () => {
                  let exitingMatches;
                  let enteringMatches;
                  let stayingMatches;
                  this.__store.batch(() => {
                    this.__store.setState((s) => {
                      const previousMatches = s.matches;
                      const newMatches = s.pendingMatches || s.matches;
                      exitingMatches = previousMatches.filter(
                        (match) => !newMatches.find((d) => d.id === match.id)
                      );
                      enteringMatches = newMatches.filter(
                        (match) => !previousMatches.find((d) => d.id === match.id)
                      );
                      stayingMatches = previousMatches.filter(
                        (match) => newMatches.find((d) => d.id === match.id)
                      );
                      return {
                        ...s,
                        isLoading: false,
                        loadedAt: Date.now(),
                        matches: newMatches,
                        pendingMatches: void 0,
                        cachedMatches: [
                          ...s.cachedMatches,
                          ...exitingMatches.filter((d) => d.status !== "error")
                        ]
                      };
                    });
                    this.cleanCache();
                  });
                  [
                    [exitingMatches, "onLeave"],
                    [enteringMatches, "onEnter"],
                    [stayingMatches, "onStay"]
                  ].forEach(([matches, hook]) => {
                    matches.forEach((match) => {
                      var _a2, _b;
                      (_b = (_a2 = this.looseRoutesById[match.routeId].options)[hook]) == null ? void 0 : _b.call(_a2, match);
                    });
                  });
                });
              }
            });
          } catch (err) {
            if (isResolvedRedirect(err)) {
              redirect2 = err;
              if (!this.isServer) {
                this.navigate({
                  ...err,
                  replace: true,
                  ignoreBlocker: true
                });
              }
            } else if (isNotFound(err)) {
              notFound2 = err;
            }
            this.__store.setState((s) => ({
              ...s,
              statusCode: redirect2 ? redirect2.statusCode : notFound2 ? 404 : s.matches.some((d) => d.status === "error") ? 500 : 200,
              redirect: redirect2
            }));
          }
          if (this.latestLoadPromise === loadPromise) {
            (_a = this.commitLocationPromise) == null ? void 0 : _a.resolve();
            this.latestLoadPromise = void 0;
            this.commitLocationPromise = void 0;
          }
          resolve();
        });
      });
      this.latestLoadPromise = loadPromise;
      await loadPromise;
      while (this.latestLoadPromise && loadPromise !== this.latestLoadPromise) {
        await this.latestLoadPromise;
      }
    };
    this.startViewTransition = (fn) => {
      const shouldViewTransition = this.shouldViewTransition ?? this.options.defaultViewTransition;
      delete this.shouldViewTransition;
      if (shouldViewTransition && typeof document !== "undefined" && "startViewTransition" in document && typeof document.startViewTransition === "function") {
        document.startViewTransition(fn);
      } else {
        fn();
      }
    };
    this.updateMatch = (id, updater) => {
      var _a;
      let updated;
      const isPending = (_a = this.state.pendingMatches) == null ? void 0 : _a.find((d) => d.id === id);
      const isMatched = this.state.matches.find((d) => d.id === id);
      const matchesKey = isPending ? "pendingMatches" : isMatched ? "matches" : "cachedMatches";
      this.__store.setState((s) => {
        var _a2;
        return {
          ...s,
          [matchesKey]: (_a2 = s[matchesKey]) == null ? void 0 : _a2.map(
            (d) => d.id === id ? updated = updater(d) : d
          )
        };
      });
      return updated;
    };
    this.getMatch = (matchId) => {
      return [
        ...this.state.cachedMatches,
        ...this.state.pendingMatches ?? [],
        ...this.state.matches
      ].find((d) => d.id === matchId);
    };
    this.loadMatches = async ({
      location,
      matches,
      preload,
      onReady,
      updateMatch = this.updateMatch
    }) => {
      let firstBadMatchIndex;
      let rendered = false;
      const triggerOnReady = async () => {
        if (!rendered) {
          rendered = true;
          await (onReady == null ? void 0 : onReady());
        }
      };
      if (!this.isServer && !this.state.matches.length) {
        triggerOnReady();
      }
      const handleRedirectAndNotFound = (match, err) => {
        var _a, _b, _c;
        if (isResolvedRedirect(err)) throw err;
        if (isRedirect(err) || isNotFound(err)) {
          updateMatch(match.id, (prev) => ({
            ...prev,
            status: isRedirect(err) ? "redirected" : isNotFound(err) ? "notFound" : "error",
            isFetching: false,
            error: err,
            beforeLoadPromise: void 0,
            loaderPromise: void 0
          }));
          if (!err.routeId) {
            err.routeId = match.routeId;
          }
          (_a = match.beforeLoadPromise) == null ? void 0 : _a.resolve();
          (_b = match.loaderPromise) == null ? void 0 : _b.resolve();
          (_c = match.loadPromise) == null ? void 0 : _c.resolve();
          if (isRedirect(err)) {
            rendered = true;
            err = this.resolveRedirect({ ...err, _fromLocation: location });
            throw err;
          } else if (isNotFound(err)) {
            this._handleNotFound(matches, err, {
              updateMatch
            });
            throw err;
          }
        }
      };
      try {
        await new Promise((resolveAll, rejectAll) => {
          ;
          (async () => {
            var _a, _b, _c;
            try {
              const handleSerialError = (index, err, routerCode) => {
                var _a2, _b2;
                const { id: matchId, routeId } = matches[index];
                const route = this.looseRoutesById[routeId];
                if (err instanceof Promise) {
                  throw err;
                }
                err.routerCode = routerCode;
                firstBadMatchIndex = firstBadMatchIndex ?? index;
                handleRedirectAndNotFound(this.getMatch(matchId), err);
                try {
                  (_b2 = (_a2 = route.options).onError) == null ? void 0 : _b2.call(_a2, err);
                } catch (errorHandlerErr) {
                  err = errorHandlerErr;
                  handleRedirectAndNotFound(this.getMatch(matchId), err);
                }
                updateMatch(matchId, (prev) => {
                  var _a3;
                  (_a3 = prev.beforeLoadPromise) == null ? void 0 : _a3.resolve();
                  return {
                    ...prev,
                    error: err,
                    status: "error",
                    isFetching: false,
                    updatedAt: Date.now(),
                    abortController: new AbortController(),
                    beforeLoadPromise: void 0
                  };
                });
              };
              for (const [index, { id: matchId, routeId }] of matches.entries()) {
                const existingMatch = this.getMatch(matchId);
                const parentMatchId = (_a = matches[index - 1]) == null ? void 0 : _a.id;
                const route = this.looseRoutesById[routeId];
                const pendingMs = route.options.pendingMs ?? this.options.defaultPendingMs;
                const shouldPending = !!(onReady && !this.isServer && !preload && (route.options.loader || route.options.beforeLoad) && typeof pendingMs === "number" && pendingMs !== Infinity && (route.options.pendingComponent ?? this.options.defaultPendingComponent));
                if (
                  // If we are in the middle of a load, either of these will be present
                  // (not to be confused with `loadPromise`, which is always defined)
                  existingMatch.beforeLoadPromise || existingMatch.loaderPromise
                ) {
                  if (shouldPending) {
                    setTimeout(() => {
                      try {
                        triggerOnReady();
                      } catch {
                      }
                    }, pendingMs);
                  }
                  await existingMatch.beforeLoadPromise;
                } else {
                  try {
                    updateMatch(matchId, (prev) => ({
                      ...prev,
                      loadPromise: createControlledPromise(() => {
                        var _a2;
                        (_a2 = prev.loadPromise) == null ? void 0 : _a2.resolve();
                      }),
                      beforeLoadPromise: createControlledPromise()
                    }));
                    const abortController = new AbortController();
                    let pendingTimeout;
                    if (shouldPending) {
                      pendingTimeout = setTimeout(() => {
                        try {
                          triggerOnReady();
                        } catch {
                        }
                      }, pendingMs);
                    }
                    const { paramsError, searchError } = this.getMatch(matchId);
                    if (paramsError) {
                      handleSerialError(index, paramsError, "PARSE_PARAMS");
                    }
                    if (searchError) {
                      handleSerialError(index, searchError, "VALIDATE_SEARCH");
                    }
                    const getParentMatchContext = () => parentMatchId ? this.getMatch(parentMatchId).context : this.options.context ?? {};
                    updateMatch(matchId, (prev) => ({
                      ...prev,
                      isFetching: "beforeLoad",
                      fetchCount: prev.fetchCount + 1,
                      abortController,
                      pendingTimeout,
                      context: {
                        ...getParentMatchContext(),
                        ...prev.__routeContext,
                        ...prev.__beforeLoadContext
                      }
                    }));
                    const { search, params, context, cause } = this.getMatch(matchId);
                    const beforeLoadFnContext = {
                      search,
                      abortController,
                      params,
                      preload: !!preload,
                      context,
                      location,
                      navigate: (opts) => this.navigate({ ...opts, _fromLocation: location }),
                      buildLocation: this.buildLocation,
                      cause: preload ? "preload" : cause,
                      matches
                    };
                    let beforeLoadContext = await ((_c = (_b = route.options).beforeLoad) == null ? void 0 : _c.call(_b, beforeLoadFnContext)) ?? {};
                    if (this.serializeLoaderData) {
                      beforeLoadContext = this.serializeLoaderData(
                        "__beforeLoadContext",
                        beforeLoadContext,
                        {
                          router: this,
                          match: this.getMatch(matchId)
                        }
                      );
                    }
                    if (isRedirect(beforeLoadContext) || isNotFound(beforeLoadContext)) {
                      handleSerialError(index, beforeLoadContext, "BEFORE_LOAD");
                    }
                    updateMatch(matchId, (prev) => {
                      return {
                        ...prev,
                        __beforeLoadContext: beforeLoadContext,
                        context: {
                          ...getParentMatchContext(),
                          ...prev.__routeContext,
                          ...beforeLoadContext
                        },
                        abortController
                      };
                    });
                  } catch (err) {
                    handleSerialError(index, err, "BEFORE_LOAD");
                  }
                  updateMatch(matchId, (prev) => {
                    var _a2;
                    (_a2 = prev.beforeLoadPromise) == null ? void 0 : _a2.resolve();
                    return {
                      ...prev,
                      beforeLoadPromise: void 0,
                      isFetching: false
                    };
                  });
                }
              }
              const validResolvedMatches = matches.slice(0, firstBadMatchIndex);
              const matchPromises = [];
              validResolvedMatches.forEach(({ id: matchId, routeId }, index) => {
                matchPromises.push(
                  (async () => {
                    const { loaderPromise: prevLoaderPromise } = this.getMatch(matchId);
                    let loaderRunningAsync = false;
                    if (prevLoaderPromise) {
                      await prevLoaderPromise;
                    } else {
                      const parentMatchPromise = matchPromises[index - 1];
                      const route = this.looseRoutesById[routeId];
                      const getLoaderContext = () => {
                        const {
                          params,
                          loaderDeps,
                          abortController,
                          context,
                          cause
                        } = this.getMatch(matchId);
                        return {
                          params,
                          deps: loaderDeps,
                          preload: !!preload,
                          parentMatchPromise,
                          abortController,
                          context,
                          location,
                          navigate: (opts) => this.navigate({ ...opts, _fromLocation: location }),
                          cause: preload ? "preload" : cause,
                          route
                        };
                      };
                      const age = Date.now() - this.getMatch(matchId).updatedAt;
                      const staleAge = preload ? route.options.preloadStaleTime ?? this.options.defaultPreloadStaleTime ?? 3e4 : route.options.staleTime ?? this.options.defaultStaleTime ?? 0;
                      const shouldReloadOption = route.options.shouldReload;
                      const shouldReload = typeof shouldReloadOption === "function" ? shouldReloadOption(getLoaderContext()) : shouldReloadOption;
                      updateMatch(matchId, (prev) => ({
                        ...prev,
                        loaderPromise: createControlledPromise(),
                        preload: !!preload && !this.state.matches.find((d) => d.id === matchId)
                      }));
                      const runLoader = async () => {
                        var _a2, _b2, _c2, _d, _e, _f, _g, _h;
                        try {
                          const potentialPendingMinPromise = async () => {
                            const latestMatch = this.getMatch(matchId);
                            if (latestMatch.minPendingPromise) {
                              await latestMatch.minPendingPromise;
                            }
                          };
                          try {
                            route._lazyPromise = route._lazyPromise || (route.lazyFn ? route.lazyFn().then((lazyRoute) => {
                              Object.assign(
                                route.options,
                                lazyRoute.options
                              );
                            }) : Promise.resolve());
                            const componentsPromise = this.getMatch(matchId).componentsPromise || route._lazyPromise.then(
                              () => Promise.all(
                                componentTypes.map(async (type) => {
                                  const component = route.options[type];
                                  if (component == null ? void 0 : component.preload) {
                                    await component.preload();
                                  }
                                })
                              )
                            );
                            updateMatch(matchId, (prev) => ({
                              ...prev,
                              isFetching: "loader",
                              componentsPromise
                            }));
                            let loaderData = await ((_b2 = (_a2 = route.options).loader) == null ? void 0 : _b2.call(_a2, getLoaderContext()));
                            if (this.serializeLoaderData) {
                              loaderData = this.serializeLoaderData(
                                "loaderData",
                                loaderData,
                                {
                                  router: this,
                                  match: this.getMatch(matchId)
                                }
                              );
                            }
                            handleRedirectAndNotFound(
                              this.getMatch(matchId),
                              loaderData
                            );
                            await route._lazyPromise;
                            await potentialPendingMinPromise();
                            const meta = (_d = (_c2 = route.options).meta) == null ? void 0 : _d.call(_c2, {
                              matches,
                              match: this.getMatch(matchId),
                              params: this.getMatch(matchId).params,
                              loaderData
                            });
                            const headers = (_f = (_e = route.options).headers) == null ? void 0 : _f.call(_e, {
                              loaderData
                            });
                            updateMatch(matchId, (prev) => ({
                              ...prev,
                              error: void 0,
                              status: "success",
                              isFetching: false,
                              updatedAt: Date.now(),
                              loaderData,
                              meta,
                              headers
                            }));
                          } catch (e) {
                            let error = e;
                            await potentialPendingMinPromise();
                            handleRedirectAndNotFound(this.getMatch(matchId), e);
                            try {
                              (_h = (_g = route.options).onError) == null ? void 0 : _h.call(_g, e);
                            } catch (onErrorError) {
                              error = onErrorError;
                              handleRedirectAndNotFound(
                                this.getMatch(matchId),
                                onErrorError
                              );
                            }
                            updateMatch(matchId, (prev) => ({
                              ...prev,
                              error,
                              status: "error",
                              isFetching: false
                            }));
                          }
                          await this.getMatch(matchId).componentsPromise;
                        } catch (err) {
                          handleRedirectAndNotFound(this.getMatch(matchId), err);
                        }
                      };
                      const { status, invalid } = this.getMatch(matchId);
                      loaderRunningAsync = status === "success" && (invalid || (shouldReload ?? age > staleAge));
                      if (preload && route.options.preload === false) {
                      } else if (loaderRunningAsync) {
                        ;
                        (async () => {
                          try {
                            await runLoader();
                          } catch (err) {
                          }
                        })();
                      } else if (status !== "success") {
                        await runLoader();
                      }
                      const { loaderPromise, loadPromise } = this.getMatch(matchId);
                      loaderPromise == null ? void 0 : loaderPromise.resolve();
                      loadPromise == null ? void 0 : loadPromise.resolve();
                    }
                    updateMatch(matchId, (prev) => ({
                      ...prev,
                      isFetching: loaderRunningAsync ? prev.isFetching : false,
                      loaderPromise: void 0,
                      invalid: false
                    }));
                  })()
                );
              });
              await Promise.all(matchPromises);
              resolveAll();
            } catch (err) {
              rejectAll(err);
            }
          })();
        });
        await triggerOnReady();
      } catch (err) {
        if (isRedirect(err) || isNotFound(err)) {
          if (isNotFound(err) && !preload) {
            await triggerOnReady();
          }
          throw err;
        }
      }
      return matches;
    };
    this.invalidate = () => {
      const invalidate = (d) => ({
        ...d,
        invalid: true,
        ...d.status === "error" ? { status: "pending", error: void 0 } : {}
      });
      this.__store.setState((s) => {
        var _a;
        return {
          ...s,
          matches: s.matches.map(invalidate),
          cachedMatches: s.cachedMatches.map(invalidate),
          pendingMatches: (_a = s.pendingMatches) == null ? void 0 : _a.map(invalidate)
        };
      });
      return this.load();
    };
    this.resolveRedirect = (err) => {
      const redirect2 = err;
      if (!redirect2.href) {
        redirect2.href = this.buildLocation(redirect2).href;
      }
      return redirect2;
    };
    this.cleanCache = () => {
      this.__store.setState((s) => {
        return {
          ...s,
          cachedMatches: s.cachedMatches.filter((d) => {
            const route = this.looseRoutesById[d.routeId];
            if (!route.options.loader) {
              return false;
            }
            const gcTime = (d.preload ? route.options.preloadGcTime ?? this.options.defaultPreloadGcTime : route.options.gcTime ?? this.options.defaultGcTime) ?? 5 * 60 * 1e3;
            return d.status !== "error" && Date.now() - d.updatedAt < gcTime;
          })
        };
      });
    };
    this.preloadRoute = async (opts) => {
      const next = this.buildLocation(opts);
      let matches = this.matchRoutes(next, {
        throwOnError: true,
        preload: true
      });
      const loadedMatchIds = Object.fromEntries(
        [
          ...this.state.matches,
          ...this.state.pendingMatches ?? [],
          ...this.state.cachedMatches
        ].map((d) => [d.id, true])
      );
      this.__store.batch(() => {
        matches.forEach((match) => {
          if (!loadedMatchIds[match.id]) {
            this.__store.setState((s) => ({
              ...s,
              cachedMatches: [...s.cachedMatches, match]
            }));
          }
        });
      });
      const activeMatchIds = new Set(
        [...this.state.matches, ...this.state.pendingMatches ?? []].map(
          (d) => d.id
        )
      );
      try {
        matches = await this.loadMatches({
          matches,
          location: next,
          preload: true,
          updateMatch: (id, updater) => {
            if (activeMatchIds.has(id)) {
              matches = matches.map((d) => d.id === id ? updater(d) : d);
            } else {
              this.updateMatch(id, updater);
            }
          }
        });
        return matches;
      } catch (err) {
        if (isRedirect(err)) {
          return await this.preloadRoute({
            ...err,
            _fromLocation: next
          });
        }
        console.error(err);
        return void 0;
      }
    };
    this.matchRoute = (location, opts) => {
      const matchLocation = {
        ...location,
        to: location.to ? this.resolvePathWithBase(
          location.from || "",
          location.to
        ) : void 0,
        params: location.params || {},
        leaveParams: true
      };
      const next = this.buildLocation(matchLocation);
      if ((opts == null ? void 0 : opts.pending) && this.state.status !== "pending") {
        return false;
      }
      const pending = (opts == null ? void 0 : opts.pending) === void 0 ? !this.state.isLoading : opts.pending;
      const baseLocation = pending ? this.latestLocation : this.state.resolvedLocation;
      const match = matchPathname(this.basepath, baseLocation.pathname, {
        ...opts,
        to: next.pathname
      });
      if (!match) {
        return false;
      }
      if (location.params) {
        if (!deepEqual(match, location.params, true)) {
          return false;
        }
      }
      if (match && ((opts == null ? void 0 : opts.includeSearch) ?? true)) {
        return deepEqual(baseLocation.search, next.search, true) ? match : false;
      }
      return match;
    };
    this.dehydrate = () => {
      var _a;
      const pickError = ((_a = this.options.errorSerializer) == null ? void 0 : _a.serialize) ?? defaultSerializeError;
      return {
        state: {
          dehydratedMatches: this.state.matches.map((d) => {
            return {
              ...pick(d, ["id", "status", "updatedAt"]),
              // If an error occurs server-side during SSRing,
              // send a small subset of the error to the client
              error: d.error ? {
                data: pickError(d.error),
                __isServerError: true
              } : void 0
              // NOTE: We don't send the loader data here, because
              // there is a potential that it needs to be streamed.
              // Instead, we render it next to the route match in the HTML
              // which gives us the potential to stream it via suspense.
            };
          })
        },
        manifest: this.manifest
      };
    };
    this.hydrate = () => {
      var _a, _b, _c;
      let ctx;
      if (typeof document !== "undefined") {
        ctx = this.options.transformer.parse((_a = window.__TSR__) == null ? void 0 : _a.dehydrated);
      }
      invariant(
        ctx,
        "Expected to find a dehydrated data on window.__TSR__.dehydrated... but we did not. Please file an issue!"
      );
      this.dehydratedData = ctx.payload;
      (_c = (_b = this.options).hydrate) == null ? void 0 : _c.call(_b, ctx.payload);
      const dehydratedState = ctx.router.state;
      const matches = this.matchRoutes(this.state.location).map((match) => {
        const dehydratedMatch = dehydratedState.dehydratedMatches.find(
          (d) => d.id === match.id
        );
        invariant(
          dehydratedMatch,
          `Could not find a client-side match for dehydrated match with id: ${match.id}!`
        );
        return {
          ...match,
          ...dehydratedMatch
        };
      });
      this.__store.setState((s) => {
        return {
          ...s,
          matches
        };
      });
      this.manifest = ctx.router.manifest;
    };
    this.injectedHtml = [];
    this.injectHtml = (html) => {
      const cb = () => {
        this.injectedHtml = this.injectedHtml.filter((d) => d !== cb);
        return html;
      };
      this.injectedHtml.push(cb);
    };
    this.streamedKeys = /* @__PURE__ */ new Set();
    this.getStreamedValue = (key) => {
      var _a;
      if (this.isServer) {
        return void 0;
      }
      const streamedValue = (_a = window.__TSR__) == null ? void 0 : _a.streamedValues[key];
      if (!streamedValue) {
        return;
      }
      if (!streamedValue.parsed) {
        streamedValue.parsed = this.options.transformer.parse(streamedValue.value);
      }
      return streamedValue.parsed;
    };
    this.streamValue = (key, value) => {
      var _a;
      tiny_warning_esm_default(
        !this.streamedKeys.has(key),
        "Key has already been streamed: " + key
      );
      this.streamedKeys.add(key);
      const children = `__TSR__.streamedValues['${key}'] = { value: ${(_a = this.serializer) == null ? void 0 : _a.call(this, this.options.transformer.stringify(value))}}`;
      this.injectHtml(
        `<script class='tsr-once'>${children}${true ? `; console.info(\`Injected From Server:
        ${children}\`)` : ""}; __TSR__.cleanScripts()<\/script>`
      );
    };
    this._handleNotFound = (matches, err, {
      updateMatch = this.updateMatch
    } = {}) => {
      const matchesByRouteId = Object.fromEntries(
        matches.map((match2) => [match2.routeId, match2])
      );
      let routeCursor = (err.global ? this.looseRoutesById[rootRouteId] : this.looseRoutesById[err.routeId]) || this.looseRoutesById[rootRouteId];
      while (!routeCursor.options.notFoundComponent && !this.options.defaultNotFoundComponent && routeCursor.id !== rootRouteId) {
        routeCursor = routeCursor.parentRoute;
        invariant(
          routeCursor,
          "Found invalid route tree while trying to find not-found handler."
        );
      }
      const match = matchesByRouteId[routeCursor.id];
      invariant(match, "Could not find match for route: " + routeCursor.id);
      updateMatch(match.id, (prev) => ({
        ...prev,
        status: "notFound",
        error: err,
        isFetching: false
      }));
      if (err.routerCode === "BEFORE_LOAD" && routeCursor.parentRoute) {
        err.routeId = routeCursor.parentRoute.id;
        this._handleNotFound(matches, err, {
          updateMatch
        });
      }
    };
    this.hasNotFoundMatch = () => {
      return this.__store.state.matches.some(
        (d) => d.status === "notFound" || d.globalNotFound
      );
    };
    this.update({
      defaultPreloadDelay: 50,
      defaultPendingMs: 1e3,
      defaultPendingMinMs: 500,
      context: void 0,
      ...options,
      notFoundMode: options.notFoundMode ?? "fuzzy",
      stringifySearch: options.stringifySearch ?? defaultStringifySearch,
      parseSearch: options.parseSearch ?? defaultParseSearch,
      transformer: options.transformer ?? defaultTransformer
    });
    if (typeof document !== "undefined") {
      window.__TSR__ROUTER__ = this;
    }
  }
  get state() {
    return this.__store.state;
  }
  get looseRoutesById() {
    return this.routesById;
  }
  matchRoutes(pathnameOrNext, locationSearchOrOpts, opts) {
    if (typeof pathnameOrNext === "string") {
      return this.matchRoutesInternal(
        {
          pathname: pathnameOrNext,
          search: locationSearchOrOpts
        },
        opts
      );
    } else {
      return this.matchRoutesInternal(pathnameOrNext, locationSearchOrOpts);
    }
  }
  matchRoutesInternal(next, opts) {
    let routeParams = {};
    const foundRoute = this.flatRoutes.find((route) => {
      const matchedParams = matchPathname(
        this.basepath,
        trimPathRight(next.pathname),
        {
          to: route.fullPath,
          caseSensitive: route.options.caseSensitive ?? this.options.caseSensitive,
          fuzzy: true
        }
      );
      if (matchedParams) {
        routeParams = matchedParams;
        return true;
      }
      return false;
    });
    let routeCursor = foundRoute || this.routesById[rootRouteId];
    const matchedRoutes = [routeCursor];
    let isGlobalNotFound = false;
    if (
      // If we found a route, and it's not an index route and we have left over path
      foundRoute ? foundRoute.path !== "/" && routeParams["**"] : (
        // Or if we didn't find a route and we have left over path
        trimPathRight(next.pathname)
      )
    ) {
      if (this.options.notFoundRoute) {
        matchedRoutes.push(this.options.notFoundRoute);
      } else {
        isGlobalNotFound = true;
      }
    }
    while (routeCursor.parentRoute) {
      routeCursor = routeCursor.parentRoute;
      matchedRoutes.unshift(routeCursor);
    }
    const globalNotFoundRouteId = (() => {
      if (!isGlobalNotFound) {
        return void 0;
      }
      if (this.options.notFoundMode !== "root") {
        for (let i = matchedRoutes.length - 1; i >= 0; i--) {
          const route = matchedRoutes[i];
          if (route.children) {
            return route.id;
          }
        }
      }
      return rootRouteId;
    })();
    const parseErrors = matchedRoutes.map((route) => {
      var _a;
      let parsedParamsError;
      const parseParams = ((_a = route.options.params) == null ? void 0 : _a.parse) ?? route.options.parseParams;
      if (parseParams) {
        try {
          const parsedParams = parseParams(routeParams);
          Object.assign(routeParams, parsedParams);
        } catch (err) {
          parsedParamsError = new PathParamError(err.message, {
            cause: err
          });
          if (opts == null ? void 0 : opts.throwOnError) {
            throw parsedParamsError;
          }
          return parsedParamsError;
        }
      }
      return;
    });
    const matches = [];
    matchedRoutes.forEach((route, index) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      const parentMatch = matches[index - 1];
      const [preMatchSearch, searchError] = (() => {
        const parentSearch = (parentMatch == null ? void 0 : parentMatch.search) ?? next.search;
        try {
          const validator = typeof route.options.validateSearch === "object" ? route.options.validateSearch.parse : route.options.validateSearch;
          const search = (validator == null ? void 0 : validator(parentSearch)) ?? {};
          return [
            {
              ...parentSearch,
              ...search
            },
            void 0
          ];
        } catch (err) {
          const searchParamError = new SearchParamError(err.message, {
            cause: err
          });
          if (opts == null ? void 0 : opts.throwOnError) {
            throw searchParamError;
          }
          return [parentSearch, searchParamError];
        }
      })();
      const loaderDeps = ((_b = (_a = route.options).loaderDeps) == null ? void 0 : _b.call(_a, {
        search: preMatchSearch
      })) ?? "";
      const loaderDepsHash = loaderDeps ? JSON.stringify(loaderDeps) : "";
      const interpolatedPath = interpolatePath({
        path: route.fullPath,
        params: routeParams
      });
      const matchId = interpolatePath({
        path: route.id,
        params: routeParams,
        leaveWildcards: true
      }) + loaderDepsHash;
      const existingMatch = this.getMatch(matchId);
      const cause = this.state.matches.find((d) => d.id === matchId) ? "stay" : "enter";
      let match;
      if (existingMatch) {
        match = {
          ...existingMatch,
          cause,
          params: routeParams
        };
      } else {
        const status = route.options.loader || route.options.beforeLoad || route.lazyFn || routeNeedsPreload(route) ? "pending" : "success";
        match = {
          id: matchId,
          index,
          routeId: route.id,
          params: routeParams,
          pathname: joinPaths([this.basepath, interpolatedPath]),
          updatedAt: Date.now(),
          search: {},
          searchError: void 0,
          status,
          isFetching: false,
          error: void 0,
          paramsError: parseErrors[index],
          __routeContext: {},
          __beforeLoadContext: {},
          context: {},
          abortController: new AbortController(),
          fetchCount: 0,
          cause,
          loaderDeps,
          invalid: false,
          preload: false,
          links: (_d = (_c = route.options).links) == null ? void 0 : _d.call(_c),
          scripts: (_f = (_e = route.options).scripts) == null ? void 0 : _f.call(_e),
          staticData: route.options.staticData || {},
          loadPromise: createControlledPromise(),
          fullPath: route.fullPath
        };
      }
      if (match.status === "success") {
        match.meta = (_h = (_g = route.options).meta) == null ? void 0 : _h.call(_g, {
          matches,
          match,
          params: match.params,
          loaderData: match.loaderData
        });
        match.headers = (_j = (_i = route.options).headers) == null ? void 0 : _j.call(_i, {
          loaderData: match.loaderData
        });
      }
      if (!(opts == null ? void 0 : opts.preload)) {
        match.globalNotFound = globalNotFoundRouteId === route.id;
      }
      match.search = replaceEqualDeep(match.search, preMatchSearch);
      match.searchError = searchError;
      const parentMatchId = parentMatch == null ? void 0 : parentMatch.id;
      const parentContext = !parentMatchId ? this.options.context ?? {} : parentMatch.context ?? this.options.context ?? {};
      match.context = {
        ...parentContext,
        ...match.__routeContext,
        ...match.__beforeLoadContext
      };
      const contextFnContext = {
        search: match.search,
        params: match.params,
        context: match.context,
        location: next,
        navigate: (opts2) => this.navigate({ ...opts2, _fromLocation: next }),
        buildLocation: this.buildLocation,
        cause: match.cause,
        abortController: match.abortController,
        preload: !!match.preload,
        matches
      };
      match.__routeContext = ((_l = (_k = route.options).context) == null ? void 0 : _l.call(_k, contextFnContext)) ?? {};
      match.context = {
        ...parentContext,
        ...match.__routeContext,
        ...match.__beforeLoadContext
      };
      matches.push(match);
    });
    return matches;
  }
};
function lazyFn(fn, key) {
  return async (...args) => {
    const imported = await fn();
    return imported[key || "default"](...args);
  };
}
var SearchParamError = class extends Error {
};
var PathParamError = class extends Error {
};
function getInitialRouterState(location) {
  return {
    loadedAt: 0,
    isLoading: false,
    isTransitioning: false,
    status: "idle",
    resolvedLocation: { ...location },
    location,
    matches: [],
    pendingMatches: [],
    cachedMatches: [],
    statusCode: 200
  };
}
function defaultSerializeError(err) {
  if (err instanceof Error) {
    const obj = {
      name: err.name,
      message: err.message
    };
    if (true) {
      obj.stack = err.stack;
    }
    return obj;
  }
  return {
    data: err
  };
}

// node_modules/@tanstack/react-router/dist/esm/defer.js
function defer(_promise, options) {
  const promise = _promise;
  if (!promise.status) {
    Object.assign(promise, {
      status: "pending"
    });
    promise.then((data) => {
      promise.status = "success";
      promise.data = data;
    }).catch((error) => {
      promise.status = "error";
      promise.error = {
        data: ((options == null ? void 0 : options.serializeError) ?? defaultSerializeError)(error),
        __isServerError: true
      };
    });
  }
  return promise;
}

// node_modules/@tanstack/react-router/dist/esm/isServerSideError.js
function isServerSideError(error) {
  if (!(typeof error === "object" && error && "data" in error)) return false;
  if (!("__isServerError" in error && error.__isServerError)) return false;
  if (!(typeof error.data === "object" && error.data)) return false;
  return error.__isServerError === true;
}
function defaultDeserializeError(serializedData) {
  if ("name" in serializedData && "message" in serializedData) {
    const error = new Error(serializedData.message);
    error.name = serializedData.name;
    if (true) {
      error.stack = serializedData.stack;
    }
    return error;
  }
  return serializedData.data;
}

// node_modules/@tanstack/react-router/dist/esm/awaited.js
function useAwaited({
  promise: _promise
}) {
  var _a, _b;
  const router = useRouter();
  const promise = _promise;
  defer(promise);
  if (promise.status === "pending") {
    throw promise;
  }
  if (promise.status === "error") {
    if (typeof document !== "undefined") {
      if (isServerSideError(promise.error)) {
        throw (((_a = router.options.errorSerializer) == null ? void 0 : _a.deserialize) ?? defaultDeserializeError)(promise.error.data);
      } else {
        tiny_warning_esm_default(
          false,
          "Encountered a server-side error that doesn't fit the expected shape"
        );
        throw promise.error;
      }
    } else {
      throw {
        data: (((_b = router.options.errorSerializer) == null ? void 0 : _b.serialize) ?? defaultSerializeError)(promise.error),
        __isServerError: true
      };
    }
  }
  return [promise.data, promise];
}
function Await(props) {
  const inner = (0, import_jsx_runtime3.jsx)(AwaitInner, { ...props });
  if (props.fallback) {
    return (0, import_jsx_runtime3.jsx)(React5.Suspense, { fallback: props.fallback, children: inner });
  }
  return inner;
}
function AwaitInner(props) {
  const [data] = useAwaited(props);
  return props.children(data);
}

// node_modules/@tanstack/react-router/dist/esm/ScriptOnce.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
function ScriptOnce({
  className,
  children,
  log,
  ...rest
}) {
  if (typeof document !== "undefined") {
    return null;
  }
  return (0, import_jsx_runtime4.jsx)(
    "script",
    {
      ...rest,
      className: `tsr-once ${className || ""}`,
      dangerouslySetInnerHTML: {
        __html: [
          children,
          (log ?? true) && true ? `console.info(\`Injected From Server:
${children}\`)` : ""
        ].filter(Boolean).join("\n")
      }
    }
  );
}

// node_modules/@tanstack/react-router/dist/esm/useMatch.js
var React7 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-router/dist/esm/matchContext.js
var React6 = __toESM(require_react(), 1);
var matchContext = React6.createContext(void 0);

// node_modules/@tanstack/react-router/dist/esm/useMatch.js
function useMatch(opts) {
  const nearestMatchId = React7.useContext(matchContext);
  const matchSelection = useRouterState({
    select: (state) => {
      const match = state.matches.find(
        (d) => opts.from ? opts.from === d.routeId : d.id === nearestMatchId
      );
      invariant(
        !((opts.shouldThrow ?? true) && !match),
        `Could not find ${opts.from ? `an active match from "${opts.from}"` : "a nearest match!"}`
      );
      if (match === void 0) {
        return void 0;
      }
      return opts.select ? opts.select(match) : match;
    }
  });
  return matchSelection;
}

// node_modules/@tanstack/react-router/dist/esm/useLoaderDeps.js
function useLoaderDeps(opts) {
  return useMatch({
    ...opts,
    select: (s) => {
      return typeof opts.select === "function" ? opts.select(s.loaderDeps) : s.loaderDeps;
    }
  });
}

// node_modules/@tanstack/react-router/dist/esm/useLoaderData.js
function useLoaderData(opts) {
  return useMatch({
    ...opts,
    select: (s) => {
      return typeof opts.select === "function" ? opts.select(s.loaderData) : s.loaderData;
    }
  });
}

// node_modules/@tanstack/react-router/dist/esm/useParams.js
function useParams(opts) {
  return useMatch({
    ...opts,
    select: (match) => {
      return opts.select ? opts.select(match.params) : match.params;
    }
  });
}

// node_modules/@tanstack/react-router/dist/esm/useSearch.js
function useSearch(opts) {
  return useMatch({
    ...opts,
    select: (match) => {
      return opts.select ? opts.select(match.search) : match.search;
    }
  });
}

// node_modules/@tanstack/react-router/dist/esm/useNavigate.js
var React8 = __toESM(require_react(), 1);
function useNavigate(_defaultOpts) {
  const { navigate } = useRouter();
  return React8.useCallback(
    (options) => {
      return navigate({
        ...options
      });
    },
    [navigate]
  );
}
function Navigate(props) {
  const { navigate } = useRouter();
  React8.useEffect(() => {
    navigate({
      ...props
    });
  }, []);
  return null;
}

// node_modules/@tanstack/react-router/dist/esm/route.js
function getRouteApi(id) {
  return new RouteApi({ id });
}
var RouteApi = class {
  /**
   * @deprecated Use the `getRouteApi` function instead.
   */
  constructor({ id }) {
    this.useMatch = (opts) => {
      return useMatch({ select: opts == null ? void 0 : opts.select, from: this.id });
    };
    this.useRouteContext = (opts) => {
      return useMatch({
        from: this.id,
        select: (d) => (opts == null ? void 0 : opts.select) ? opts.select(d.context) : d.context
      });
    };
    this.useSearch = (opts) => {
      return useSearch({ ...opts, from: this.id });
    };
    this.useParams = (opts) => {
      return useParams({ ...opts, from: this.id });
    };
    this.useLoaderDeps = (opts) => {
      return useLoaderDeps({ ...opts, from: this.id, strict: false });
    };
    this.useLoaderData = (opts) => {
      return useLoaderData({ ...opts, from: this.id, strict: false });
    };
    this.useNavigate = () => {
      return useNavigate({ from: this.id });
    };
    this.notFound = (opts) => {
      return notFound({ routeId: this.id, ...opts });
    };
    this.id = id;
  }
};
var Route = class {
  /**
   * @deprecated Use the `createRoute` function instead.
   */
  constructor(options) {
    this.init = (opts) => {
      var _a, _b;
      this.originalIndex = opts.originalIndex;
      const options2 = this.options;
      const isRoot = !(options2 == null ? void 0 : options2.path) && !(options2 == null ? void 0 : options2.id);
      this.parentRoute = (_b = (_a = this.options).getParentRoute) == null ? void 0 : _b.call(_a);
      if (isRoot) {
        this._path = rootRouteId;
      } else {
        invariant(
          this.parentRoute,
          `Child Route instances must pass a 'getParentRoute: () => ParentRoute' option that returns a Route instance.`
        );
      }
      let path = isRoot ? rootRouteId : options2.path;
      if (path && path !== "/") {
        path = trimPathLeft(path);
      }
      const customId = (options2 == null ? void 0 : options2.id) || path;
      let id = isRoot ? rootRouteId : joinPaths([
        this.parentRoute.id === rootRouteId ? "" : this.parentRoute.id,
        customId
      ]);
      if (path === rootRouteId) {
        path = "/";
      }
      if (id !== rootRouteId) {
        id = joinPaths(["/", id]);
      }
      const fullPath = id === rootRouteId ? "/" : joinPaths([this.parentRoute.fullPath, path]);
      this._path = path;
      this._id = id;
      this._fullPath = fullPath;
      this._to = fullPath;
      this._ssr = (options2 == null ? void 0 : options2.ssr) ?? opts.defaultSsr ?? true;
    };
    this.updateLoader = (options2) => {
      Object.assign(this.options, options2);
      return this;
    };
    this.update = (options2) => {
      Object.assign(this.options, options2);
      return this;
    };
    this.lazy = (lazyFn2) => {
      this.lazyFn = lazyFn2;
      return this;
    };
    this.useMatch = (opts) => {
      return useMatch({ ...opts, from: this.id });
    };
    this.useRouteContext = (opts) => {
      return useMatch({
        ...opts,
        from: this.id,
        select: (d) => (opts == null ? void 0 : opts.select) ? opts.select(d.context) : d.context
      });
    };
    this.useSearch = (opts) => {
      return useSearch({ ...opts, from: this.id });
    };
    this.useParams = (opts) => {
      return useParams({ ...opts, from: this.id });
    };
    this.useLoaderDeps = (opts) => {
      return useLoaderDeps({ ...opts, from: this.id });
    };
    this.useLoaderData = (opts) => {
      return useLoaderData({ ...opts, from: this.id });
    };
    this.useNavigate = () => {
      return useNavigate({ from: this.id });
    };
    this.options = options || {};
    this.isRoot = !(options == null ? void 0 : options.getParentRoute);
    invariant(
      !((options == null ? void 0 : options.id) && (options == null ? void 0 : options.path)),
      `Route cannot have both an 'id' and a 'path' option.`
    );
    this.$$typeof = Symbol.for("react.memo");
  }
  get to() {
    return this._to;
  }
  get id() {
    return this._id;
  }
  get path() {
    return this._path;
  }
  get fullPath() {
    return this._fullPath;
  }
  get ssr() {
    return this._ssr;
  }
  addChildren(children) {
    return this._addFileChildren(children);
  }
  _addFileChildren(children) {
    if (Array.isArray(children)) {
      this.children = children;
    }
    if (typeof children === "object" && children !== null) {
      this.children = Object.values(children);
    }
    return this;
  }
};
function createRoute(options) {
  return new Route(options);
}
function createRootRouteWithContext() {
  return (options) => {
    return createRootRoute(options);
  };
}
var rootRouteWithContext = createRootRouteWithContext;
var RootRoute = class extends Route {
  /**
   * @deprecated `RootRoute` is now an internal implementation detail. Use `createRootRoute()` instead.
   */
  constructor(options) {
    super(options);
  }
  addChildren(children) {
    super.addChildren(children);
    return this;
  }
  _addFileChildren(children) {
    super._addFileChildren(children);
    return this;
  }
  _addFileTypes() {
    return this;
  }
};
function createRootRoute(options) {
  return new RootRoute(options);
}
function createRouteMask(opts) {
  return opts;
}
var NotFoundRoute = class extends Route {
  constructor(options) {
    super({
      ...options,
      id: "404"
    });
  }
};

// node_modules/@tanstack/react-router/dist/esm/fileRoute.js
function createFileRoute(path) {
  return new FileRoute(path, {
    silent: true
  }).createRoute;
}
var FileRoute = class {
  constructor(path, _opts) {
    this.path = path;
    this.createRoute = (options) => {
      tiny_warning_esm_default(
        this.silent,
        "FileRoute is deprecated and will be removed in the next major version. Use the createFileRoute(path)(options) function instead."
      );
      const route = createRoute(options);
      route.isRoot = false;
      return route;
    };
    this.silent = _opts == null ? void 0 : _opts.silent;
  }
};
function FileRouteLoader(_path) {
  tiny_warning_esm_default(
    false,
    `FileRouteLoader is deprecated and will be removed in the next major version. Please place the loader function in the the main route file, inside the \`createFileRoute('/path/to/file')(options)\` options`
  );
  return (loaderFn) => loaderFn;
}
var LazyRoute = class {
  constructor(opts) {
    this.useMatch = (opts2) => {
      return useMatch({ select: opts2 == null ? void 0 : opts2.select, from: this.options.id });
    };
    this.useRouteContext = (opts2) => {
      return useMatch({
        from: this.options.id,
        select: (d) => (opts2 == null ? void 0 : opts2.select) ? opts2.select(d.context) : d.context
      });
    };
    this.useSearch = (opts2) => {
      return useSearch({ ...opts2, from: this.options.id });
    };
    this.useParams = (opts2) => {
      return useParams({ ...opts2, from: this.options.id });
    };
    this.useLoaderDeps = (opts2) => {
      return useLoaderDeps({ ...opts2, from: this.options.id });
    };
    this.useLoaderData = (opts2) => {
      return useLoaderData({ ...opts2, from: this.options.id });
    };
    this.useNavigate = () => {
      return useNavigate({ from: this.options.id });
    };
    this.options = opts;
    this.$$typeof = Symbol.for("react.memo");
  }
};
function createLazyRoute(id) {
  return (opts) => {
    return new LazyRoute({ id, ...opts });
  };
}
var routeGroupPatternRegex = /\(.+\)/g;
function removeGroups(s) {
  return s.replaceAll(routeGroupPatternRegex, "").replaceAll("//", "/");
}
function createLazyFileRoute(id) {
  return (opts) => new LazyRoute({ id: removeGroups(id), ...opts });
}

// node_modules/@tanstack/react-router/dist/esm/lazyRouteComponent.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var React10 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-router/dist/esm/Match.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var React9 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-router/dist/esm/SafeFragment.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
function SafeFragment(props) {
  return (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children: props.children });
}

// node_modules/@tanstack/react-router/dist/esm/renderRouteNotFound.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
function renderRouteNotFound(router, route, data) {
  if (!route.options.notFoundComponent) {
    if (router.options.defaultNotFoundComponent) {
      return (0, import_jsx_runtime6.jsx)(router.options.defaultNotFoundComponent, { data });
    }
    if (true) {
      tiny_warning_esm_default(
        route.options.notFoundComponent,
        `A notFoundError was encountered on the route with ID "${route.id}", but a notFoundComponent option was not configured, nor was a router level defaultNotFoundComponent configured. Consider configuring at least one of these to avoid TanStack Router's overly generic defaultNotFoundComponent (<div>Not Found<div>)`
      );
    }
    return (0, import_jsx_runtime6.jsx)(DefaultGlobalNotFound, {});
  }
  return (0, import_jsx_runtime6.jsx)(route.options.notFoundComponent, { data });
}

// node_modules/@tanstack/react-router/dist/esm/Match.js
var Match = React9.memo(function MatchImpl({
  matchId
}) {
  var _a, _b;
  const router = useRouter();
  const routeId = useRouterState({
    select: (s) => {
      var _a2;
      return (_a2 = s.matches.find((d) => d.id === matchId)) == null ? void 0 : _a2.routeId;
    }
  });
  invariant(
    routeId,
    `Could not find routeId for matchId "${matchId}". Please file an issue!`
  );
  const route = router.routesById[routeId];
  const PendingComponent = route.options.pendingComponent ?? router.options.defaultPendingComponent;
  const pendingElement = PendingComponent ? (0, import_jsx_runtime7.jsx)(PendingComponent, {}) : null;
  const routeErrorComponent = route.options.errorComponent ?? router.options.defaultErrorComponent;
  const routeOnCatch = route.options.onCatch ?? router.options.defaultOnCatch;
  const routeNotFoundComponent = route.isRoot ? (
    // If it's the root route, use the globalNotFound option, with fallback to the notFoundRoute's component
    route.options.notFoundComponent ?? ((_a = router.options.notFoundRoute) == null ? void 0 : _a.options.component)
  ) : route.options.notFoundComponent;
  const ResolvedSuspenseBoundary = (
    // If we're on the root route, allow forcefully wrapping in suspense
    (!route.isRoot || route.options.wrapInSuspense) && (route.options.wrapInSuspense ?? PendingComponent ?? ((_b = route.options.errorComponent) == null ? void 0 : _b.preload)) ? React9.Suspense : SafeFragment
  );
  const ResolvedCatchBoundary = routeErrorComponent ? CatchBoundary : SafeFragment;
  const ResolvedNotFoundBoundary = routeNotFoundComponent ? CatchNotFound : SafeFragment;
  const resetKey = useRouterState({
    select: (s) => s.loadedAt
  });
  return (0, import_jsx_runtime7.jsx)(matchContext.Provider, { value: matchId, children: (0, import_jsx_runtime7.jsx)(ResolvedSuspenseBoundary, { fallback: pendingElement, children: (0, import_jsx_runtime7.jsx)(
    ResolvedCatchBoundary,
    {
      getResetKey: () => resetKey,
      errorComponent: routeErrorComponent || ErrorComponent,
      onCatch: (error, errorInfo) => {
        if (isNotFound(error)) throw error;
        tiny_warning_esm_default(false, `Error in route match: ${matchId}`);
        routeOnCatch == null ? void 0 : routeOnCatch(error, errorInfo);
      },
      children: (0, import_jsx_runtime7.jsx)(
        ResolvedNotFoundBoundary,
        {
          fallback: (error) => {
            if (!routeNotFoundComponent || error.routeId && error.routeId !== routeId || !error.routeId && !route.isRoot)
              throw error;
            return React9.createElement(routeNotFoundComponent, error);
          },
          children: (0, import_jsx_runtime7.jsx)(MatchInner, { matchId })
        }
      )
    }
  ) }) });
});
var MatchInner = React9.memo(function MatchInnerImpl({
  matchId
}) {
  var _a, _b, _c;
  const router = useRouter();
  const { match, matchIndex, routeId } = useRouterState({
    select: (s) => {
      const matchIndex2 = s.matches.findIndex((d) => d.id === matchId);
      const match2 = s.matches[matchIndex2];
      const routeId2 = match2.routeId;
      return {
        routeId: routeId2,
        matchIndex: matchIndex2,
        match: pick(match2, ["id", "status", "error", "loadPromise"])
      };
    }
  });
  const route = router.routesById[routeId];
  const out = React9.useMemo(() => {
    const Comp = route.options.component ?? router.options.defaultComponent;
    return Comp ? (0, import_jsx_runtime7.jsx)(Comp, {}) : (0, import_jsx_runtime7.jsx)(Outlet, {});
  }, [route.options.component, router.options.defaultComponent]);
  const RouteErrorComponent = (route.options.errorComponent ?? router.options.defaultErrorComponent) || ErrorComponent;
  if (match.status === "notFound") {
    let error;
    if (isServerSideError(match.error)) {
      const deserializeError = ((_a = router.options.errorSerializer) == null ? void 0 : _a.deserialize) ?? defaultDeserializeError;
      error = deserializeError(match.error.data);
    } else {
      error = match.error;
    }
    invariant(isNotFound(error), "Expected a notFound error");
    return renderRouteNotFound(router, route, error);
  }
  if (match.status === "redirected") {
    invariant(isRedirect(match.error), "Expected a redirect error");
    throw match.loadPromise;
  }
  if (match.status === "error") {
    if (router.isServer) {
      return (0, import_jsx_runtime7.jsx)(
        RouteErrorComponent,
        {
          error: match.error,
          info: {
            componentStack: ""
          }
        }
      );
    }
    if (isServerSideError(match.error)) {
      const deserializeError = ((_b = router.options.errorSerializer) == null ? void 0 : _b.deserialize) ?? defaultDeserializeError;
      throw deserializeError(match.error.data);
    } else {
      throw match.error;
    }
  }
  if (match.status === "pending") {
    const pendingMinMs = route.options.pendingMinMs ?? router.options.defaultPendingMinMs;
    if (pendingMinMs && !((_c = router.getMatch(match.id)) == null ? void 0 : _c.minPendingPromise)) {
      if (!router.isServer) {
        const minPendingPromise = createControlledPromise();
        Promise.resolve().then(() => {
          router.updateMatch(match.id, (prev) => ({
            ...prev,
            minPendingPromise
          }));
        });
        setTimeout(() => {
          minPendingPromise.resolve();
          router.updateMatch(match.id, (prev) => ({
            ...prev,
            minPendingPromise: void 0
          }));
        }, pendingMinMs);
      }
    }
    throw match.loadPromise;
  }
  return (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
    out,
    router.AfterEachMatch ? (0, import_jsx_runtime7.jsx)(router.AfterEachMatch, { match, matchIndex }) : null
  ] });
});
var Outlet = React9.memo(function OutletImpl() {
  const router = useRouter();
  const matchId = React9.useContext(matchContext);
  const routeId = useRouterState({
    select: (s) => {
      var _a;
      return (_a = s.matches.find((d) => d.id === matchId)) == null ? void 0 : _a.routeId;
    }
  });
  const route = router.routesById[routeId];
  const { parentGlobalNotFound } = useRouterState({
    select: (s) => {
      const matches = s.matches;
      const parentMatch = matches.find((d) => d.id === matchId);
      invariant(
        parentMatch,
        `Could not find parent match for matchId "${matchId}"`
      );
      return {
        parentGlobalNotFound: parentMatch.globalNotFound
      };
    }
  });
  const childMatchId = useRouterState({
    select: (s) => {
      var _a;
      const matches = s.matches;
      const index = matches.findIndex((d) => d.id === matchId);
      return (_a = matches[index + 1]) == null ? void 0 : _a.id;
    }
  });
  if (parentGlobalNotFound) {
    return renderRouteNotFound(router, route, void 0);
  }
  if (!childMatchId) {
    return null;
  }
  const nextMatch = (0, import_jsx_runtime7.jsx)(Match, { matchId: childMatchId });
  const pendingElement = router.options.defaultPendingComponent ? (0, import_jsx_runtime7.jsx)(router.options.defaultPendingComponent, {}) : null;
  if (matchId === rootRouteId) {
    return (0, import_jsx_runtime7.jsx)(React9.Suspense, { fallback: pendingElement, children: nextMatch });
  }
  return nextMatch;
});

// node_modules/@tanstack/react-router/dist/esm/lazyRouteComponent.js
function isModuleNotFoundError(error) {
  return typeof (error == null ? void 0 : error.message) === "string" && /Failed to fetch dynamically imported module/.test(error.message);
}
function ClientOnly({
  children,
  fallback = null
}) {
  return useHydrated() ? (0, import_jsx_runtime8.jsx)(import_jsx_runtime8.Fragment, { children }) : (0, import_jsx_runtime8.jsx)(import_jsx_runtime8.Fragment, { children: fallback });
}
function subscribe() {
  return () => {
  };
}
function useHydrated() {
  return React10.useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
function lazyRouteComponent(importer, exportName, ssr) {
  let loadPromise;
  let comp;
  let error;
  const load = () => {
    if (typeof document === "undefined" && (ssr == null ? void 0 : ssr()) === false) {
      comp = () => null;
      return Promise.resolve();
    }
    if (!loadPromise) {
      loadPromise = importer().then((res) => {
        loadPromise = void 0;
        comp = res[exportName ?? "default"];
      }).catch((err) => {
        error = err;
      });
    }
    return loadPromise;
  };
  const lazyComp = function Lazy(props) {
    if (error) {
      if (isModuleNotFoundError(error)) {
        if (error instanceof Error && typeof window !== "undefined" && typeof sessionStorage !== "undefined") {
          const storageKey = `tanstack_router_reload:${error.message}`;
          if (!sessionStorage.getItem(storageKey)) {
            sessionStorage.setItem(storageKey, "1");
            window.location.reload();
            return {
              default: () => null
            };
          }
        }
      }
      throw error;
    }
    if (!comp) {
      throw load();
    }
    if ((ssr == null ? void 0 : ssr()) === false) {
      return (0, import_jsx_runtime8.jsx)(ClientOnly, { fallback: (0, import_jsx_runtime8.jsx)(Outlet, {}), children: React10.createElement(comp, props) });
    }
    return React10.createElement(comp, props);
  };
  lazyComp.preload = load;
  return lazyComp;
}

// node_modules/@tanstack/react-router/dist/esm/link.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var React11 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var preloadWarning = "Error preloading route! ☝️";
function useLinkProps(options, forwardedRef) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = React11.useState(false);
  const innerRef = useForwardedRef(forwardedRef);
  const {
    // custom props
    activeProps = () => ({ className: "active" }),
    inactiveProps = () => ({}),
    activeOptions,
    hash,
    search,
    params,
    to,
    state,
    mask,
    preload: userPreload,
    preloadDelay: userPreloadDelay,
    replace,
    startTransition,
    resetScroll,
    viewTransition,
    // element props
    children,
    target,
    disabled,
    style,
    className,
    onClick,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    onTouchStart,
    ignoreBlocker,
    ...rest
  } = options;
  const type = React11.useMemo(() => {
    try {
      new URL(`${to}`);
      return "external";
    } catch {
    }
    return "internal";
  }, [to]);
  const next = React11.useMemo(
    () => router.buildLocation(options),
    [router, options]
  );
  const preload = React11.useMemo(
    () => userPreload ?? router.options.defaultPreload,
    [router.options.defaultPreload, userPreload]
  );
  const preloadDelay = userPreloadDelay ?? router.options.defaultPreloadDelay ?? 0;
  const isActive = useRouterState({
    select: (s) => {
      const currentPathSplit = removeTrailingSlash(
        s.location.pathname,
        router.basepath
      ).split("/");
      const nextPathSplit = removeTrailingSlash(
        next.pathname,
        router.basepath
      ).split("/");
      const pathIsFuzzyEqual = nextPathSplit.every(
        (d, i) => d === currentPathSplit[i]
      );
      const pathTest = (activeOptions == null ? void 0 : activeOptions.exact) ? exactPathTest(s.location.pathname, next.pathname, router.basepath) : pathIsFuzzyEqual;
      const hashTest = (activeOptions == null ? void 0 : activeOptions.includeHash) ? s.location.hash === next.hash : true;
      const searchTest = (activeOptions == null ? void 0 : activeOptions.includeSearch) ?? true ? deepEqual(s.location.search, next.search, !(activeOptions == null ? void 0 : activeOptions.exact)) : true;
      return pathTest && hashTest && searchTest;
    }
  });
  const doPreload = React11.useCallback(() => {
    router.preloadRoute(options).catch((err) => {
      console.warn(err);
      console.warn(preloadWarning);
    });
  }, [options, router]);
  const preloadViewportIoCallback = React11.useCallback(
    (entry) => {
      if (entry == null ? void 0 : entry.isIntersecting) {
        doPreload();
      }
    },
    [doPreload]
  );
  useIntersectionObserver(
    innerRef,
    preloadViewportIoCallback,
    { rootMargin: "100px" },
    { disabled: !!disabled || preload !== "viewport" }
  );
  if (type === "external") {
    return {
      ...rest,
      ref: innerRef,
      type,
      href: to,
      ...children && { children },
      ...target && { target },
      ...disabled && { disabled },
      ...style && { style },
      ...className && { className },
      ...onClick && { onClick },
      ...onFocus && { onFocus },
      ...onMouseEnter && { onMouseEnter },
      ...onMouseLeave && { onMouseLeave },
      ...onTouchStart && { onTouchStart }
    };
  }
  const handleClick = (e) => {
    if (!disabled && !isCtrlEvent(e) && !e.defaultPrevented && (!target || target === "_self") && e.button === 0) {
      e.preventDefault();
      (0, import_react_dom.flushSync)(() => {
        setIsTransitioning(true);
      });
      const unsub = router.subscribe("onResolved", () => {
        unsub();
        setIsTransitioning(false);
      });
      router.commitLocation({
        ...next,
        replace,
        resetScroll,
        startTransition,
        viewTransition,
        ignoreBlocker
      });
    }
  };
  const handleFocus = (_) => {
    if (disabled) return;
    if (preload) {
      doPreload();
    }
  };
  const handleTouchStart = handleFocus;
  const handleEnter = (e) => {
    if (disabled) return;
    const eventTarget = e.target || {};
    if (preload) {
      if (eventTarget.preloadTimeout) {
        return;
      }
      eventTarget.preloadTimeout = setTimeout(() => {
        eventTarget.preloadTimeout = null;
        doPreload();
      }, preloadDelay);
    }
  };
  const handleLeave = (e) => {
    if (disabled) return;
    const eventTarget = e.target || {};
    if (eventTarget.preloadTimeout) {
      clearTimeout(eventTarget.preloadTimeout);
      eventTarget.preloadTimeout = null;
    }
  };
  const composeHandlers = (handlers) => (e) => {
    var _a;
    (_a = e.persist) == null ? void 0 : _a.call(e);
    handlers.filter(Boolean).forEach((handler) => {
      if (e.defaultPrevented) return;
      handler(e);
    });
  };
  const resolvedActiveProps = isActive ? functionalUpdate(activeProps, {}) ?? {} : {};
  const resolvedInactiveProps = isActive ? {} : functionalUpdate(inactiveProps, {});
  const resolvedClassName = [
    className,
    resolvedActiveProps.className,
    resolvedInactiveProps.className
  ].filter(Boolean).join(" ");
  const resolvedStyle = {
    ...style,
    ...resolvedActiveProps.style,
    ...resolvedInactiveProps.style
  };
  return {
    ...rest,
    ...resolvedActiveProps,
    ...resolvedInactiveProps,
    href: disabled ? void 0 : next.maskedLocation ? router.history.createHref(next.maskedLocation.href) : router.history.createHref(next.href),
    ref: innerRef,
    onClick: composeHandlers([onClick, handleClick]),
    onFocus: composeHandlers([onFocus, handleFocus]),
    onMouseEnter: composeHandlers([onMouseEnter, handleEnter]),
    onMouseLeave: composeHandlers([onMouseLeave, handleLeave]),
    onTouchStart: composeHandlers([onTouchStart, handleTouchStart]),
    disabled: !!disabled,
    target,
    ...Object.keys(resolvedStyle).length && { style: resolvedStyle },
    ...resolvedClassName && { className: resolvedClassName },
    ...disabled && {
      role: "link",
      "aria-disabled": true
    },
    ...isActive && { "data-status": "active", "aria-current": "page" },
    ...isTransitioning && { "data-transitioning": "transitioning" }
  };
}
function createLink(Comp) {
  return React11.forwardRef(function CreatedLink(props, ref) {
    return (0, import_jsx_runtime9.jsx)(Link, { ...props, _asChild: Comp, ref });
  });
}
var Link = React11.forwardRef(
  (props, ref) => {
    const { _asChild, ...rest } = props;
    const { type, ref: innerRef, ...linkProps } = useLinkProps(rest, ref);
    const children = typeof rest.children === "function" ? rest.children({
      isActive: linkProps["data-status"] === "active"
    }) : rest.children;
    if (typeof _asChild === "undefined") {
      delete linkProps.disabled;
    }
    return React11.createElement(
      _asChild ? _asChild : "a",
      {
        ...linkProps,
        ref: innerRef
      },
      children
    );
  }
);
function isCtrlEvent(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}

// node_modules/@tanstack/react-router/dist/esm/Matches.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var React13 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-router/dist/esm/Transitioner.js
var React12 = __toESM(require_react(), 1);
function Transitioner() {
  const router = useRouter();
  const mountLoadForRouter = React12.useRef({ router, mounted: false });
  const routerState = useRouterState({
    select: (s) => pick(s, ["isLoading", "location", "resolvedLocation", "isTransitioning"])
  });
  const [isTransitioning, startReactTransition_] = React12.useTransition();
  const hasPendingMatches = useRouterState({
    select: (s) => s.matches.some((d) => d.status === "pending")
  });
  const previousIsLoading = usePrevious(routerState.isLoading);
  const isAnyPending = routerState.isLoading || isTransitioning || hasPendingMatches;
  const previousIsAnyPending = usePrevious(isAnyPending);
  if (!router.isServer) {
    router.startReactTransition = startReactTransition_;
  }
  React12.useEffect(() => {
    const unsub = router.history.subscribe(router.load);
    const nextLocation = router.buildLocation({
      to: router.latestLocation.pathname,
      search: true,
      params: true,
      hash: true,
      state: true
    });
    if (trimPathRight(router.latestLocation.href) !== trimPathRight(nextLocation.href)) {
      router.commitLocation({ ...nextLocation, replace: true });
    }
    return () => {
      unsub();
    };
  }, [router, router.history]);
  useLayoutEffect2(() => {
    var _a;
    if (typeof window !== "undefined" && ((_a = window.__TSR__) == null ? void 0 : _a.dehydrated) || mountLoadForRouter.current.router === router && mountLoadForRouter.current.mounted) {
      return;
    }
    mountLoadForRouter.current = { router, mounted: true };
    const tryLoad = async () => {
      try {
        await router.load();
      } catch (err) {
        console.error(err);
      }
    };
    tryLoad();
  }, [router]);
  useLayoutEffect2(() => {
    if (previousIsLoading && !routerState.isLoading) {
      const toLocation = router.state.location;
      const fromLocation = router.state.resolvedLocation;
      const pathChanged = fromLocation.href !== toLocation.href;
      router.emit({
        type: "onLoad",
        // When the new URL has committed, when the new matches have been loaded into state.matches
        fromLocation,
        toLocation,
        pathChanged
      });
    }
  }, [previousIsLoading, router, routerState.isLoading]);
  useLayoutEffect2(() => {
    if (previousIsAnyPending && !isAnyPending) {
      const toLocation = router.state.location;
      const fromLocation = router.state.resolvedLocation;
      const pathChanged = fromLocation.href !== toLocation.href;
      router.emit({
        type: "onResolved",
        fromLocation,
        toLocation,
        pathChanged
      });
      router.__store.setState((s) => ({
        ...s,
        status: "idle",
        resolvedLocation: s.location
      }));
      if (typeof document !== "undefined" && document.querySelector) {
        if (router.state.location.hash !== "") {
          const el = document.getElementById(router.state.location.hash);
          if (el) {
            el.scrollIntoView();
          }
        }
      }
    }
  }, [isAnyPending, previousIsAnyPending, router]);
  return null;
}

// node_modules/@tanstack/react-router/dist/esm/Matches.js
var isMatch = (match, path) => {
  const parts = path.split(".");
  let part;
  let value = match;
  while ((part = parts.shift()) != null && value != null) {
    value = value[part];
  }
  return value != null;
};
function Matches() {
  const router = useRouter();
  const pendingElement = router.options.defaultPendingComponent ? (0, import_jsx_runtime10.jsx)(router.options.defaultPendingComponent, {}) : null;
  const ResolvedSuspense = router.isServer || typeof document !== "undefined" && window.__TSR__ ? SafeFragment : React13.Suspense;
  const inner = (0, import_jsx_runtime10.jsxs)(ResolvedSuspense, { fallback: pendingElement, children: [
    (0, import_jsx_runtime10.jsx)(Transitioner, {}),
    (0, import_jsx_runtime10.jsx)(MatchesInner, {})
  ] });
  return router.options.InnerWrap ? (0, import_jsx_runtime10.jsx)(router.options.InnerWrap, { children: inner }) : inner;
}
function MatchesInner() {
  const matchId = useRouterState({
    select: (s) => {
      var _a;
      return (_a = s.matches[0]) == null ? void 0 : _a.id;
    }
  });
  const resetKey = useRouterState({
    select: (s) => s.loadedAt
  });
  return (0, import_jsx_runtime10.jsx)(matchContext.Provider, { value: matchId, children: (0, import_jsx_runtime10.jsx)(
    CatchBoundary,
    {
      getResetKey: () => resetKey,
      errorComponent: ErrorComponent,
      onCatch: (error) => {
        tiny_warning_esm_default(
          false,
          `The following error wasn't caught by any route! At the very least, consider setting an 'errorComponent' in your RootRoute!`
        );
        tiny_warning_esm_default(false, error.message || error.toString());
      },
      children: matchId ? (0, import_jsx_runtime10.jsx)(Match, { matchId }) : null
    }
  ) });
}
function useMatchRoute() {
  const router = useRouter();
  useRouterState({
    select: (s) => [s.location.href, s.resolvedLocation.href, s.status]
  });
  return React13.useCallback(
    (opts) => {
      const { pending, caseSensitive, fuzzy, includeSearch, ...rest } = opts;
      return router.matchRoute(rest, {
        pending,
        caseSensitive,
        fuzzy,
        includeSearch
      });
    },
    [router]
  );
}
function MatchRoute(props) {
  const matchRoute = useMatchRoute();
  const params = matchRoute(props);
  if (typeof props.children === "function") {
    return props.children(params);
  }
  return params ? props.children : null;
}
function useMatches(opts) {
  return useRouterState({
    select: (state) => {
      const matches = state.matches;
      return (opts == null ? void 0 : opts.select) ? opts.select(matches) : matches;
    }
  });
}
function useParentMatches(opts) {
  const contextMatchId = React13.useContext(matchContext);
  return useMatches({
    select: (matches) => {
      matches = matches.slice(
        0,
        matches.findIndex((d) => d.id === contextMatchId)
      );
      return (opts == null ? void 0 : opts.select) ? opts.select(matches) : matches;
    }
  });
}
function useChildMatches(opts) {
  const contextMatchId = React13.useContext(matchContext);
  return useMatches({
    select: (matches) => {
      matches = matches.slice(
        matches.findIndex((d) => d.id === contextMatchId) + 1
      );
      return (opts == null ? void 0 : opts.select) ? opts.select(matches) : matches;
    }
  });
}

// node_modules/@tanstack/react-router/dist/esm/RouterProvider.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
function RouterContextProvider({
  router,
  children,
  ...rest
}) {
  router.update({
    ...router.options,
    ...rest,
    context: {
      ...router.options.context,
      ...rest.context
    }
  });
  const routerContext2 = getRouterContext();
  const provider = (0, import_jsx_runtime11.jsx)(routerContext2.Provider, { value: router, children });
  if (router.options.Wrap) {
    return (0, import_jsx_runtime11.jsx)(router.options.Wrap, { children: provider });
  }
  return provider;
}
function RouterProvider({ router, ...rest }) {
  return (0, import_jsx_runtime11.jsx)(RouterContextProvider, { router, ...rest, children: (0, import_jsx_runtime11.jsx)(Matches, {}) });
}

// node_modules/@tanstack/react-router/dist/esm/scroll-restoration.js
var React14 = __toESM(require_react(), 1);
var useLayoutEffect4 = typeof window !== "undefined" ? React14.useLayoutEffect : React14.useEffect;
var windowKey = "window";
var delimiter = "___";
var weakScrolledElements = /* @__PURE__ */ new WeakSet();
var sessionsStorage = typeof window !== "undefined" && window.sessionStorage;
var cache = sessionsStorage ? (() => {
  const storageKey = "tsr-scroll-restoration-v2";
  const state = JSON.parse(
    window.sessionStorage.getItem(storageKey) || "null"
  ) || { cached: {}, next: {} };
  return {
    state,
    set: (updater) => {
      cache.state = functionalUpdate(updater, cache.state);
      window.sessionStorage.setItem(storageKey, JSON.stringify(cache.state));
    }
  };
})() : void 0;
var defaultGetKey = (location) => {
  return location.state.key || location.href;
};
function useScrollRestoration(options) {
  const router = useRouter();
  useLayoutEffect4(() => {
    const getKey = (options == null ? void 0 : options.getKey) || defaultGetKey;
    const { history } = window;
    history.scrollRestoration = "manual";
    const onScroll = (event) => {
      if (weakScrolledElements.has(event.target)) return;
      weakScrolledElements.add(event.target);
      let elementSelector = "";
      if (event.target === document || event.target === window) {
        elementSelector = windowKey;
      } else {
        const attrId = event.target.getAttribute(
          "data-scroll-restoration-id"
        );
        if (attrId) {
          elementSelector = `[data-scroll-restoration-id="${attrId}"]`;
        } else {
          elementSelector = getCssSelector(event.target);
        }
      }
      if (!cache.state.next[elementSelector]) {
        cache.set((c) => ({
          ...c,
          next: {
            ...c.next,
            [elementSelector]: {
              scrollX: NaN,
              scrollY: NaN
            }
          }
        }));
      }
    };
    if (typeof document !== "undefined") {
      document.addEventListener("scroll", onScroll, true);
    }
    const unsubOnBeforeLoad = router.subscribe("onBeforeLoad", (event) => {
      if (event.pathChanged) {
        const restoreKey = getKey(event.fromLocation);
        for (const elementSelector in cache.state.next) {
          const entry = cache.state.next[elementSelector];
          if (elementSelector === windowKey) {
            entry.scrollX = window.scrollX || 0;
            entry.scrollY = window.scrollY || 0;
          } else if (elementSelector) {
            const element = document.querySelector(elementSelector);
            entry.scrollX = (element == null ? void 0 : element.scrollLeft) || 0;
            entry.scrollY = (element == null ? void 0 : element.scrollTop) || 0;
          }
          cache.set((c) => {
            const next = { ...c.next };
            delete next[elementSelector];
            return {
              ...c,
              next,
              cached: {
                ...c.cached,
                [[restoreKey, elementSelector].join(delimiter)]: entry
              }
            };
          });
        }
      }
    });
    const unsubOnResolved = router.subscribe("onResolved", (event) => {
      if (event.pathChanged) {
        if (!router.resetNextScroll) {
          return;
        }
        router.resetNextScroll = true;
        const restoreKey = getKey(event.toLocation);
        let windowRestored = false;
        for (const cacheKey in cache.state.cached) {
          const entry = cache.state.cached[cacheKey];
          const [key, elementSelector] = cacheKey.split(delimiter);
          if (key === restoreKey) {
            if (elementSelector === windowKey) {
              windowRestored = true;
              window.scrollTo(entry.scrollX, entry.scrollY);
            } else if (elementSelector) {
              const element = document.querySelector(elementSelector);
              if (element) {
                element.scrollLeft = entry.scrollX;
                element.scrollTop = entry.scrollY;
              }
            }
          }
        }
        if (!windowRestored) {
          window.scrollTo(0, 0);
        }
        cache.set((c) => ({ ...c, next: {} }));
        weakScrolledElements = /* @__PURE__ */ new WeakSet();
      }
    });
    return () => {
      document.removeEventListener("scroll", onScroll);
      unsubOnBeforeLoad();
      unsubOnResolved();
    };
  }, [options == null ? void 0 : options.getKey, router]);
}
function ScrollRestoration(props) {
  useScrollRestoration(props);
  return null;
}
function useElementScrollRestoration(options) {
  var _a;
  const router = useRouter();
  const getKey = options.getKey || defaultGetKey;
  let elementSelector = "";
  if (options.id) {
    elementSelector = `[data-scroll-restoration-id="${options.id}"]`;
  } else {
    const element = (_a = options.getElement) == null ? void 0 : _a.call(options);
    if (!element) {
      return;
    }
    elementSelector = getCssSelector(element);
  }
  const restoreKey = getKey(router.latestLocation);
  const cacheKey = [restoreKey, elementSelector].join(delimiter);
  return cache.state.cached[cacheKey];
}
function getCssSelector(el) {
  const path = [];
  let parent;
  while (parent = el.parentNode) {
    path.unshift(
      `${el.tagName}:nth-child(${[].indexOf.call(parent.children, el) + 1})`
    );
    el = parent;
  }
  return `${path.join(" > ")}`.toLowerCase();
}

// node_modules/@tanstack/react-router/dist/esm/useBlocker.js
var React15 = __toESM(require_react(), 1);
function useBlocker(blockerFnOrOpts, condition) {
  const { blockerFn, blockerCondition } = blockerFnOrOpts ? typeof blockerFnOrOpts === "function" ? { blockerFn: blockerFnOrOpts, blockerCondition: condition ?? true } : {
    blockerFn: blockerFnOrOpts.blockerFn,
    blockerCondition: blockerFnOrOpts.condition ?? true
  } : { blockerFn: void 0, blockerCondition: condition ?? true };
  const { history } = useRouter();
  const [resolver, setResolver] = React15.useState({
    status: "idle",
    proceed: () => {
    },
    reset: () => {
    }
  });
  React15.useEffect(() => {
    const blockerFnComposed = async () => {
      if (blockerFn) {
        return await blockerFn();
      }
      const promise = new Promise((resolve) => {
        setResolver({
          status: "blocked",
          proceed: () => resolve(true),
          reset: () => resolve(false)
        });
      });
      const canNavigateAsync = await promise;
      setResolver({
        status: "idle",
        proceed: () => {
        },
        reset: () => {
        }
      });
      return canNavigateAsync;
    };
    return !blockerCondition ? void 0 : history.block(blockerFnComposed);
  }, [blockerFn, blockerCondition, history]);
  return resolver;
}
function Block({ blockerFn, condition, children }) {
  const resolver = useBlocker({ blockerFn, condition });
  return children ? typeof children === "function" ? children(resolver) : children : null;
}

// node_modules/@tanstack/react-router/dist/esm/useRouteContext.js
function useRouteContext(opts) {
  return useMatch({
    ...opts,
    select: (match) => opts.select ? opts.select(match.context) : match.context
  });
}

// node_modules/@tanstack/react-router/dist/esm/useLocation.js
function useLocation(opts) {
  return useRouterState({
    select: (state) => (opts == null ? void 0 : opts.select) ? opts.select(state.location) : state.location
  });
}
export {
  Await,
  Block,
  CatchBoundary,
  CatchNotFound,
  DefaultGlobalNotFound,
  ErrorComponent,
  FileRoute,
  FileRouteLoader,
  LazyRoute,
  Link,
  Match,
  MatchRoute,
  Matches,
  Navigate,
  NotFoundRoute,
  Outlet,
  PathParamError,
  RootRoute,
  Route,
  RouteApi,
  Router,
  RouterContextProvider,
  RouterProvider,
  ScriptOnce,
  ScrollRestoration,
  SearchParamError,
  cleanPath,
  componentTypes,
  createBrowserHistory,
  createControlledPromise,
  createFileRoute,
  createHashHistory,
  createHistory,
  createLazyFileRoute,
  createLazyRoute,
  createLink,
  createMemoryHistory,
  createRootRoute,
  createRootRouteWithContext,
  createRoute,
  createRouteMask,
  createRouter,
  decode,
  deepEqual,
  defaultDeserializeError,
  defaultParseSearch,
  defaultSerializeError,
  defaultStringifySearch,
  defaultTransformer,
  defer,
  encode,
  escapeJSON,
  functionalUpdate,
  getInitialRouterState,
  getRouteApi,
  getRouterContext,
  interpolatePath,
  invariant,
  isMatch,
  isNotFound,
  isPlainArray,
  isPlainObject,
  isRedirect,
  isServerSideError,
  joinPaths,
  lazyFn,
  lazyRouteComponent,
  matchByPath,
  matchContext,
  matchPathname,
  notFound,
  parsePathname,
  parseSearchWith,
  pick,
  redirect,
  removeBasepath,
  replaceEqualDeep,
  resolvePath,
  rootRouteId,
  rootRouteWithContext,
  shallow2 as shallow,
  stringifySearchWith,
  trimPath,
  trimPathLeft,
  trimPathRight,
  useAwaited,
  useBlocker,
  useChildMatches,
  useElementScrollRestoration,
  useLayoutEffect2 as useLayoutEffect,
  useLinkProps,
  useLoaderData,
  useLoaderDeps,
  useLocation,
  useMatch,
  useMatchRoute,
  useMatches,
  useNavigate,
  useParams,
  useParentMatches,
  useRouteContext,
  useRouter,
  useRouterState,
  useScrollRestoration,
  useSearch,
  useStableCallback,
  tiny_warning_esm_default as warning
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=@tanstack_react-router.js.map
