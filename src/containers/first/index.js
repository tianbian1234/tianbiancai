import React, { Component } from 'react';
import Slider from 'components/slider';
import Card from 'components/card';

import Img1 from 'images/slider/1.jpg';
import Img2 from 'images/slider/2.jpg';
import Img3 from 'images/slider/3.jpg';
import Img4 from 'images/slider/4.jpg';
import Img5 from 'images/slider/5.jpg';
import Img6 from 'images/slider/6.jpg';

import icon from 'images/yeoman.png';

import Img11 from 'images/f1.jpg';
import Img12 from 'images/f2.jpg';
import Img13 from 'images/f3.jpg';
import Img14 from 'images/f4.jpg';
import Img15 from 'images/f5.jpg';

const test = [Img1, Img2, Img3, Img4, Img5, Img6];

const test1 = [
  {
    title: '我的专题课程',
    subTitle: '这主要是做一个测试页面看看',
    date:'2017年7月2日',
    icon: icon,
    img: Img11,
  },
  {
    title: '我的专题课程',
    subTitle: '这主要是做一个测试页面看看',
    date:'2017年7月2日',
    icon: icon,
    img: Img12,
  },
  {
    title: '我的专题课程',
    subTitle: '这主要是做一个测试页面看看',
    date:'2017年7月2日',
    icon: icon,
    img: Img13,
  },
  {
    title: '我的专题课程',
    subTitle: '这主要是做一个测试页面看看',
    date:'2017年7月2日',
    icon: icon,
    img: Img14,
  },
  {
    title: '我的专题课程',
    subTitle: '这主要是做一个测试页面看看',
    date:'2017年7月2日',
    icon: icon,
    img: Img15,
  },
];

class First extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="first-container">
        <div className="slider-box">
          <Slider
          dataSource={test}
          direction={'vertical'}
          pause={false}
          autoPlay={5}
          controlButton={false}
          dotControl={true}
          />
        </div>
        <div className="first-content">
          <div className="first-left">
            <div className="web-first-words">
              <h2 className="title">
                以爱情的名义去爱，爱而深沉
              </h2>
              <p className="content">
                我曾经想过，以怎样的态度去面对一个不一样的人生，但却从未将一个过去的样子带给现在的你，我爱你，爱的深沉，爱的
                无所畏惧，我愿扎根在你所在的天地，慢慢的发芽，布局风霜雪雨，在我还是一棵幼苗之时遇到了你，愿我长成大叔之后，护你
                一生不惊，不扰，为你一生遮风挡雨，唯愿做你一生的大树.....
              </p>
            </div>
          </div>
          <div className="first-right">
            <div className="show-card">
              {
                test1.map(item => (
                  <Card
                    dataSource={item}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default First;
