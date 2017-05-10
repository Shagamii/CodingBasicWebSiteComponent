import React, { Component, PropTypes } from 'react';

export default class HtmlCssComponent extends Component {
  static propTypes = {
    html_code: PropTypes.string.isRequired,
    css_code: PropTypes.string.isRequired
  };

  render() {
    const {
      html_code,
      css_code
    } = this.props;

    return (
      <html>
        <head>
          <style>
            { css_code }
          </style>
        </head>
        <body>
          <span
            dangerouslySetInnerHTML={{__html: html_code}}
          />
        </body>
      </html>
    );
  }
}
