import React from 'react';
import './App.css';
import {JPYCBox} from './lib';

function App() {
  return (
    <div className="App">
      <h1>Demo Page</h1>
      <span>ネットワークはRinkebyです。</span>
      <JPYCBox
          amount={100} // 投げ銭金額
          contractAddress={"0xbD9c419003A36F187DAf1273FCe184e1341362C0"} // ネットワークごとのコントラクトアドレス
          to={"0x7f83740f797dbD832b3C948834503Cd46AfDE8B0"} // 投げ銭先
        />
    </div>
  );
}

export default App;
