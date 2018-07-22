import React from 'react';

const MusicPage = () => (
  <div className="music">
    <div className="part m-left">
      <span></span>
      <iframe src="https://www.youtube.com/embed/s6kh9_tXrvY?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    <div className="part m-right">
      <h2 className="title">Music</h2>
      <div className="description">
        <p>人生とともにあるような、未来への希望を込めた曲づくりをしています。</p>
      </div>
    </div>
  </div>
);

export default MusicPage;