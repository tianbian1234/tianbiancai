import React, { Component } from 'react';
import Nav from 'components/nav';
import 'whatwg-fetch';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let url='https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=your_api_key&format=json&nojsoncallback=1&tags=penguins';
    fetch(url).then(function(response){
      return response.json();
    }).then(function(json){
        if(json.code == 100) {
        }else{
        }
    })
  }
  render() {
    return (
      <div className="container">
        <Nav />
        {this.props.children}
      </div>
    )
  }
}

export default App;
