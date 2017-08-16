import React, { Component } from 'react';
import './style.scss';

class Begin extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div className="diary-container">
        <h1>在你的字典里，多了我，是否会一帆风顺</h1>
        <pre>
          人活着有两个目标，一个是努力的继续活着，第二个是如行尸走肉般的等待死去。
          我们从不缺少心，但是，我们缺少看世界的眼睛。
        </pre>
      </div>
    )
  }
}

export default Begin
