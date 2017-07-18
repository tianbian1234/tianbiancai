import React from 'react';
import List from 'components/list';
import Nav from 'components/nav';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }
}

export default Home;
