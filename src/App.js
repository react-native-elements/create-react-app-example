import React from 'react';
import { Button } from 'react-native-elements';

import './App.css';

function App() {
  return (
    <>
      <style type="text/css">{`
        @font-face {
          font-family: 'MaterialIcons';
          src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');
        }

        @font-face {
          font-family: 'FontAwesome';
          src: url(${require('react-native-vector-icons/Fonts/FontAwesome.ttf')}) format('truetype');
        }
      `}</style>

      <div className="App">
        <header className="App-header">
          <Button title="I'm a button from React Native Elements" />
        </header>
      </div>
    </>
  );
}

export default App;
