import './slider';
import '../sass/style.scss';
import Application from './App';

const app = new Application();
app.render();

window.onload = () => app.listeners();
