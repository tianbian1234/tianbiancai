import React, {Component} from 'react';
import './index.scss';

class Game extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {

  }
  render() {
    return(
      <div className="box">
        <p>Score:<span id="score"></span></p>
        <div className="game-box">
          {/*背景单元格*/}
          <div id="g01" className="grid"></div>
          <div id="g02" className="grid"></div>
          <div id="g03" className="grid"></div>
          <div id="g04" className="grid"></div>

          <div id="g10" className="grid"></div>
          <div id="g11" className="grid"></div>
          <div id="g12" className="grid"></div>
          <div id="g13" className="grid"></div>

          <div id="g20" className="grid"></div>
          <div id="g21" className="grid"></div>
          <div id="g22" className="grid"></div>
          <div id="g23" className="grid"></div>

          <div id="g30" className="grid"></div>
          <div id="g31" className="grid"></div>
          <div id="g32" className="grid"></div>
          <div id="g33" className="grid"></div>

          {/*前景单元格*/}
          <div id="c00" className="ceil n2">2</div>
          <div id="c01" className="ceil n4">4</div>
          <div id="c02" className="ceil n8">8</div>
          <div id="c03" className="ceil n16">16</div>

          <div id="c10" className="ceil n32">32</div>
          <div id="c11" className="ceil n64">64</div>
          <div id="c12" className="ceil n128">128</div>
          <div id="c13" className="ceil n256">256</div>

          <div id="c20" className="ceil n512">512</div>
          <div id="c21" className="ceil n1024">1024</div>
          <div id="c22" className="ceil n2048">2048</div>
          <div id="c23" className="ceil n4096">4096</div>

          <div id="c30" className="ceil n8192">8192</div>
          <div id="c31" className="ceil"></div>
          <div id="c32" className="ceil"></div>
          <div id="c33" className="ceil"></div>
        </div>
      </div>
    )
  }
}

export default Game;
