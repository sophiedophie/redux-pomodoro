// connet to the store
import { connect } from 'react-redux';
import PomodoroCard from './PomodoroCard';
import { bindActionCreators } from 'redux';
import { actionCreators as pomodoroActions } from '../reducer'

const mapStateToProps = state => {
  const { isPlaying, elaspedTime, timeDuration } = state;
  return {
    isPlaying,
    elaspedTime,
    timeDuration
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startTimer: bindActionCreators(pomodoroActions.startTimer, dispatch),
    restartTimer: bindActionCreators(pomodoroActions.restartTimer, dispatch),
    addSecond: bindActionCreators(pomodoroActions.addSecond, dispatch)
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(PomodoroCard);