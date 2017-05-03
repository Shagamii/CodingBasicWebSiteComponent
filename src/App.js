import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import AceEditor from 'react-ace';

import 'brace/mode/html';
import 'brace/mode/css';
import 'brace/theme/kuroir';
import 'brace/theme/monokai';

import * as HtmlRenderAction from './actions/HtmlRenderAction';

import './App.css';

class App extends Component {
  static propTypes = {
    htmlRender: PropTypes.object.isRequired
  };

  onChangeHtml = newValue =>
  this.props.onChangeHtml(newValue);

  onChangeCss = newValue =>
  this.props.onChangeCss(newValue);


  render() {
    const { htmlRender } = this.props;
    const {
      html_row,
      css_row
    } = htmlRender;

    return (
      <div className="container">
        <h1>HtmlRenderComponent</h1>
        <div className='html_input'>
          <form>
            <AceEditor
              className='editor'
              value={ html_row }
              onChange={ this.onChangeHtml }
              mode='html'
              theme='kuroir'
              keyboardHandler='vim'
            />

            <AceEditor
              className='editor'
              value={ css_row }
              onChange={ this.onChangeCss }
              mode='css'
              theme='monokai'
              keyboardHandler='vim'
            />
          </form>
        </div>
        <html>
          <head>
            <style>
              { css_row }
            </style>
          </head>
          <body>
            <div
              dangerouslySetInnerHTML={{__html: html_row}}
            />
          </body>
        </html>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  htmlRender: state.htmlRender
});

const mapDispatchToProps = dispatch =>
bindActionCreators(HtmlRenderAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
