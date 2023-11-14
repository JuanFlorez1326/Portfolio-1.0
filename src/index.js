import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

const toggle = document.querySelector('.hover-show');

toggle.classList.toggle('active');

let Icons = document.querySelectorAll('.navigation .icon');

Icons.forEach((icon) => {
  changeactive();
  icon.classList.add('active-nav');
});

function changeactive() {
  Icons.forEach((icon) => {
    icon.classList.remove('active-nav');
  });
}