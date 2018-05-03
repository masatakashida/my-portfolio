import React from 'react';

// musicというボタンをクリックすると、グレーアウトして、画面が出てくる
export class SubComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      type: 0,
      title: "",
      text: ""
    };
  }

  handleClick1() {
    console.log('クリックされた');
    this.setState({
      type: this.state.count = 1,
      title: "タイトル１",
      text: "サンプル１"
    });
  }

  handleClick2() {
    console.log('クリックされた');
    this.setState({
      type: this.state.count = 2,
      title: "タイトル２",
      text: <p>テキスト</p>
    });
  }

  handleClick3() {
    console.log('クリックされた');
    this.setState({
      type: this.state.count = 3,
      title: "タイトル３",
      text: <p>テキスト</p>
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick1.bind(this)}>music</button>
        <button onClick={this.handleClick2.bind(this)}>place</button>
        <button onClick={this.handleClick3.bind(this)}>place</button>
        <div>{this.state.type}</div>
        <div>{this.state.title}</div>
        <div>{this.state.text}</div>
      </div>
    );
  }
}
