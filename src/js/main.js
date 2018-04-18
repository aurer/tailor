import { h, render, Component } from 'preact';
import App from './components/app';

const appContainer = document.querySelector('#app')

render(<App />, appContainer, appContainer.lastChild);
