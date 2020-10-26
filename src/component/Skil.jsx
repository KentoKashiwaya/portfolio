import React from "react";
import "../css/Skil.css";
import html5 from "../image/html-5.svg";
import css3 from "../image/css-3.svg";
import javascript from "../image/javascript.svg";
import react from "../image/react.svg";
import jquery from "../image/jquery.svg";
import git from "../image/git.svg";

const Skil = () => {
  return (
    <div className="Skil">
      <h1 className="sk_title">-SKIL-</h1>
      <div className="container sk_container">
        <img className="table sk_table" src={html5} />
        <img className="table sk_table" src={css3} />
        <img className="table sk_table" src={javascript} />
      </div>
      <div className="container sk_container">
        <img className="table sk_table" src={react} />
        <img className="table sk_table" src={jquery} />
        <img className="table sk_table" src={git} />
      </div>
      <div className="container ">
       <div className="table sk_discription">
         <h3>今できること</h3>
         <div>HTML/CSSを用いたレスポンシブなサイト</div>
         <div>JavaScript(ES6)を用いたUXリッチなwebアプリケーション</div>
         <div>jqueryを用いた静的サイト</div>
         <div>React.jsを用いた状態を持つSPA</div>
         <div>TypeScriptを用いた型のあるwebアプリケーション</div>
         <div>gitによるプロジェクトのバージョン管理</div>
       </div>
      </div>
    </div>
  );
};
export default Skil;
