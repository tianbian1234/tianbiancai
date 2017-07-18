import React, { Component } from 'react';
import Game from 'components/game';

class Test extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return(
      <div>
        <Game />
      </div>
    )
  }
}

export default Test;
