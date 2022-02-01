import SwipeCarousel from './swipe-carousel.js';

const carousel = new SwipeCarousel({
  interval: 5000,
  containerID: '#carousel',
  slideID: '.slide',
  isPlaying: true
});

carousel.init();