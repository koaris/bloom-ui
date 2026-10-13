const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DocsRenderer-CFRXHY34-BBRKt7jg.js","assets/iframe-DbgFXHWz.js","assets/index-hC87BHQs.js","assets/_commonjsHelpers-CUmg6egw.js","assets/index-DpAlniPV.js","assets/jsx-runtime-x-ThabpI.js","assets/index-D0dBaOty.js","assets/index-DKJM7FmN.js","assets/index-CzFfxzC7.js","assets/react-18-CiQBUqTy.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./iframe-DbgFXHWz.js";
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
  let { DocsRenderer } = await __vitePreload(() => import("./DocsRenderer-CFRXHY34-BBRKt7jg.js").then((n) => n.D), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]) : void 0);
  return new DocsRenderer();
}, stories: { filter: (story) => {
  var _a;
  return (story.tags || []).filter((tag) => excludeTags[tag]).length === 0 && !((_a = story.parameters.docs) == null ? void 0 : _a.disable);
} } } };
export {
  parameters
};
