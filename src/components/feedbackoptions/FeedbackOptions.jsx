import PropTypes from 'prop-types';
import { Component } from 'react';
import { Button } from './FeedbackOption.styled';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div>
        {options.map(option => {
          return (
            <Button key={option} onClick={() => onLeaveFeedback(option)}>
              {option}
            </Button>
          );
        })}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
