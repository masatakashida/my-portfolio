import React from 'react';

export class HeaderComponent extends React.Component {
  render() {
    return (
      <header>
        <h1>{this.props.name}</h1>
        <span className="header_icon"><a href="#top"><img src="./images/human.jpg" width="40" /></a></span>
      </header>
    );
  }
}
