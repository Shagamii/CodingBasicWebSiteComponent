import { actionTypes } from '../actionTypes';

const { HTML_RENDER } = actionTypes;

function initialState() {
  return {
    html_row: "",
    css_row: ""
  };
};

function whenChangeHtml(state, html_row) {
  return { ...state, html_row };
}

function whenChangeCss(state, css_row) {
  return { ...state, css_row };
}

export default function htmlRender(state = initialState(), event) {
  switch (event.type) {
    case HTML_RENDER.CHANGE_HTML:
      return whenChangeHtml(state, event.newValue);
    case HTML_RENDER.CHANGE_CSS:
      return whenChangeCss(state, event.newValue);
    default:
      return state;
  }
}
