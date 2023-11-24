import React from 'react';
import ReactDOM from 'react-dom';
import App from './WebRoot';

const func = () => {
  console.log('Print!');
};

ReactDOM.render(<App />, document.getElementById('root'));
