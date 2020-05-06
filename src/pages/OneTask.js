import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GoBack from 'components/uiElements/GoBack';
import parse from 'html-react-parser';
import { currentTask } from '../store/boardData/selectors';
import history from '../history';

const OneTaskPage = ({ localCurrentTask }) => (
  <div className="container">
    <GoBack />
    {
          localCurrentTask
            ? (
              <div>
                <h1>{localCurrentTask.name}</h1>
                <span>{localCurrentTask.date.toString()}</span>
                <p>{parse(localCurrentTask.taskDescription)}</p>
              </div>
            )
            : history.push('/')
      }
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  ...state,
  localCurrentTask: currentTask(state.boardData, ownProps.match.params.id),
});

OneTaskPage.propTypes = {
  localCurrentTask: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    taskDescription: PropTypes.string.isRequired,
  }).isRequired,
};


export default connect(
  mapStateToProps,
)(OneTaskPage);
