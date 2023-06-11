import PropTypes from 'prop-types';
import { Component } from 'react';
import { Button } from './FeedbackOption.styled';

class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        {this.props.options.map(option => {
          return (
            <Button
              key={option}
              id={option}
              onClick={this.props.onLeaveFeedback}
            >
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
