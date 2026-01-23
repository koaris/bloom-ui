import { _ as __vitePreload } from "./iframe-9f4b6ef5.js";
import "../sb-preview/runtime.js";
const { global } = __STORYBOOK_MODULE_GLOBAL__;
const { addons } = __STORYBOOK_MODULE_PREVIEW_API__;
var ADDON_ID = "storybook/a11y";
var RESULT = `${ADDON_ID}/result`, REQUEST = `${ADDON_ID}/request`, RUNNING = `${ADDON_ID}/running`, ERROR = `${ADDON_ID}/error`, MANUAL = `${ADDON_ID}/manual`, EVENTS = { RESULT, REQUEST, RUNNING, ERROR, MANUAL };
var { document, window: globalWindow } = global, channel = addons.getChannel(), active = false, activeStoryId, handleRequest = async (storyId) => {
  let { manual } = await getParams(storyId);
  manual || await run(storyId);
}, run = async (storyId) => {
  activeStoryId = storyId;
  try {
    let input = await getParams(storyId);
    if (!active) {
      active = true, channel.emit(EVENTS.RUNNING);
      let axe = (await __vitePreload(() => import("./axe-17abd6b7.js").then((n) => n.a), true ? ["assets/axe-17abd6b7.js","assets/_commonjsHelpers-ca272635.js"] : void 0)).default, { element = "#storybook-root", config, options = {} } = input, htmlElement = document.querySelector(element);
      if (!htmlElement)
        return;
      axe.reset(), config && axe.configure(config);
      let result = await axe.run(htmlElement, options), resultJson = JSON.parse(JSON.stringify(result));
      activeStoryId === storyId ? channel.emit(EVENTS.RESULT, resultJson) : (active = false, run(activeStoryId));
    }
  } catch (error) {
    channel.emit(EVENTS.ERROR, error);
  } finally {
    active = false;
  }
}, getParams = async (storyId) => {
  let { parameters } = await globalWindow.__STORYBOOK_STORY_STORE__.loadStory({ storyId }) || {};
  return parameters.a11y || { config: {}, options: {} };
};
channel.on(EVENTS.REQUEST, handleRequest);
channel.on(EVENTS.MANUAL, run);
