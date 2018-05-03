import React from 'react';

export class HeaderComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <header>
          <h1>{this.props.name}</h1>
          <span className="header_icon"><a href="#top"><img src="../images/" width="40" /></a></span>
        </header>
      </div>
    );
  }
}
