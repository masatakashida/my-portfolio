import React from 'react';
import {NavComponent} from './nav-component';

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
      title: "",
      text: <a href="https://twitter.com/shida_masataka" className="fl_tw2"><i className="fa fa-twitter"></i><span>Twiiter</span></a>
    });
  }

  handleClick2() {
    console.log('クリックされた');
    this.setState({
      type: this.state.count = 2,
      title: <p>二十歳になりかけの僕</p>,
      text: <iframe src="https://www.youtube.com/embed/s6kh9_tXrvY" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
    });
  }

  handleClick3() {
    console.log('クリックされた');
    this.setState({
      type: this.state.count = 3,
      title: <p>タクトスイッチで音声再生</p>,
      text: <iframe src="https://www.youtube.com/embed/36E_p7ASqA8" frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
    });
  }

  render() {
    return (
      <div>
        <main>
          <button className="square_btn" onClick={this.handleClick1.bind(this)}>PLACE</button>
          <button className="square_btn" onClick={this.handleClick2.bind(this)}>MUSIC</button>
          <button className="square_btn" onClick={this.handleClick3.bind(this)}>ENGINEER</button>
          <div>{this.state.title}</div>
          <div>{this.state.text}</div>
          <div>{this.state.value}</div>
        </main>
      </div>
    );
  }
}
