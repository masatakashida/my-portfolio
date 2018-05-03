import React from 'react';

export class HeaderComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
/*
  handleClick() {
    console.log('クリックされた');
    this.setState({
      count: this.state.count + 1
    });
  }
*/
  render() {
    return (
      <div>
        <header>
          <h1>{this.props.name}</h1>
          <span className="#"><a href="#top"><img src="#" width="40" /></a></span>
        </header>
      </div>
    );
  }
}
