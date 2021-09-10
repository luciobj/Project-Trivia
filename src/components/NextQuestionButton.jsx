import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NextQuestionButton extends Component {
  render() {
    const { handleNextButton } = this.props;
    return (
      <button
        type="button"
        data-testid="btn-next"
        onClick={ handleNextButton }
      >
        Próxima
      </button>
    );
  }
}

export default NextQuestionButton;

NextQuestionButton.propTypes = {
  handleNextButton: PropTypes.func,
}.isRequired;
