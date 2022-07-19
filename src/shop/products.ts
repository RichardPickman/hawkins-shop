import './slider';
import '../sass/style.scss';
import Application from './App';

const app = new Application();

window.onload = () => app.listeners();
