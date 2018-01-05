//Import

//Actions -- variables

const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECOND = 'ADD_SECOND';

//Action creators

function startTimer() {
  return {
    type: START_TIMER
  }
}

function restartTimer() {
  return {
    type: RESTART_TIMER
  }
}

function addSecond() {
  return {
    type: ADD_SECOND
  }
}

//Reducer
const TIME_DURATION = 1500;

const initialState = {
  isPlaying: false,
  timeDuration: TIME_DURATION,
  elaspedTime: 0,
}

function reducer (state = initialState, action) {
  switch(action.type){
    case START_TIMER:
      return applyStartTimer(state, action);
    case RESTART_TIMER:
      return applyRestartTimer(state, action);
    case ADD_SECOND:
      return applyAddSecond(state, action);
    default:
      return state;
  }
}

//Reducer function

function applyStartTimer(state) {
  return {
    // current state
    ...state,
    isPlaying: true,
    elaspedTime: 0
  }
}

function applyRestartTimer(state) {
  return {
    ...state,
    isPlaying: false,
    elaspedTime: 0
  }
}

function applyAddSecond(state) {
  if (state.elaspedTime < TIME_DURATION) {
    return {
      ...state,
      elaspedTime: state.elaspedTime + 1
    }
  } else {
    return {
      ...state,
      isPlaying: false,
    }
  }
}

//export action creators

export const actionCreators = {
  startTimer,
  restartTimer,
  addSecond
}

//export reducer

export default reducer;