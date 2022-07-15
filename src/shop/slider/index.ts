import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const slider = document.querySelector('#slider-round') as HTMLElement;

noUiSlider.create(slider, {
    start: 0,
    connect: 'lower',
    range: {
        'min': 0,
        'max': 3500
    }
});

document.querySelector('.price')?.appendChild(slider)
