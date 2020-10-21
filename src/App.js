import React from 'react';
import './App.css';
import WhatsLab from './components/WhatsLab/WhatsLab';


function App() {
  return (
    <div className={"app-container"}>
      <WhatsLab
      userPicture={'https://picsum.photos/50/50?a=1'}
      iconSearch={'iconSearch'}
      iconOptions={'iconOptions'}

      />
    </div>
  );
}

export default App;
