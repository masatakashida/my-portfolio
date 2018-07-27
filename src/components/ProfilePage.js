import React from 'react';

const ProfilePage = () => (
  <div className="profile">
    <div className="part pro-left">
      <img src="images/shida_ss.jpg" />
    </div>
    <div className="part pro-right">
      <h2 className="title">Profile</h2>
      <div className="description">
        <p>ソフトウェアが人間社会のみならず、自然においてもどのような影響を及ぼし融合していくかにとても興味があります。</p>
        <p>座右の銘は、「初心を忘れず、所信をつらぬく。」小学生の時に考えた言葉です。矛盾しているような言葉にも聞こえますが、このようなパラメータの中を自由に飛び回れるような考え方が大好きです。</p>
        <p>一人一人に自分の可能性や未来を明るいものと感じてもらいたい。</p>
      </div>
      <h2 className="title">Carrier</h2>
      <p>東京理科大学中退(2014-2017)</p>
      <p>MOSOmafia intern(2017)</p>
      <p>MOSOmafia engineer(2017-)</p>
      <p>チトセロボティクス software engineer(2018-)</p>
      <h2 className="title">Activities</h2>
      <p>森のあつまり(2016-2017)</p>
      <p>ぼくらはてんさい(2016-)</p>
      <a className="twitter-timeline" width="80%" height="700" href="https://twitter.com/shida_masataka?ref_src=twsrc%5Etfw">Tweets by shida_masataka</a>
    </div>
  </div>
);

export default ProfilePage;
