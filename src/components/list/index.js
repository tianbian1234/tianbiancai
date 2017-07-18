import React, { Component, Proptypes } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(key) {
    console.log(key);
    let { onClick } = this.props;
    if(onClick) {
      onClick();
    }
  }
  render() {
    let { num } = this.props;
    return (
      <li
        key={num}
        onClick={() => {this.handleClick(num)}}
      >
        郑力鹏
      </li>
    )
  }
}

export default List;
