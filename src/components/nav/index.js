import React from 'react';
import { Link } from 'react-router';

import './index.scss';
import Img from 'public/images/icon.jpg';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="nav-box">
        <img className="logo" src={Img} alt="logo"/>
        <ul className="nav-ul">
          <li className="active"><Link>首页</Link></li>
          <li><Link>文章</Link></li>
          <li><Link>消息</Link></li>
          <li><Link>关于</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;
