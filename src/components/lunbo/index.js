import React, { Component } from 'react';
import './index.scss';

import img1 from 'images/f1.jpg';
import img2 from 'images/f2.jpg';
import img3 from 'images/f3.jpg';
import img4 from 'images/f4.jpg';
import img5 from 'images/f5.jpg';
import img6 from 'images/slider/1.jpg';
import img7 from 'images/slider/2.jpg';
import img8 from 'images/slider/3.jpg';
import img9 from 'images/slider/4.jpg';
import img10 from 'images/slider/5.jpg';
import img11 from 'images/slider/6.jpg';

const test = [ img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11 ];

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      moveLeft:0
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }
  componentDidMount() {
    this.startMove();
  }
  startMove() {
    const { move } = this.props;
    let moveNow = this.state.moveLeft;
    let _this = this;
    this.InterCircle = setInterval(function(){
        moveNow-=1;
        if(moveNow%200 == 0){
          let dele_ele = test.shift();
          test.push(dele_ele);
        }
        if(moveNow <= -200){
          _this.setState({
            moveLeft: 0
          });
          moveNow=0;
        }else{
          _this.setState({
            moveLeft: moveNow
          })
        }

    },20)
  }
  componentWillUnmount() {
    clearInterval(this.InterCircle);
  }
  handleMouseOver() {
    clearInterval(this.InterCircle);
  }
  handleMouseOut() {
    this.startMove();
  }
  render(){

    const { width, height, num } = this.props;
    const { moveLeft } = this.state;
    return (
      <div
        style={{width: width, height: height}}
        className="circle"
      >
        <ul
          style={{
            width: (width/num)*test.length,
            height: height,
            left: moveLeft
          }}
          className="circle-box"
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        >
          {
            test.map( (item, i) => (
              <li
                key={'img'+i}
                style={{width: width/num}}
              >
                <img src={item} alt={"图片"+i} />
              </li>) )
          }
        </ul>
      </div>
    )
  }
}

export default Circle;
