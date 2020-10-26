import React from "react";
import "../css/Work.css";
import service from "../image/service.png";
import service2 from "../image/service2.jpg";

const Work = () => {
  return (
    <div className="Work">
      <h1 className="wk_title">-WORK-</h1>
      <div className="container wk_container">
        <a
          className="open_window"
          href="https://github.com/KentoKashiwaya/TellApp"
          target="_blank"
        >
          <img className="table wk_img pc_only" src={service} />
        </a>
        <div className="table wk_table">
          <h2>
            <a
              className="open_window"
              href="https://github.com/KentoKashiwaya/TellApp"
              target="_blank"
            >
              TellApp
            </a>
          </h2>
          <h3><span className="wk_strong">電話営業の効率を最大化するアプリ</span></h3>
          <div className="wk_direction">
            「電話営業がつらい・・・」営業をやっている方なら誰しも一度は経験があるのではないでしょうか。新規開拓で電話営業を主な手法としている会社は、まだまだ多いのが実情です。実は私がいた会社もその中の一社でした。効率よくアポを取り続けることができれば問題ないのですが、日常的にそれを続けるのは至難の技ですし、電話先の担当者に断られてばかりだと心が折れそうになりますよね。
          </div>
          <div className="wk_direction">
            私が2年間電話営業を続けて、誰よりもアポをとるために必要なことが一つだけ確信できました。それは、電話をかけた結果や相手先の情報をできるだけ細かく管理し、そのデータを元にアポ取得の確率が高い電話先にアタックし続けることです。TellAppではリストに入力したデータをダッシュボードに即時反映し、自動で保存します。統一感のあるビジュアルで様々な情報を可視化することができ、Excelやスプレッドシートなどでフォーマットを組むことなく、効率の良い営業活動を行えます。
          </div>
          <div className="anotation">
            使用技術：HTML CSS JavaScript(React.js) materialUI Recharts
          </div>
        </div>
      </div>
      <div className="container wk_container">
        <a
          className="open_window"
          href="https://github.com/KentoKashiwaya/TellApp"
          target="_blank"
        >
          <img className="table wk_img sp_only" src={service2} />
        </a>
      </div>
    </div>
  );
};
export default Work;
