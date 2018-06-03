import React from 'react';

export class MainComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  handleClick() {
    console.log('クリックされた');
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <h3>Place</h3>
        <a href="https://twitter.com/shida_masataka" className="fl_tw2">
          <i className="fa fa-twitter"></i><span>Twiiter</span>
        </a>
        <a href="https://github.com/masatakashida" className="fl_tw2 github">
          <i className="fa fa-twitter"></i><span>Github</span>
        </a>

        <h3>music</h3>
        <p>二十歳になりかけの僕</p>
        <iframe src="https://www.youtube.com/embed/s6kh9_tXrvY" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        <p><a href="https://www.facebook.com/masataka.shida/posts/728397967353906?notif_id=1519130065671043&notif_t=feedback_reaction_generic&ref=notif">詳細URL</a></p>

        <h3>Prototype</h3>
        <p>slack-notification</p>
        <p>-準備中</p>
        <p>S-StoryBook</p>
        <p>-開発中</p>
        <p>自動運転アルゴリズム</p>
        <p>AD変換</p>
        <iframe src="https://www.youtube.com/embed/SUEkDbkZ4pc" frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
        <p>アームクローラー 走行テスト</p>
        <iframe src="https://www.youtube.com/embed/wTjc6jlNvQE" frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
        <p>ブロック崩しゲーム</p>
        <iframe src="https://www.youtube.com/embed/pJEbenRZMSo" frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
        <p>トグル動作によるLED</p>
        <iframe src="https://www.youtube.com/embed/C2C98kDc6Yw" frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
        <p>タクトスイッチによるLEDの点灯</p>
        <iframe src="https://www.youtube.com/embed/-tQP6dp0Jqs" frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
        <p>タクトスイッチで音声再生</p>
        <iframe src="https://www.youtube.com/embed/36E_p7ASqA8" frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
        <h3>Skill</h3>
        <a href="#top">↑トップへ</a>
      </div>
    );
  }
}
