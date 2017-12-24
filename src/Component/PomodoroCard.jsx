import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


class PomodoroCard extends React.Component {
  render() {
    console.log(this.props)
    const { isPlaying, elaspedTime, timeDuration } = this.props;
    console.log(isPlaying);
    var time = Number(this.props.counterDuration)
    var minute = Math.floor(time / 60);
    var second = time - minute * 60;
    if (second === 0) {
      second = '00';
    } else if (second < 10) {
      second = '0' + second;
    }
    return (
      <Card style={{"margin": "20% auto", "width": "40%"}}>
        <Card.Content style={{"margin": "auto"}}>
          <Card.Header style={{"margin": "auto"}}>
            {time}
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
          <Button content='Start' icon='play' labelPosition='left' onClick={this.setTimer}/>
          <Button content='Pause' icon='pause' labelPosition='left' onClick={this.stopPomodoro}/>
          <Button content='Reset' icon='stop' labelPosition='left' onClick={this.resetPomodoro}/>
        </Card.Content>
      </Card>
    )
  }
}

export default PomodoroCard



