import React from 'react';
import './App.css';
import JPYCBox from './components/JPYCBox';

function App() {
  return (
    <React.Fragment>
      <JPYCBox 
        amount={100} // 投げ銭金額
        contractAddress={"0xbD9c419003A36F187DAf1273FCe184e1341362C0"} // ネットワークごとのコントラクトアドレス
        to={"0x"} // 投げ銭先
      />
    </React.Fragment>
  );
}

export default App;
