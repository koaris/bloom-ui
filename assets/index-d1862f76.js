import { j as jsxRuntimeExports } from "./jsx-runtime-e0418ac6.js";
import { R as React, r as reactExports } from "./index-f6b91e15.js";
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = React.createContext && React.createContext(DefaultContext);
var __assign = globalThis && globalThis.__assign || function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = globalThis && globalThis.__rest || function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return React.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return React.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return React.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && React.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? React.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}
function FiCheck(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "polyline", "attr": { "points": "20 6 9 17 4 12" } }] })(props);
}
function FiX(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "line", "attr": { "x1": "18", "y1": "6", "x2": "6", "y2": "18" } }, { "tag": "line", "attr": { "x1": "6", "y1": "6", "x2": "18", "y2": "18" } }] })(props);
}
function FaUser(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 448 512" }, "child": [{ "tag": "path", "attr": { "d": "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" } }] })(props);
}
var CLASS_PART_SEPARATOR = "-";
var createClassGroupUtils = (config) => {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  const getClassGroupId = (className) => {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    if (classParts[0] === "" && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  };
  const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  };
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
};
var getGroupRecursive = (classParts, classPartObject) => {
  var _a;
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return void 0;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return (_a = classPartObject.validators.find(({
    validator
  }) => validator(classRest))) == null ? void 0 : _a.classGroupId;
};
var arbitraryPropertyRegex = /^\[(.+)\]$/;
var getGroupIdForArbitraryProperty = (className) => {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    const property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
    if (property) {
      return "arbitrary.." + property;
    }
  }
};
var createClassMap = (config) => {
  const {
    theme,
    prefix
  } = config;
  const classMap = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(([classGroupId, classGroup]) => {
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
};
var processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
  classGroup.forEach((classDefinition) => {
    if (typeof classDefinition === "string") {
      const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === "function") {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup2]) => {
      processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
    });
  });
};
var getPart = (classPartObject, path) => {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
};
var isThemeGetter = (func) => func.isThemeGetter;
var getPrefixedClassGroupEntries = (classGroupEntries, prefix) => {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(([classGroupId, classGroup]) => {
    const prefixedClassGroup = classGroup.map((classDefinition) => {
      if (typeof classDefinition === "string") {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === "object") {
        return Object.fromEntries(Object.entries(classDefinition).map(([key, value]) => [prefix + key, value]));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
};
var createLruCache = (maxCacheSize) => {
  if (maxCacheSize < 1) {
    return {
      get: () => void 0,
      set: () => {
      }
    };
  }
  let cacheSize = 0;
  let cache = /* @__PURE__ */ new Map();
  let previousCache = /* @__PURE__ */ new Map();
  const update = (key, value) => {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = /* @__PURE__ */ new Map();
    }
  };
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache.get(key)) !== void 0) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
};
var IMPORTANT_MODIFIER = "!";
var createParseClassName = (config) => {
  const {
    separator,
    experimentalParseClassName
  } = config;
  const isSeparatorSingleCharacter = separator.length === 1;
  const firstSeparatorCharacter = separator[0];
  const separatorLength = separator.length;
  const parseClassName = (className) => {
    const modifiers = [];
    let bracketDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index = 0; index < className.length; index++) {
      let currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === "[") {
        bracketDepth++;
      } else if (currentCharacter === "]") {
        bracketDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
  if (experimentalParseClassName) {
    return (className) => experimentalParseClassName({
      className,
      parseClassName
    });
  }
  return parseClassName;
};
var sortModifiers = (modifiers) => {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  const sortedModifiers = [];
  let unsortedModifiers = [];
  modifiers.forEach((modifier) => {
    const isArbitraryVariant = modifier[0] === "[";
    if (isArbitraryVariant) {
      sortedModifiers.push(...unsortedModifiers.sort(), modifier);
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push(...unsortedModifiers.sort());
  return sortedModifiers;
};
var createConfigUtils = (config) => ({
  cache: createLruCache(config.cacheSize),
  parseClassName: createParseClassName(config),
  ...createClassGroupUtils(config)
});
var SPLIT_CLASSES_REGEX = /\s+/;
var mergeClassList = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds
  } = configUtils;
  const classGroupsInConflict = [];
  const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = "";
  for (let index = classNames.length - 1; index >= 0; index -= 1) {
    const originalClassName = classNames[index];
    const {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(":");
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.includes(classId)) {
      continue;
    }
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i = 0; i < conflictGroups.length; ++i) {
      const group = conflictGroups[i];
      classGroupsInConflict.push(modifierId + group);
    }
    result = originalClassName + (result.length > 0 ? " " + result : result);
  }
  return result;
};
function twJoin() {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = "";
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
var toValue = (mix) => {
  if (typeof mix === "string") {
    return mix;
  }
  let resolvedValue;
  let string = "";
  for (let k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
var fromTheme = (key) => {
  const themeGetter = (theme) => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
};
var arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var fractionRegex = /^\d+\/\d+$/;
var stringLengths = /* @__PURE__ */ new Set(["px", "full", "screen"]);
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
var shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
var imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
var isLength = (value) => isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
var isArbitraryLength = (value) => getIsArbitraryValue(value, "length", isLengthOnly);
var isNumber = (value) => Boolean(value) && !Number.isNaN(Number(value));
var isArbitraryNumber = (value) => getIsArbitraryValue(value, "number", isNumber);
var isInteger = (value) => Boolean(value) && Number.isInteger(Number(value));
var isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
var isArbitraryValue = (value) => arbitraryValueRegex.test(value);
var isTshirtSize = (value) => tshirtUnitRegex.test(value);
var sizeLabels = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
var isArbitrarySize = (value) => getIsArbitraryValue(value, sizeLabels, isNever);
var isArbitraryPosition = (value) => getIsArbitraryValue(value, "position", isNever);
var imageLabels = /* @__PURE__ */ new Set(["image", "url"]);
var isArbitraryImage = (value) => getIsArbitraryValue(value, imageLabels, isImage);
var isArbitraryShadow = (value) => getIsArbitraryValue(value, "", isShadow);
var isAny = () => true;
var getIsArbitraryValue = (value, label, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return typeof label === "string" ? result[1] === label : label.has(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
};
var isLengthOnly = (value) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  lengthUnitRegex.test(value) && !colorFunctionRegex.test(value)
);
var isNever = () => false;
var isShadow = (value) => shadowRegex.test(value);
var isImage = (value) => imageRegex.test(value);
var getDefaultConfig = () => {
  const colors = fromTheme("colors");
  const spacing = fromTheme("spacing");
  const blur = fromTheme("blur");
  const brightness = fromTheme("brightness");
  const borderColor = fromTheme("borderColor");
  const borderRadius = fromTheme("borderRadius");
  const borderSpacing = fromTheme("borderSpacing");
  const borderWidth = fromTheme("borderWidth");
  const contrast = fromTheme("contrast");
  const grayscale = fromTheme("grayscale");
  const hueRotate = fromTheme("hueRotate");
  const invert = fromTheme("invert");
  const gap = fromTheme("gap");
  const gradientColorStops = fromTheme("gradientColorStops");
  const gradientColorStopPositions = fromTheme("gradientColorStopPositions");
  const inset = fromTheme("inset");
  const margin = fromTheme("margin");
  const opacity = fromTheme("opacity");
  const padding = fromTheme("padding");
  const saturate = fromTheme("saturate");
  const scale = fromTheme("scale");
  const sepia = fromTheme("sepia");
  const skew = fromTheme("skew");
  const space = fromTheme("space");
  const translate = fromTheme("translate");
  const getOverscroll = () => ["auto", "contain", "none"];
  const getOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
  const getSpacingWithAutoAndArbitrary = () => ["auto", isArbitraryValue, spacing];
  const getSpacingWithArbitrary = () => [isArbitraryValue, spacing];
  const getLengthWithEmptyAndArbitrary = () => ["", isLength, isArbitraryLength];
  const getNumberWithAutoAndArbitrary = () => ["auto", isNumber, isArbitraryValue];
  const getPositions = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  const getLineStyles = () => ["solid", "dashed", "dotted", "double", "none"];
  const getBlendModes = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
  const getAlign = () => ["start", "end", "center", "between", "around", "evenly", "stretch"];
  const getZeroAndEmpty = () => ["", "0", isArbitraryValue];
  const getBreaks = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  const getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [isAny],
      spacing: [isLength, isArbitraryLength],
      blur: ["none", "", isTshirtSize, isArbitraryValue],
      brightness: getNumberAndArbitrary(),
      borderColor: [colors],
      borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmptyAndArbitrary(),
      contrast: getNumberAndArbitrary(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumberAndArbitrary(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumberAndArbitrary(),
      scale: getNumberAndArbitrary(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...getPositions(), isArbitraryValue]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", isInteger, isArbitraryValue]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", isInteger, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...getAlign()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...getAlign(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...getAlign(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [isArbitraryValue, spacing, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [isArbitraryValue, spacing, "none", "full", "min", "max", "fit", "prose", {
          screen: [isTshirtSize]
        }, isTshirtSize]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [isArbitraryValue, spacing, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isLength, isArbitraryValue]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...getLineStyles(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", isLength, isArbitraryLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", isLength, isArbitraryValue]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...getPositions(), isArbitraryPosition]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...getLineStyles(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [borderColor]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [borderColor]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...getLineStyles()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isLength, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [isLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: getLengthWithEmptyAndArbitrary()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [isLength, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...getBlendModes(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
};
var twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
var Card = ({
  className,
  selected = false,
  direction = "row",
  size = "medium",
  disabled = false,
  image,
  imageSize = "100px",
  imageAlt = "",
  title,
  content,
  onClick,
  footer,
  hoverable = true,
  ...rest
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };
  const cardSizeClasses = {
    small: "max-w-xs p-3",
    medium: "max-w-md p-4",
    large: "max-w-lg p-5",
    full: "w-full p-5"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: twMerge(
        "min-h-[302px] max-w-[306px] flex items-center justify-around rounded-lg bg-orange-500 text-neutral-100 transition-all duration-200",
        direction === "col" ? "flex-col" : "flex-row",
        cardSizeClasses[size],
        hoverable && !disabled && "hover:shadow-md hover:shadow-neutral-500",
        // selected && 'border-2 border-orange-500',
        disabled && "opacity-50 cursor-not-allowed",
        onClick && !disabled && "cursor-pointer",
        className
      ),
      onClick: handleClick,
      role: onClick && !disabled ? "button" : void 0,
      tabIndex: onClick && !disabled ? 0 : void 0,
      onKeyDown: (e) => {
        if ((e.key === "Enter" || e.key === " ") && onClick && !disabled) {
          e.preventDefault();
          onClick();
        }
      },
      "aria-disabled": disabled,
      ...rest,
      children: [
        image && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: twMerge(
              "shrink-0",
              direction === "row" ? "mr-4" : "mb-4",
              size === "small" && direction === "row" ? "mr-3" : "",
              size === "small" && direction === "col" ? "mb-3" : ""
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: image,
                alt: imageAlt,
                width: imageSize,
                height: "auto",
                className: "rounded-sm object-cover"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: twMerge(
              "flex flex-col",
              direction === "col" && "text-center w-full",
              direction === "row" && "flex-1"
            ),
            children: [
              title && /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-md text-left font-bold leading-tight mb-1", children: title }),
              content && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: twMerge(
                "text-sm text-left"
                // direction === 'col' ? 'text-left' : 'text-left'
              ), children: content }),
              footer && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: twMerge(
                "pt-2 text-sm border-t border-neutral-300 text-left"
              ), children: footer })
            ]
          }
        )
      ]
    }
  );
};
Card.displayName = "Card";
var Button = reactExports.forwardRef(
  ({
    className,
    variant = "primary",
    size = "md",
    disabled = false,
    loading = false,
    startIcon,
    endIcon,
    fullWidth = false,
    onClick,
    children,
    ...rest
  }, ref) => {
    const sizeClasses = {
      xs: "px-3 py-1 text-xs",
      sm: "px-5 py-1.5 text-sm",
      md: "px-6 py-2 text-md",
      lg: "px-8 py-3 text-lg"
    };
    const variantClasses = {
      primary: "bg-orange-500 text-neutral-100 hover:bg-orange-700 hover:text-white focus:ring-orange-500",
      secondary: "bg-neutral text-orange-500 border border-orange-500 hover:text-white hover:bg-orange-500 focus:ring-orange-500",
      outline: "bg-transparent text-orange-500 border border-orange-500 hover:bg-orange-50 focus:ring-orange-500",
      ghost: "bg-transparent text-orange-500 hover:bg-orange-50 focus:ring-orange-500",
      link: "bg-transparent text-orange-500 hover:underline p-0 h-auto shadow-none focus:ring-0"
    };
    const handleClick = (e) => {
      if (loading || disabled)
        return;
      onClick == null ? void 0 : onClick(e);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        ref,
        className: twMerge(
          "relative font-medium rounded-xs transition-all duration-200 hover:cursor-pointer",
          "focus:outline-hidden focus:ring-2 focus:ring-offset-2 rounded-md focus:ring-opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          fullWidth ? "w-full" : "max-w-[180px]",
          "inline-flex items-center justify-center gap-2",
          (disabled || loading) && "opacity-50 cursor-not-allowed hover:shadow-none hover:bg-opacity-100",
          className
        ),
        onClick: handleClick,
        disabled: disabled || loading,
        ...rest,
        children: [
          loading && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              className: "animate-spin h-5 w-5",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "circle",
                  {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: loading ? "invisible" : "flex items-center gap-2", children: [
            startIcon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-1", children: startIcon }),
            children,
            endIcon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1", children: endIcon })
          ] })
        ]
      }
    );
  }
);
Button.displayName = "Button";
var Link = ({
  className,
  disabled,
  url,
  newPage = true,
  onClick,
  ...rest
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      className: twMerge(
        "text-blue-800 font-bold",
        typeof rest.children !== "string" && "px-4",
        disabled === true && "opacity-50 cursor-not-allowed",
        className
      ),
      href: url,
      ...newPage && { target: "_blank", rel: "noopener noreferrer" },
      ...rest
    }
  );
};
var RadioGroup = ({
  disabled,
  options = [
    { id: 1, value: "option1", label: "Opção 1" },
    { id: 2, value: "option2", label: "Opção 2" }
  ],
  required = false,
  className
}) => {
  const [selectedOption, setSelectedOption] = reactExports.useState("");
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col ", children: options.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex py-2 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "label",
      {
        htmlFor: `radio${option.id}`,
        className: twMerge(
          "relative rounded-full border-2 w-5 h-5 flex items-center justify-center hover:border-orange-500 hover:cursor-pointer",
          selectedOption === option.value ? "bg-orange-500 border-orange-500" : "border-neutral-500 hover:shadow-md hover:shadow-orange-500",
          disabled === true && "opacity-50 cursor-not-allowed",
          className
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "radio",
              id: `radio${option.id}`,
              name: "radioGroup",
              value: option.value,
              required,
              className: "hidden",
              checked: selectedOption === option.value,
              onChange: () => handleOptionChange(option.value),
              disabled
            }
          ),
          selectedOption === option.value && /* @__PURE__ */ jsxRuntimeExports.jsx(FiCheck, { color: "#FFFFFF", size: 12, style: { strokeWidth: 4 } })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2", children: option.label })
  ] }, option.id)) });
};
var Checkbox = ({ className, required, disabled }) => {
  const [selected, setSelected] = reactExports.useState(false);
  const handleCheckboxChange = (value) => {
    setSelected(!value);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "label",
    {
      className: twMerge(
        className,
        "relative  border-2 w-5 h-5 flex items-center justify-center rounded-xs hover:border-orange-500 hover:cursor-pointer",
        selected ? "bg-orange-500 border-orange-500" : "border-neutral-500 hover:shadow-md hover:shadow-orange-500",
        disabled === true && "opacity-50 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "checkbox",
            required,
            checked: selected,
            onChange: () => handleCheckboxChange(selected),
            disabled,
            className: twMerge(
              "relative z-10 hidden",
              selected ? "bg-orange-500 border-orange-500" : "border-neutral-500 hover:shadow-md hover:shadow-orange-500"
            )
          }
        ),
        selected && /* @__PURE__ */ jsxRuntimeExports.jsx(FiCheck, { color: "#FFFFFF", size: 14, style: { strokeWidth: 4 } })
      ]
    }
  ) });
};
var passwordMask = {
  password: [/^(?=.*[!@#$%^&*])/, /(?=.*[0-9])/, /.{8,}$/]
};
var phoneFormats = {
  "BR": { countryCode: "+55", format: "($1) $2-$3" },
  "US": { countryCode: "+1", format: "($1) $2-$3" },
  "UK": { countryCode: "+44", format: "$1 $2 $3" },
  "DE": { countryCode: "+49", format: "$1 $2 $3" },
  "FR": { countryCode: "+33", format: "$1 $2 $3 $4" }
};
var Input = reactExports.forwardRef(
  ({
    className,
    disabled,
    placeholder,
    value,
    validated,
    error,
    required,
    type,
    onClick,
    errorMessage,
    onChange: externalOnChange,
    label,
    helperText,
    id,
    countryCode = "BR",
    // Default to Brazil
    ...rest
  }, ref) => {
    const [selected, setSelected] = reactExports.useState(false);
    const [inputValue, setInputValue] = reactExports.useState(value || "");
    const [passwordValidation, setPasswordValidation] = reactExports.useState({
      hasEightCharacters: false,
      hasSpecialCharacters: false,
      hasNumber: false
    });
    const [isValid, setIsValid] = reactExports.useState(false);
    const handleFocus = () => {
      setSelected(true);
    };
    const handleBlur = () => {
      setSelected(false);
      validateInput(inputValue || "");
    };
    const applyMask = (value2, type2) => {
      let result = value2;
      switch (type2) {
        case "date":
          result = value2.replace(/\D/g, "");
          if (result.length > 8)
            result = result.substring(0, 8);
          if (result.length > 4)
            result = result.replace(/(\d{2})(\d{2})(\d+)/, "$1/$2/$3");
          else if (result.length > 2)
            result = result.replace(/(\d{2})(\d+)/, "$1/$2");
          break;
        case "cpf":
          result = value2.replace(/\D/g, "");
          if (result.length > 11)
            result = result.substring(0, 11);
          if (result.length > 9)
            result = result.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, "$1.$2.$3-$4");
          else if (result.length > 6)
            result = result.replace(/(\d{3})(\d{3})(\d+)/, "$1.$2.$3");
          else if (result.length > 3)
            result = result.replace(/(\d{3})(\d+)/, "$1.$2");
          break;
        case "cnpj":
          result = value2.replace(/\D/g, "");
          if (result.length > 14)
            result = result.substring(0, 14);
          if (result.length > 12)
            result = result.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d+)/, "$1.$2.$3/$4-$5");
          else if (result.length > 8)
            result = result.replace(/(\d{2})(\d{3})(\d{3})(\d+)/, "$1.$2.$3/$4");
          else if (result.length > 5)
            result = result.replace(/(\d{2})(\d{3})(\d+)/, "$1.$2.$3");
          else if (result.length > 2)
            result = result.replace(/(\d{2})(\d+)/, "$1.$2");
          break;
        case "cep":
          result = value2.replace(/\D/g, "");
          if (result.length > 8)
            result = result.substring(0, 8);
          if (result.length > 5)
            result = result.replace(/(\d{5})(\d+)/, "$1-$2");
          break;
        case "phone":
          result = applyPhoneMask(value2, countryCode);
          break;
        case "email":
          result = value2.trim();
          break;
      }
      return result;
    };
    const applyPhoneMask = (value2, countryCode2) => {
      let digits = value2.replace(/\D/g, "");
      switch (countryCode2) {
        case "BR":
          if (digits.length > 11)
            digits = digits.substring(0, 11);
          if (digits.length > 10)
            return digits.replace(/(\d{2})(\d{5})(\d+)/, "($1) $2-$3");
          else if (digits.length > 6)
            return digits.replace(/(\d{2})(\d{4})(\d+)/, "($1) $2-$3");
          else if (digits.length > 2)
            return digits.replace(/(\d{2})(\d+)/, "($1) $2");
          return digits;
        case "US":
          if (digits.length > 10)
            digits = digits.substring(0, 10);
          if (digits.length > 6)
            return digits.replace(/(\d{3})(\d{3})(\d+)/, "($1) $2-$3");
          else if (digits.length > 3)
            return digits.replace(/(\d{3})(\d+)/, "($1) $2");
          return digits;
        case "UK":
          if (digits.length > 10)
            digits = digits.substring(0, 10);
          if (digits.length > 7)
            return digits.replace(/(\d{3})(\d{3})(\d+)/, "$1 $2 $3");
          else if (digits.length > 3)
            return digits.replace(/(\d{3})(\d+)/, "$1 $2");
          return digits;
        default:
          if (digits.length > 10)
            digits = digits.substring(0, 10);
          if (digits.length > 6)
            return digits.replace(/(\d{3})(\d{3})(\d+)/, "$1 $2 $3");
          else if (digits.length > 3)
            return digits.replace(/(\d{3})(\d+)/, "$1 $2");
          return digits;
      }
    };
    const validateInput = (value2) => {
      if (!value2)
        return false;
      let valid = false;
      switch (type) {
        case "password":
          valid = passwordValidation.hasEightCharacters && passwordValidation.hasSpecialCharacters && passwordValidation.hasNumber;
          break;
        case "date":
          valid = /^\d{2}\/\d{2}\/\d{4}$/.test(value2);
          break;
        case "cpf":
          valid = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value2);
          break;
        case "cnpj":
          valid = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(value2);
          break;
        case "cep":
          valid = /^\d{5}-\d{3}$/.test(value2);
          break;
        case "phone":
          if (countryCode === "BR") {
            valid = /^\(\d{2}\) \d{5}-\d{4}$/.test(value2) || /^\(\d{2}\) \d{4}-\d{4}$/.test(value2);
          } else if (countryCode === "US") {
            valid = /^\(\d{3}\) \d{3}-\d{4}$/.test(value2);
          } else {
            valid = /^[\d\s()-]{8,}$/.test(value2);
          }
          break;
        case "email":
          valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value2);
          break;
        default:
          valid = value2.length > 0;
          break;
      }
      setIsValid(valid);
      return valid;
    };
    const handleInput = (event) => {
      let newValue = event.currentTarget.value;
      if (["date", "cpf", "phone", "cnpj", "cep", "email"].includes(type)) {
        newValue = applyMask(newValue, type);
      }
      const newEvent = {
        ...event,
        currentTarget: {
          ...event.currentTarget,
          value: newValue
        },
        target: {
          ...event.target,
          value: newValue
        }
      };
      setInputValue(newValue);
      if (type === "password") {
        checkPassword(newValue);
      } else {
        validateInput(newValue);
      }
      externalOnChange == null ? void 0 : externalOnChange(newEvent);
    };
    reactExports.useEffect(() => {
      setInputValue(value || "");
      if (value && type === "password") {
        checkPassword(value);
      } else if (value) {
        validateInput(value);
      }
    }, [value, type]);
    const checkPassword = (value2) => {
      const validationResult = {
        hasEightCharacters: (value2 == null ? void 0 : value2.match(passwordMask.password[2])) !== null,
        hasSpecialCharacters: (value2 == null ? void 0 : value2.match(passwordMask.password[0])) !== null,
        hasNumber: (value2 == null ? void 0 : value2.match(passwordMask.password[1])) !== null
      };
      setPasswordValidation(validationResult);
      setIsValid(
        validationResult.hasEightCharacters && validationResult.hasSpecialCharacters && validationResult.hasNumber
      );
    };
    const getInputType = () => {
      switch (type) {
        case "password":
          return "password";
        case "email":
          return "email";
        case "datePicker":
          return "date";
        case "date":
        case "cpf":
        case "phone":
        case "cnpj":
        case "cep":
          return "text";
        default:
          return "text";
      }
    };
    const renderPhonePrefix = () => {
      if (type !== "phone")
        return null;
      const format = phoneFormats[countryCode] || phoneFormats["BR"];
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-1.5 text-gray-500", children: format.countryCode });
    };
    const inputClasses = twMerge(
      "flex items-center justify-center border-2 border-gray-400 rounded-xs w-full px-3 py-1 text-md hover:shadow-md hover:shadow-neutral-500 focus:outline-hidden transition-all duration-200",
      className,
      disabled && "opacity-50 cursor-not-allowed",
      selected && "border-2 border-orange-500",
      validated && isValid && "border-2 border-green-900",
      (error || !isValid && inputValue != "") && "border-2 border-red-900",
      type === "phone" && "pl-10"
    );
    const renderPasswordValidation = () => {
      if (type !== "password")
        return null;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "py-1 text-sm", role: "list", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center px-2", role: "listitem", children: [
          passwordValidation.hasEightCharacters ? /* @__PURE__ */ jsxRuntimeExports.jsx(FiCheck, { className: "text-green-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FiX, { className: "text-red-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1", children: "Pelo menos 8 caracteres" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center px-2", role: "listitem", children: [
          passwordValidation.hasSpecialCharacters ? /* @__PURE__ */ jsxRuntimeExports.jsx(FiCheck, { className: "text-green-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FiX, { className: "text-red-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1", children: "Pelo menos 1 símbolo (@, !, $, etc)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center px-2", role: "listitem", children: [
          passwordValidation.hasNumber ? /* @__PURE__ */ jsxRuntimeExports.jsx(FiCheck, { className: "text-green-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FiX, { className: "text-red-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1", children: "Deve conter 1 número" })
        ] })
      ] });
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
      label && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "label",
        {
          htmlFor: id,
          className: "block text-sm font-medium text-gray-700 mb-1",
          children: [
            label,
            required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        renderPhonePrefix(),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: getInputType(),
            required,
            disabled,
            ref,
            id,
            className: inputClasses,
            onClick,
            onFocus: handleFocus,
            onChange: handleInput,
            onBlur: handleBlur,
            placeholder,
            value: inputValue,
            "aria-invalid": error,
            "aria-describedby": error ? `${id}-error` : helperText ? `${id}-helper` : void 0,
            ...rest
          }
        )
      ] }),
      renderPasswordValidation(),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { id: `${id}-error`, className: "mt-1 text-sm text-red-900", role: "alert", children: errorMessage || "Invalid field." }),
      helperText && !error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { id: `${id}-helper`, className: "mt-1 text-sm text-gray-500", children: helperText })
    ] });
  }
);
Input.displayName = "Input";
var TextInput = reactExports.forwardRef(
  ({
    className,
    disabled,
    value,
    prefix,
    placeholder,
    error,
    type = "text",
    variant = "primary",
    onClick,
    ...rest
  }, ref) => {
    const [selected, setSelected] = reactExports.useState(false);
    const [inputValue, setInputValue] = reactExports.useState(value);
    const handleFocus = () => {
      setSelected(!selected);
    };
    const handleBlur = () => {
      setSelected(false);
    };
    const handleInput = (event) => {
      setInputValue(event.currentTarget.value);
    };
    reactExports.useEffect(() => {
      setInputValue(value);
    }, [value]);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: twMerge(
          " py-2 px-4 border-2 rounded-xs box-border flex items-baseline bg-neutral-200",
          "hover:shadow-md hover:shadow-neutral-500 focus:outline-hidden",
          variant === "secondary" && "bg-neutral-800 border-neutral-800 ",
          selected === true && "border-2 border-orange-500",
          disabled === true && "opacity-50 cursor-not-allowed",
          error === true && "border-2 border-red-900"
        ),
        children: [
          !!prefix && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-500 sm:text-sm", children: prefix }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type,
              required: rest.required,
              onClick,
              onFocus: handleFocus,
              onChange: handleInput,
              onBlur: handleBlur,
              value: inputValue,
              placeholder,
              disabled,
              ref,
              className: twMerge(
                "flex items-center justify-center bg-neutral-200 rounded-xs w-full px-1 py-2 text-md",
                "focus:outline-hidden text-neutral-800",
                disabled === true && "cursor-not-allowed",
                variant === "secondary" && "bg-neutral-800 text-neutral",
                className
              ),
              ...rest
            }
          )
        ]
      }
    );
  }
);
TextInput.displayName = "TextInput";
var TextArea = reactExports.forwardRef(
  ({
    className,
    disabled,
    placeholder,
    value,
    validated,
    error,
    required,
    resize = "vertical",
    type = "text",
    onClick,
    errorMessage,
    onChange: externalOnChange,
    label,
    helperText,
    id,
    maxLength,
    minRows = 3,
    maxRows = 8,
    size = "md",
    variant = "primary",
    showCount = false,
    autoGrow = false,
    ...rest
  }, ref) => {
    const [selected, setSelected] = reactExports.useState(false);
    const [inputValue, setInputValue] = reactExports.useState(value || "");
    const [isValid, setIsValid] = reactExports.useState(true);
    const [rows, setRows] = reactExports.useState(minRows);
    const sizeStyles = {
      sm: "px-2 py-1 text-sm",
      md: "px-3 py-2 text-base",
      lg: "px-4 py-3 text-lg"
    };
    const variantStyles = {
      primary: "border-gray-400 focus:border-orange-500",
      secondary: "border-neutral-500 bg-neutral-100 focus:border-orange-500",
      outline: "border-gray-300 bg-transparent focus:border-orange-500"
    };
    const resizeStyles = {
      none: "resize-none",
      vertical: "resize-y",
      horizontal: "resize-x",
      both: "resize"
    };
    const handleFocus = () => {
      setSelected(true);
    };
    const handleBlur = () => {
      setSelected(false);
      validateInput(inputValue);
    };
    const validateInput = (value2) => {
      if (required && (!value2 || value2.trim().length === 0)) {
        setIsValid(false);
        return false;
      }
      if (maxLength && value2.length > maxLength) {
        setIsValid(false);
        return false;
      }
      if (type === "json" && value2.trim().length > 0) {
        try {
          JSON.parse(value2);
          setIsValid(true);
          return true;
        } catch (e) {
          setIsValid(false);
          return false;
        }
      }
      setIsValid(true);
      return true;
    };
    const handleInput = (event) => {
      const newValue = event.currentTarget.value;
      setInputValue(newValue);
      validateInput(newValue);
      if (autoGrow) {
        const textareaLineHeight = 24;
        const newRows = Math.max(
          minRows,
          Math.min(
            maxRows,
            Math.floor(event.currentTarget.scrollHeight / textareaLineHeight)
          )
        );
        setRows(newRows);
      }
      if (externalOnChange) {
        externalOnChange(event);
      }
    };
    reactExports.useEffect(() => {
      setInputValue(value || "");
      if (value) {
        validateInput(value);
      }
    }, [value, required, maxLength]);
    const characterCount = (inputValue == null ? void 0 : inputValue.length) || 0;
    const hasMaxLength = maxLength !== void 0 && maxLength > 0;
    const isOverLimit = hasMaxLength && characterCount > maxLength;
    const textareaClasses = twMerge(
      "w-full border-2 rounded-xs focus:outline-hidden transition-all duration-200",
      "hover:shadow-md hover:shadow-neutral-500",
      sizeStyles[size],
      variantStyles[variant],
      resizeStyles[resize],
      disabled && "opacity-50 cursor-not-allowed",
      selected && "border-orange-500",
      validated && isValid && "border-green-500",
      (error || !isValid && inputValue !== "") && "border-red-900",
      className
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
      label && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "label",
        {
          htmlFor: id,
          className: "block text-sm font-medium text-gray-700 mb-1",
          children: [
            label,
            required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          ref,
          id,
          rows,
          disabled,
          required,
          className: textareaClasses,
          onClick,
          onFocus: handleFocus,
          onChange: handleInput,
          onBlur: handleBlur,
          placeholder,
          value: inputValue,
          maxLength: hasMaxLength && !showCount ? maxLength : void 0,
          "aria-invalid": error || !isValid,
          "aria-describedby": error || !isValid ? `${id}-error` : helperText ? `${id}-helper` : void 0,
          ...rest
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mt-1", children: [
        (error || !isValid && inputValue !== "") && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { id: `${id}-error`, className: "text-sm text-red-900", role: "alert", children: errorMessage || "This field is invalid." }),
        helperText && isValid && !error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { id: `${id}-helper`, className: "text-sm text-gray-500", children: helperText }),
        showCount && hasMaxLength && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "p",
          {
            className: `text-sm ml-auto ${isOverLimit ? "text-red-600" : "text-gray-500"}`,
            children: [
              characterCount,
              "/",
              maxLength
            ]
          }
        )
      ] })
    ] });
  }
);
TextArea.displayName = "TextArea";
var Text = ({
  children,
  size = "md",
  tag = "p",
  weight = "normal",
  leading = "normal",
  alignment = "left",
  truncate = false,
  italic = false,
  uppercase = false,
  lowercase = false,
  capitalize = false,
  className,
  ...rest
}) => {
  const fontSize = {
    xxs: "text-xs",
    // fallback to xs since xxs isn't standard in Tailwind
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    // fixed from 'text-md' to 'text-base'
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl"
  }[size];
  const fontWeight = {
    thin: "font-thin",
    extralight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
    black: "font-black"
  }[weight];
  const lineHeight = {
    none: "leading-none",
    tight: "leading-tight",
    snug: "leading-snug",
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose"
  }[leading];
  const textAlignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify"
  }[alignment];
  const truncateClass = truncate ? "truncate" : "";
  const italicClass = italic ? "italic" : "";
  let transformClass = "";
  if (uppercase)
    transformClass = "uppercase";
  else if (lowercase)
    transformClass = "lowercase";
  else if (capitalize)
    transformClass = "capitalize";
  const Tag = tag;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tag,
    {
      className: twMerge(
        className = "text-neutral-900",
        fontSize,
        fontWeight,
        lineHeight,
        textAlignment,
        truncateClass,
        italicClass,
        transformClass,
        className
      ),
      ...rest,
      children
    }
  );
};
Text.displayName = "Text";
var Heading = ({
  children,
  size = "lg",
  tag = "h2",
  weight = "bold",
  tracking = "normal",
  alignment = "left",
  truncate = false,
  uppercase = false,
  className,
  ...rest
}) => {
  const fontSize = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl"
  }[size];
  const fontWeight = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold"
  }[weight];
  const letterTracking = {
    tighter: "tracking-tighter",
    tight: "tracking-tight",
    normal: "tracking-normal",
    wide: "tracking-wide",
    wider: "tracking-wider",
    widest: "tracking-widest"
  }[tracking];
  const textAlignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  }[alignment];
  const truncateClass = truncate ? "truncate" : "";
  const uppercaseClass = uppercase ? "uppercase" : "";
  const Tag = tag;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tag,
    {
      className: twMerge(
        fontSize,
        "text-neutral-900",
        fontWeight,
        letterTracking,
        textAlignment,
        truncateClass,
        uppercaseClass,
        className
      ),
      ...rest,
      children
    }
  );
};
var Box = reactExports.forwardRef(({
  className,
  children,
  tag = "div",
  variant = "secondary",
  size = "md",
  elevated = false,
  hasBorder = true,
  isInteractive = false,
  fullWidth = false,
  ...props
}, ref) => {
  const Tag = tag;
  const variantStyles = {
    primary: "text-neutral-800 bg-neutral-200 border-neutral-300",
    secondary: "text-neutral-200 bg-neutral-600 border-neutral-800",
    ghost: "text-neutral-800 bg-transparent border-transparent",
    outline: "text-neutral-800 bg-transparent border-neutral-300"
  };
  const sizeStyles = {
    sm: "p-3 text-sm",
    md: "p-6 text-base",
    lg: "p-8 text-lg",
    xl: "p-10 text-xl"
  };
  const elevationStyles = elevated ? "shadow-md hover:shadow-lg transition-shadow duration-200" : "";
  const borderStyles = hasBorder ? "border" : "border-0";
  const interactiveStyles = isInteractive ? "cursor-pointer hover:brightness-105 active:brightness-95 transition-all duration-200" : "";
  const widthStyles = fullWidth ? "w-full" : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tag,
    {
      ref,
      className: twMerge(
        "rounded-md",
        borderStyles,
        sizeStyles[size],
        variantStyles[variant],
        elevationStyles,
        interactiveStyles,
        widthStyles,
        className
      ),
      ...props,
      children
    }
  );
});
Box.displayName = "Box";
var Form = ({
  className,
  children,
  variant = "secondary",
  orientation = "row",
  ...rest
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "form",
    {
      className: twMerge(
        "flex flex-row gap-2 p-6 rounded-md border-2",
        variant === "primary" && "text-neutral-800 bg-neutral-200 border-neutral-300",
        variant === "secondary" && "text-neutral-200 bg-neutral-600 border-neutral-800",
        orientation === "col" && "flex-col",
        className
      ),
      ...rest,
      children
    }
  );
};
var Avatar = ({ className, ...rest }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: twMerge(
        `
            rounded-full w-16 h-16 overflow-hidden flex items-center
            bg-neutral-600 justify-center`,
        className
      ),
      children: rest.src ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "w-full h-full object-cover rounded-full", ...rest }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FaUser, { color: "#FFFFFF", size: 24 })
    }
  );
};
var MultiStep = ({ className, size, currentStep }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { tag: "label", color: "primary", size: "xs", children: `Passo ${currentStep} de ${size}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid gap-2 grid-cols-${size} grid-flow-col mt-1`, children: Array.from(Array(size).keys()).map((_, index) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: twMerge(
            "h-1 rounded-full",
            currentStep && index < currentStep ? "bg-orange-500" : "bg-neutral-500",
            className
          )
        },
        index
      );
    }) })
  ] });
};
var Toggle = ({
  className,
  disabled,
  active,
  label,
  setActive,
  size = "md",
  hideLabel = false,
  id,
  ...rest
}) => {
  const toggleId = id || `toggle-${Math.random().toString(36).substring(2, 9)}`;
  const sizeClasses = {
    sm: {
      toggle: "h-5 w-9",
      knob: "h-3 w-3",
      translate: active ? "translate-x-5" : "translate-x-1"
    },
    md: {
      toggle: "h-6 w-11",
      knob: "h-4 w-4",
      translate: active ? "translate-x-6" : "translate-x-1"
    },
    lg: {
      toggle: "h-7 w-14",
      knob: "h-5 w-5",
      translate: active ? "translate-x-8" : "translate-x-1"
    }
  };
  const selectedSize = sizeClasses[size];
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!disabled) {
        setActive(!active);
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: twMerge("flex items-center gap-3", className),
      ...rest,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            role: "switch",
            "aria-checked": active,
            "aria-labelledby": hideLabel ? void 0 : `${toggleId}-label`,
            "aria-label": hideLabel ? label : void 0,
            id: toggleId,
            disabled,
            onClick: () => setActive(!active),
            onKeyDown: handleKeyDown,
            className: twMerge(`
          relative inline-flex items-center rounded-full
          ${selectedSize.toggle}
          ${active ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"}
          ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
          transition-colors duration-300 ease-in-out 
          focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        `),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `
          inline-block transform rounded-full bg-white shadow-md
          ${selectedSize.knob}
          ${selectedSize.translate}
          transition-transform duration-300 ease-in-out
        ` })
          }
        ),
        !hideLabel && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "label",
          {
            id: `${toggleId}-label`,
            htmlFor: toggleId,
            className: `text-sm font-medium text-gray-700 dark:text-gray-300 ${disabled ? "opacity-50" : ""}`,
            children: label
          }
        )
      ]
    }
  );
};
var Skeleton = ({
  width = "full",
  height = "16",
  rounded = false,
  circle = false,
  animate = true,
  className
}) => {
  const widthClass = typeof width === "string" ? width.includes("px") || width.includes("%") || width.includes("rem") || width.includes("em") ? `w-[${width}]` : `w-${width}` : `w-[${width}px]`;
  const heightClass = typeof height === "string" ? height.includes("px") || height.includes("%") || height.includes("rem") || height.includes("em") ? `h-[${height}]` : `h-${height}` : `h-[${height}px]`;
  const safeWidthClass = widthClass.includes("[") ? "w-full" : widthClass;
  const safeHeightClass = heightClass.includes("[") ? "h-16" : heightClass;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: twMerge(
        "bg-gray-200",
        safeWidthClass,
        safeHeightClass,
        rounded && !circle && "rounded-md",
        circle && "rounded-full",
        animate && "animate-pulse",
        className
      ),
      "aria-hidden": "true"
    }
  );
};
Skeleton.displayName = "Skeleton";
var Loading = ({
  size = "md",
  color = "primary",
  withText = false,
  text = "Loading...",
  centered = false,
  className
}) => {
  const sizeClasses = {
    xs: "h-4 w-4",
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12"
  };
  const colorClasses = {
    primary: "text-orange-500",
    secondary: "text-neutral",
    white: "text-white",
    black: "text-black",
    gray: "text-gray-400"
  };
  const textSizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: twMerge(
        "inline-flex items-center",
        centered && "justify-center",
        className
      ),
      role: "status",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            className: twMerge(
              "animate-spin",
              sizeClasses[size],
              colorClasses[color]
            ),
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "circle",
                {
                  className: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  strokeWidth: "4"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  className: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                }
              )
            ]
          }
        ),
        withText && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: twMerge(
          "ml-3",
          textSizeClasses[size],
          colorClasses[color]
        ), children: text }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Loading" })
      ]
    }
  );
};
Loading.displayName = "Loading";
var Modal = ({
  className,
  isOpen,
  onClose,
  title,
  size = "md",
  children,
  showCloseButton = true,
  closeOnOutsideClick = true,
  closeOnEsc = true,
  footer,
  ...rest
}) => {
  const modalRef = reactExports.useRef(null);
  const portalRoot = reactExports.useRef(null);
  const [mounted, setMounted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    portalRoot.current = document.createElement("div");
    portalRoot.current.id = "bloom-ui-portal-root";
    document.body.appendChild(portalRoot.current);
    setMounted(true);
    return () => {
      var _a;
      (_a = portalRoot.current) == null ? void 0 : _a.remove();
      document.body.style.overflow = "";
    };
  }, []);
  reactExports.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (isOpen && closeOnEsc && e.key === "Escape")
        onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, closeOnEsc]);
  const handleBackdropClick = (e) => {
    if (closeOnOutsideClick && modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };
  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl"
  };
  if (!isOpen || !mounted || !portalRoot.current)
    return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 transition-opacity duration-300",
      onClick: handleBackdropClick,
      "aria-modal": "true",
      role: "dialog",
      ...rest,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          ref: modalRef,
          className: twMerge(
            `relative bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full 
                    ${sizeClasses[size]} opacity-100 scale-100 
                    transition-all duration-300 ease-in-out`,
            className
          ),
          children: [
            (title || showCloseButton) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700", children: [
              title && /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: title }),
              showCloseButton && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "aria-label": "Close modal",
                  onClick: onClose,
                  className: "p-1 text-gray-400 hover:text-gray-500 focus:outline-hidden focus:ring-2 focus:ring-blue-500 rounded-full",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-5 w-5", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-4 max-h-[70vh] overflow-y-auto", children }),
            footer && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-4 border-t border-gray-200 dark:border-gray-700", children: footer })
          ]
        }
      )
    }
  );
};
var ToastService = class _ToastService {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set();
    this.toasts = [];
  }
  static getInstance() {
    if (!_ToastService.instance) {
      _ToastService.instance = new _ToastService();
    }
    return _ToastService.instance;
  }
  subscribe(listener) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }
  notify() {
    this.listeners.forEach((listener) => listener([...this.toasts]));
  }
  showToast(toast) {
    const id = `toast-${Date.now()}`;
    this.toasts.push({
      ...toast,
      id,
      onDismiss: (toastId) => this.hideToast(toastId)
    });
    this.notify();
    return id;
  }
  hideToast(id) {
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
    this.notify();
  }
  clearToasts() {
    this.toasts = [];
    this.notify();
  }
  getToasts() {
    return [...this.toasts];
  }
};
var toastService = ToastService.getInstance();
var Toast = ({
  id,
  message,
  title,
  variant = "info",
  duration = 5e3,
  showCloseButton = true,
  onDismiss,
  className
}) => {
  const [isRemoving, setIsRemoving] = reactExports.useState(false);
  const timerRef = reactExports.useRef();
  const handleDismiss = () => {
    setIsRemoving(true);
    setTimeout(() => onDismiss == null ? void 0 : onDismiss(id), 300);
  };
  reactExports.useEffect(() => {
    if (duration > 0) {
      timerRef.current = window.setTimeout(handleDismiss, duration);
    }
    return () => window.clearTimeout(timerRef.current);
  }, [duration]);
  const variantStyles = {
    success: "bg-green-100 border-green-500 text-green-800",
    error: "bg-red-100 border-red-500 text-red-800",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-800",
    info: "bg-blue-100 border-blue-500 text-blue-800"
  };
  const icons = {
    success: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }),
    error: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) }),
    warning: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) }),
    info: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) })
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: twMerge(
        "flex items-start p-4 mb-3 w-full max-w-xs rounded-md shadow-md border-l-4 transform transition-all duration-300",
        variantStyles[variant],
        isRemoving ? "translate-x-full opacity-0" : "translate-x-0 opacity-100",
        className
      ),
      role: "alert",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `shrink-0 mr-3 text-${variant}-500`, children: icons[variant] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          title && /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-sm", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: message })
        ] }),
        showCloseButton && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "ml-3 text-gray-400 hover:text-gray-900",
            onClick: handleDismiss,
            "aria-label": "Close",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }) })
          }
        )
      ]
    }
  );
};
var ToastContainer = ({
  position = "top-right",
  className
}) => {
  const containerRef = reactExports.useRef(null);
  const [isMounted, setIsMounted] = reactExports.useState(false);
  const [toasts, setToasts] = reactExports.useState([]);
  reactExports.useEffect(() => {
    const container = document.createElement("div");
    container.id = "toast-root";
    container.className = "fixed z-50 p-4";
    document.body.appendChild(container);
    containerRef.current = container;
    setIsMounted(true);
    const unsubscribe = toastService.subscribe(setToasts);
    return () => {
      unsubscribe();
      container.remove();
    };
  }, []);
  const positionClasses = {
    "top-right": "top-0 right-0",
    "top-left": "top-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "top-center": "top-0 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2"
  };
  if (!isMounted || !containerRef.current)
    return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: twMerge(
        "fixed z-50 p-4 flex flex-col items-end",
        positionClasses[position],
        className
      ),
      children: toasts.map((toast) => /* @__PURE__ */ jsxRuntimeExports.jsx(Toast, { ...toast }, toast.id))
    }
  );
};
var useToast = () => {
  return {
    showToast: (toast) => toastService.showToast(toast),
    hideToast: (id) => toastService.hideToast(id),
    clearToasts: () => toastService.clearToasts()
  };
};
var ToastProvider = ({ position = "top-right", children }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToastContainer, { position })
  ] });
};
Toast.displayName = "Toast";
ToastContainer.displayName = "ToastContainer";
Box.__docgenInfo = { "description": "", "methods": [], "displayName": "Box", "props": { "tag": { "defaultValue": { "value": '"div"', "computed": false }, "required": false }, "variant": { "defaultValue": { "value": '"secondary"', "computed": false }, "required": false }, "size": { "defaultValue": { "value": '"md"', "computed": false }, "required": false }, "elevated": { "defaultValue": { "value": "false", "computed": false }, "required": false }, "hasBorder": { "defaultValue": { "value": "true", "computed": false }, "required": false }, "isInteractive": { "defaultValue": { "value": "false", "computed": false }, "required": false }, "fullWidth": { "defaultValue": { "value": "false", "computed": false }, "required": false } } };
Button.__docgenInfo = { "description": "", "methods": [], "displayName": "Button", "props": { "variant": { "defaultValue": { "value": '"primary"', "computed": false }, "required": false }, "size": { "defaultValue": { "value": '"md"', "computed": false }, "required": false }, "disabled": { "defaultValue": { "value": "false", "computed": false }, "required": false }, "loading": { "defaultValue": { "value": "false", "computed": false }, "required": false }, "fullWidth": { "defaultValue": { "value": "false", "computed": false }, "required": false } } };
Input.__docgenInfo = { "description": "", "methods": [], "displayName": "Input", "props": { "countryCode": { "defaultValue": { "value": '"BR"', "computed": false }, "required": false } } };
TextArea.__docgenInfo = { "description": "", "methods": [], "displayName": "TextArea", "props": { "resize": { "defaultValue": { "value": '"vertical"', "computed": false }, "required": false }, "type": { "defaultValue": { "value": '"text"', "computed": false }, "required": false }, "minRows": { "defaultValue": { "value": "3", "computed": false }, "required": false }, "maxRows": { "defaultValue": { "value": "8", "computed": false }, "required": false }, "size": { "defaultValue": { "value": '"md"', "computed": false }, "required": false }, "variant": { "defaultValue": { "value": '"primary"', "computed": false }, "required": false }, "showCount": { "defaultValue": { "value": "false", "computed": false }, "required": false }, "autoGrow": { "defaultValue": { "value": "false", "computed": false }, "required": false } } };
TextInput.__docgenInfo = { "description": "", "methods": [], "displayName": "TextInput", "props": { "type": { "defaultValue": { "value": '"text"', "computed": false }, "required": false }, "variant": { "defaultValue": { "value": '"primary"', "computed": false }, "required": false } } };
export {
  Avatar as A,
  Box as B,
  Checkbox as C,
  Form as F,
  GenIcon as G,
  Heading as H,
  Input as I,
  Link as L,
  Modal as M,
  RadioGroup as R,
  Skeleton as S,
  Text as T,
  Button as a,
  TextInput as b,
  Loading as c,
  MultiStep as d,
  TextArea as e,
  Toast as f,
  ToastProvider as g,
  Toggle as h,
  Card as i,
  useToast as u
};
