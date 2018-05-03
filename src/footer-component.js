import React from 'react';

export class FooterComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <small>&copy; 志田雅貴</small>
      </div>
    );
  }
}
