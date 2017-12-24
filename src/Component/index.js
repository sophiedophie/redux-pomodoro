// connet to the store
import { connect } from 'react-redux';
import PomodoroCard from './PomodoroCard';

function mapStateToProps(state) {
  const { isPlaying, elaspedTime, timeDuration } = state;
  return {
    isPlaying,
    elaspedTime,
    timeDuration
  }
}

export default connect(mapStateToProps)(PomodoroCard);