import { g as getDefaultExportFromCjs } from "./_commonjsHelpers-CUmg6egw.js";
import { a as requireReact } from "./index-BUJ0C1Fr.js";
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var testUtils$2 = { exports: {} };
var reactDomTestUtils_production = {};
/**
 * @license React
 * react-dom-test-utils.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactDomTestUtils_production;
function requireReactDomTestUtils_production() {
  if (hasRequiredReactDomTestUtils_production) return reactDomTestUtils_production;
  hasRequiredReactDomTestUtils_production = 1;
  var React = requireReact(), didWarnAboutUsingAct = false;
  reactDomTestUtils_production.act = function(callback) {
    false === didWarnAboutUsingAct && (didWarnAboutUsingAct = true, console.error(
      "`ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info."
    ));
    return React.act(callback);
  };
  return reactDomTestUtils_production;
}
var hasRequiredTestUtils;
function requireTestUtils() {
  if (hasRequiredTestUtils) return testUtils$2.exports;
  hasRequiredTestUtils = 1;
  {
    testUtils$2.exports = requireReactDomTestUtils_production();
  }
  return testUtils$2.exports;
}
var testUtilsExports = requireTestUtils();
const testUtils = /* @__PURE__ */ getDefaultExportFromCjs(testUtilsExports);
const testUtils$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: testUtils
}, [testUtilsExports]);
export {
  testUtils$1 as t
};
