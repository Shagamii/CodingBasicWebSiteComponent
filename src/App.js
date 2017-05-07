import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import AceEditor from 'react-ace';

import HtmlCssComponent from './views/HtmlCssRender';

import 'brace/mode/html';
import 'brace/mode/css';
import 'brace/mode/javascript';
import 'brace/theme/kuroir';
import 'brace/theme/monokai';
import 'brace/theme/xcode';

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

  onChangeJs = newValue =>
  this.props.onChangeJs(newValue);

  exeJS = event =>
  this.props.htmlRender.javascript_row;

  // componentDidMount() {
  //   this.exeJS
  // };

  render() {
    const { htmlRender } = this.props;
    const {
      html_row,
      css_row,
      // javascript_row
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

          {/*  <AceEditor
              className='editor'
              value={ javascript_row }
              onChange={ this.onChangeJs }
              mode='javascript'
              theme='xcode'
              keyboardHandler='vim'
            /> */}
          </form>
        </div>
        <HtmlCssComponent
          html_code={ html_row }
          css_code={ css_row }
         />

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
