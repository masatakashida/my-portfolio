import React from 'react';

export class FooterComponent extends React.Component {
  constructor() {
    // ToDo:今年の西暦を取ってきて、smallに描画したい。
    super();
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <footer>
        <small>&copy; 志田雅貴</small>
      </footer>
    );
  }
}
