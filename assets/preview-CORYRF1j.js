const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DocsRenderer-CFRXHY34-DftKDdUO.js","assets/iframe-Dj-zl04m.js","assets/index-BUJ0C1Fr.js","assets/_commonjsHelpers-CUmg6egw.js","assets/index-CMMsNRFq.js","assets/index-DPCO8D-R.js","assets/index-D4iSnjfY.js","assets/index-DKJM7FmN.js","assets/index-CzFfxzC7.js","assets/react-18-DuA0WfzY.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./iframe-Dj-zl04m.js";
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var preview_exports = {};
__export(preview_exports, { parameters: () => parameters });
var excludeTags = Object.entries(globalThis.TAGS_OPTIONS ?? {}).reduce((acc, entry) => {
  let [tag, option] = entry;
  return option.excludeFromDocsStories && (acc[tag] = true), acc;
}, {}), parameters = { docs: { renderer: async () => {
  let { DocsRenderer } = await __vitePreload(() => import("./DocsRenderer-CFRXHY34-DftKDdUO.js").then((n) => n.D), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]) : void 0);
  return new DocsRenderer();
}, stories: { filter: (story) => {
  var _a;
  return (story.tags || []).filter((tag) => excludeTags[tag]).length === 0 && !((_a = story.parameters.docs) == null ? void 0 : _a.disable);
} } } };
export {
  parameters
};
