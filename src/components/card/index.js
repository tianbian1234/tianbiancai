import React, { Component } from 'react';
import './index.scss';

export default class Card extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render() {
    let { dataSource } = this.props;
    return(
      <div className="card-conatianer">
        <div className="card-top">
          <div className="title">
            <h2 className="main-content">{dataSource.title}</h2>
            <p className="small-content">{dataSource.subTitle}</p>
          </div>
          <div className="author">
            <h5 className="time">{dataSource.date}</h5>
            <a href="#" className="author-name"><span>NOCMT</span><img src={dataSource.icon} alt=""/></a>
          </div>
        </div>
        <div className="card-img-box">
          <img className="card-img" src={dataSource.img} alt=""/>
        </div>
        <div className="card-boottom">
          <p className="description"> </p>
          <div className="bottom-btn">
            <a href="">继续阅读</a>
            <ul className="from">
              <li className="from-name"> </li>
              <li className="like"> </li>
              <li className="look"> </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
