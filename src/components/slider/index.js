import React, { Component } from 'react';
import './index.scss';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowLocal: 0,
      wraperWidth: 0,
      slideWidth:0
    };
    this.turn = this.turn.bind(this);
    this.autoPlay = this.autoPlay.bind(this);
    this.pausePlay = this.pausePlay.bind(this);
    this.renderDot = this.renderDot.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
  }

  onWindowResize(){
    let widthSlide = document.querySelector('.slider-container').offsetWidth;
    let count = this.props.dataSource.length;
    this.setState({
      slideWidth: widthSlide,
      wraperWidth: widthSlide * count
    });
  }
  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);

    let widthSlide = document.querySelector('.slider-container').offsetWidth;
    let count = this.props.dataSource.length;
    this.setState({
      slideWidth: widthSlide,
      wraperWidth: widthSlide * count
    });
    this.autoPlay();
  }
  componentWillReceiveProps(){
    let widthSlide = document.querySelector('.slider-container').offsetWidth;
    let count = this.props.dataSource.length;
    this.setState({
      slideWidth: widthSlide,
      wraperWidth: widthSlide * count
    });
  }

  componentWillMount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  turn(n) {
    let _n = this.state.nowLocal + n;
    if(_n >= this.props.dataSource.length) {
      _n = 0;
    }
    if(_n < 0) {
      _n = this.props.dataSource.length - 1;
    }
    this.setState({
      nowLocal: _n
    })
  }

  autoPlay() {
    let _this = this;
    this.setAutoPlay = setInterval(function() {
      if(!_this.props.autoPlay || _this.props.autoPlay <= 0){
        clearInterval(_this.setAutoPlay);
      }
      _this.turn(1);
    }, this.props.autoPlay*1000);
  }

  pausePlay() {
    clearInterval(this.setAutoPlay);
  }

  renderDot(){

  }
  render() {
    let { dataSource, controlButton, dotControl } = this.props;
    let { nowLocal, wraperWidth, slideWidth } = this.state;

    console.log('11111111', nowLocal);

    return (
      <div className='slider-container'>
        <div className='slider-wraper'
             style={{ width: wraperWidth, left: -nowLocal*slideWidth }}
        >
          {
            dataSource.map( (item, i) => (<div
              key={'slide' + i }
              style={{ width: slideWidth }}
              className={'slide' + (i === nowLocal ? ' slide-active' : '' ) }
              onMouseOver={this.pausePlay}
              onMouseOut={this.autoPlay}
            >
              <img style={{width:'100%', height:'100%'}} src={item} alt="图片"/>
            </div>) )
          }
        </div>

        { controlButton && <div className="slide-prev" onClick={() => {this.turn(-1)}}>left</div> }
        { controlButton && <div className="slide-next" onClick={() => {this.turn(1)}}>right</div> }

        { dotControl &&
            <div className="slide-dot">
              {this.renderDot}
            </div>
        }
      </div>
    )
  }
}

export default Slider;
