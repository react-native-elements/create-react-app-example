import React from "react";
import "./App.css";
import { Button, createTheme, ThemeProvider } from "@rneui/themed";

const theme = createTheme({});

function App() {
  return (
    <>
      <style type="text/css">{`
        @font-face {
          font-family: 'MaterialIcons';
          src: url(${require("react-native-vector-icons/Fonts/MaterialIcons.ttf")}) format('truetype');
        }

        @font-face {
          font-family: 'FontAwesome';
          src: url(${require("react-native-vector-icons/Fonts/FontAwesome.ttf")}) format('truetype');
        }
      `}</style>

      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <Button title="I'm a button from React Native Elements" />
          </header>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
