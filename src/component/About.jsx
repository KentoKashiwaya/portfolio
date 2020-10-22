import React from "react";
import "../css/About.css";
import profile from "../image/profile.jpeg";

const About = () => {
  return (
    <div className="About">
      <h1 className="ab_title">-ABOUT-</h1>
      <div className="container ab_container">
        <img className="table ab_img" src={profile} />
        <div className="table ab_table">
          <h2>柏谷健人(かしわやけんと)</h2>
          <h3>1995年4月17日生まれ(25歳)</h3>
          <div>
            3人兄弟の末っ子として東京都日野市に生まれる。兄の影響で小学校1年生から野球を始め、徐々にのめり込んでいく。中学卒業後、都立日野高校に進学し3年時に夏の西東京大会で準優勝する。そのかたわら、mixiをはじめとする黎明期のSNSに興味を持ち始める。高校卒業後は広告やメディアに特化した学部をもつ地元の大学に進学する。大学卒業後、HR×Techの領域に強みを持つ都内の広告ベンチャーに新卒で入社。自社求人メディアの営業部に配属され、新規テレアポから原稿の掲載業務等を1年間担当した。その後インサイドセールス部の立ち上げメンバーとしてアサインされる。営業手法や施策を繰り返し効果検証し、それまで属人的になっていた各々の営業手法をマニュアル化した。「より世の中を豊にするサービスやアプリを開発したい」という思いからエンジニアへの転職を決意し、2020年3月に2年間お世話になった同社を退社。フロントエンド領域を中心に独学しつつ現在就職活動中。
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
