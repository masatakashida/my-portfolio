import React from 'react';

export class NavComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '音楽',
    };
  }
  handleClick() {
    console.log('クリックされた');
    this.setState({
      value: this.state.value = "エンジニア"
    });
  }
  render() {
    return (
      <div>
        <Child data={this.state.value} />
        <button onClick={this.handleClick.bind(this)}>変更</button>
      </div>
    );
  }
}
  
// Classコンポーネントで受け取る場合
class Child extends React.Component {
  render() {
    return (
      <div>
        {this.props.data}
      </div>
    );
  }
}
