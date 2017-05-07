import { actionTypes } from '../actionTypes';

const { HTML_RENDER } = actionTypes;

export function onChangeHtml(newValue) {
  return {
    type: HTML_RENDER.CHANGE_HTML,
    newValue
  };
}

export function onChangeCss(newValue) {
  return {
    type: HTML_RENDER.CHANGE_CSS,
    newValue
  };
}

export function onChangeJs(newValue) {
  return {
    type: HTML_RENDER.CHANGE_JS,
    newValue
  }
}
