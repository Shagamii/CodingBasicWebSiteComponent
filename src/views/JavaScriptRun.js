import React, { Component, PropTypes } from 'react';

export default class JavaScriptRun extends Component {
  static propTypes = {
    runJs: PropTypes.func.isRequired,
  };

  render() {

    return (
      <button
        type='button'
        onClick={ this.props.runJs }
        >
          <p>JavaScriptを実行</p>
        </button>
      );
  }
}
