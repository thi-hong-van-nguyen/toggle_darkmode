import React from 'react';
import './App.css';
import useForm from './hooks/useForm';

const intialValue = false;

function App() {
  const [ darkMode, handleToggle] = useForm(intialValue);

  return (

    <div className={darkMode ? 'App darkmode' : 'App'}>
      <div className='nav-bar'>
        <div
          className='darkmode-bar'
          onClick={handleToggle}
        >
          <div
            className={darkMode ? 'toggle toggled' : 'toggle'}
          >
          </div>
        </div>
      </div>
      <div id='body'>
        <h1>Hello My App</h1>
      </div>
    </div>
  );
}

export default App;
