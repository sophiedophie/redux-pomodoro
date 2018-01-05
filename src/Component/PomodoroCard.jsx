import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


class PomodoroCard extends React.Component {
  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    if (!currentProps.isPlaying && nextProps.isPlaying) {
      const timerInterval = setInterval(() => {
        currentProps.addSecond();
      }, 1000);
      this.setState({interval: timerInterval})
    } else if (currentProps.isPlaying && !nextProps.isPlaying) {
      clearInterval(this.state.interval)
    }
  }

  render() {
    const {
      isPlaying,
      elaspedTime,
      timeDuration,
      startTimer,
      restartTimer,
      addSecond
    } = this.props;
    var time = Number(timeDuration);
    var minute = Math.floor(time / 60);
    var second = time - minute * 60;
    console.log(time, minute, second)
    if (second === 0) {
      second = '00';
    } else if (second < 10) {
      second = '0' + second;
    }
    return (
      <Card style={{"margin": "20% auto", "width": "40%"}}>
        <Card.Content style={{"margin": "auto"}}>
          <Card.Header style={{"margin": "auto"}}>
            {minute} : {second}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              Joined in 2015
            </span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button content='Start' icon='play' labelPosition='left' onClick={startTimer}/>
          <Button content='Pause' icon='pause' labelPosition='left' onClick={addSecond}/>
          <Button content='Reset' icon='stop' labelPosition='left' onClick={restartTimer}/>
        </Card.Content>
      </Card>
    )
  }
}

export default PomodoroCard



